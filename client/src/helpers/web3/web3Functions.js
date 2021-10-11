import Web3 from "web3";
import SimpleStorageContract from "../../contracts/PasswordVault.json";
import axios from 'axios';

//ADD LISTENERS

//CONNECT TO WEB3
//This function instantiates a web3 connection to metamask
export async function connectToWeb3(setWeb3, setAccounts, setChainId, setContract) {

  try {

    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();

    //LISTENERS
    //Change of accounts
    window.ethereum.on('accountsChanged', async (info) => {
      window.location.reload()
    });

    //Change of chain
    window.ethereum.on('chainChanged', (chain) => {
      setChainId(parseInt(chain).toString())
    })

    //Set variables to store
    setWeb3(web3)
    setAccounts(accounts)
    setChainId(await window.ethereum.networkVersion)

  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`,
    );
    console.error(error);
  }
}

//GET WEB 3 INSTANCE
//Creates a web3 instance
const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Accounts now exposed

          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });



//DEPLOY CONTRACT
//Deploys the contract
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
        throw new Error('An error occured while estimating the gas cost')
    }
    return gasAmount;
  })

  setDeployementState(3)

  //TODO GET WEI FROM GASSTATION
  //SEND CONTRACT
  const DEPLOYED_CONTRACT = await BUILD_CONTRACT.send({
    from: accounts[0],
    gas: Math.round(GASAMOUNT / 100 * 105),
    gasPrice: Web3.utils.toWei("5", 'Gwei'),
  }).then(async (newContractInstance) => {
    return newContractInstance
  })
  console.log(DEPLOYED_CONTRACT._address)

  setDeployementState(0)

  return DEPLOYED_CONTRACT._address;

}


//ALL CONTRACT INTERACTIONS
//CRUD ETC...
export const InteractWithContract = async (accounts, web3, contract) => {
  const CONTRACT = new web3.eth.Contract(SimpleStorageContract.abi, contract);
  console.log(CONTRACT.methods)  
 
  await CONTRACT.methods.addToVault("snapchat", "oeioei").send({from: accounts[0]}).then(res => {
    console.log('SUCCES')
  })
  //TEST GET
  await CONTRACT.methods.getCompleteVault().call({from: accounts[0]}).then(res => {
    console.log(res);
  })
  /*
  //TEST DELETE
  await CONTRACT.methods.removeFromVault('netlog').send({from: accounts[0]}).then(res => {
    console.log('DELETE FROM ARRAY')
  })

  //TEST GET
  await CONTRACT.methods.getCompleteVault().call({from: accounts[0]}).then(res => {
    console.log(res);
  })
  */

}


// GET ALL PASSWORDS FROM THE CONTRACT

export const getPasswordsFromVault = async (accounts, web3, contract) => {
  const CONTRACT = new web3.eth.Contract(SimpleStorageContract.abi, contract);
  await CONTRACT.methods.getCompleteVault().call({from: accounts[0]}).then(res => {
    console.log(res);
  })
}