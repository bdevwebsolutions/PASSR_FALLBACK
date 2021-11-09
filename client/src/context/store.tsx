import React, {createContext} from 'react'
import { addToVault, getPasswords, removeFromVault } from '../helpers/web3/web3.service';
import { IStoreContext, TAddPasswordToContract, TGetPasswordsFromContract, TRemovePasswordFromContract } from './types';

export const StoreContext = createContext({} as IStoreContext);

const StoreProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts] = React.useState([""]);
  const [contract, setContract] = React.useState(null);
  const [chainId, setChainId] = React.useState<number>(0);
  const [master, setMaster] = React.useState("");
  const [passwordList, setPasswordList] = React.useState([[""], [""]]);
  const [focusPassword, setFocusPassword] = React.useState(["",""]);

  const getPasswordsFromContract: TGetPasswordsFromContract = async (setLoading) => {
    //@ts-ignore
    setPasswordList(await getPasswords(accounts, web3, contract, setLoading));
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
  }



  return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
}   



export default StoreProvider;