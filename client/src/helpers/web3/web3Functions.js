import detectEthereumProvider from '@metamask/detect-provider';
import SimpleStorageContract from "../../contracts/PasswordVault.json";
import axios from 'axios';
import Web3 from 'web3';

//CONNECT TO WEB3

export async function intializeEthereumConnection(setWeb3, setAccounts, setChainId) {
  const provider = await detectEthereumProvider();
  if(provider) {
    //CHECK IF CURRENT PROVIDER IS ETHEREUM
    if(provider !== window.ethereum){
      window.alert('Multiple wallets detected cannot ensure a ethereum connection');
    }
    const allowedChains = process.env.NODE_ENV === "development" ? [80001, 1] : [137, 1]
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if(parseInt(chainId, 16) !== allowedChains[0]){
      window.alert('Connect to the matic network.');
      return null;
    };

    //LISTEN FOR NETWORK CHANGES
    window.ethereum.on('chainChanged', () => {
      window.location.reload();
    })
            
    //GET ACCOUNTS
    let currentAccount = null;

    const handleAccountsChanged = (accounts) => {
      if(accounts.length === 0) {
        window.location.reload();
      } else {
        currentAccount = accounts;
        setWeb3(new Web3(window.ethereum));
        setAccounts(currentAccount);
        setChainId(parseInt(chainId, 16))
      }
    }

    await window.ethereum
      .request({method: 'eth_requestAccounts'})
      .then(res => handleAccountsChanged(res))
      .catch(err => {
        if(err.code === 4001) {
          window.alert('User refused the connection')
        }
      })

    await window.ethereum
      .request({ method: 'eth_accounts' })
      .then(res => handleAccountsChanged(res))
      .catch((err) => {
        window.alert('Ethereum could not get accounts')
      });

    window.ethereum.on('accountsChanged', (res) => handleAccountsChanged(res));
    
  } else {
    console.warn('Install Metamask');
  }
}

//DEPLOY CONTRACT
export const deployPasswordContract = async (accounts, web3, setDeployementState) => {
  setDeployementState(1)
  
  //CREATE NEW CONTRACT
  const BASE_CONTRACT = new web3.eth.Contract(SimpleStorageContract.abi)

  //BUILD THE CONTRACT
  const BUILD_CONTRACT = BASE_CONTRACT.deploy({
    data: SimpleStorageContract.bytecode
  })

  setDeployementState(2)

  //CALCULATE GASAMOUNT
  let GASAMOUNT = await BUILD_CONTRACT.estimateGas({}, (error, gasAmount) => {
    if(error){
        window.alert('An error occured while estimating the gas cost')
    }
    return gasAmount;
  })

  let gasStandard = await axios.get('https://gasstation-mainnet.matic.network/').then(res => {
    return res.data.standard.toString()
  })

  setDeployementState(3)

  //SEND CONTRACT
  const DEPLOYED_CONTRACT = await BUILD_CONTRACT.send({
    from: accounts[0],
    gas: Math.round(GASAMOUNT / 100 * 105),
    gasPrice: Web3.utils.toWei(gasStandard, 'Gwei'),
  }).then(async (newContractInstance) => {
    return newContractInstance
  })
  setDeployementState(0)

  return DEPLOYED_CONTRACT._address;

}