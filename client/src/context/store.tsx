import { AES, enc } from 'crypto-js';
import React, {createContext} from 'react'
import { addToVault, getPasswords, removeFromVault } from '../helpers/web3/web3.service';
import { IStoreContext, TAddPasswordToContract, TDecryptLocations, TGetPasswordsFromContract, TRemovePasswordFromContract } from './types';

export const StoreContext = createContext({} as IStoreContext);

const StoreProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts] = React.useState([""]);
  const [contract, setContract] = React.useState(null);
  const [chainId, setChainId] = React.useState<number>(0);
  const [master, setMaster] = React.useState("");
  const [passwordList, setPasswordList] = React.useState([[""], [""]]);
  const [focusPassword, setFocusPassword] = React.useState(["",""]);
  const [locationsAreEncrypted, setLocationsAreEncrypted] = React.useState(true);

  const getPasswordsFromContract: TGetPasswordsFromContract = async (setLoading) => {
    //@ts-ignore
    setPasswordList(await getPasswords(accounts, web3, contract, setLoading));
    setLocationsAreEncrypted(true);
  }
  
  const addPasswordToContract: TAddPasswordToContract = async (setDeployementState, domain, pass) => {
    await addToVault(accounts, web3, contract, domain, pass, master, setDeployementState);
    getPasswordsFromContract(() => {});
    setDeployementState(3);
  }

  const removeFromContract: TRemovePasswordFromContract = async (setRemoveState, domain) => {
    await removeFromVault(accounts, web3, contract, domain, setRemoveState);
    getPasswordsFromContract(() => {});
    setRemoveState(0);
  };

  const decryptLocations: TDecryptLocations = () => {
    if(locationsAreEncrypted) {
      const decryptedList = passwordList[1].map(loc => AES.decrypt(loc.toString(), master.toString()).toString(enc.Utf8));
      //TODO IF WRONG MASTER IS USED IT GIVES ERROR WHEN DECRYPT
      setPasswordList(old => [old[0], decryptedList]);
      setLocationsAreEncrypted(false);
    } else {
      getPasswordsFromContract(() => {});
    }

  }

  const Store: IStoreContext = {
    web3, setWeb3, 
    accounts, setAccounts, 
    contract, setContract,
    chainId, setChainId,
    master, setMaster,
    passwordList, setPasswordList,
    focusPassword, setFocusPassword,
    getPasswordsFromContract,
    addPasswordToContract,
    removeFromContract,
    decryptLocations
  }



  return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
}   



export default StoreProvider;