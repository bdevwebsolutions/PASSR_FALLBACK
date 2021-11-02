import React, {useEffect, useContext, useState, createContext} from 'react'

export const StoreContext = createContext(null);


export default function StoreProvider({children}) {

  const [web3, setWeb3] = React.useState(null);
  const [accounts, setAccounts] = React.useState(null);
  const [contract, setContract] = React.useState(null);
  const [chainId, setChainId] = React.useState(null);
  const [master, setMaster] = React.useState("");
  const [passwordList, setPasswordList] = React.useState([]);
  const [focusPassword, setFocusPassword] = React.useState(["", ""]);

  const Store = {
    web3, setWeb3, 
    accounts, setAccounts, 
    contract, setContract,
    chainId, setChainId,
    master, setMaster,
    passwordList, setPasswordList,
    focusPassword, setFocusPassword,
  }

    return <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
}   