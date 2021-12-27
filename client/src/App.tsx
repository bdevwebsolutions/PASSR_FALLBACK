import React from "react";

import { intializeEthereumConnection } from "./helpers/web3/web3Functions";

import { StoreContext } from "./context/store";

//PAGES
import NotConnected from './pages/Notconnected';
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {

  const {
    web3, 
    setWeb3, 
    setAccounts, 
    setChainId,
  } = React.useContext(StoreContext);

  React.useEffect(() => {
    intializeEthereumConnection(setWeb3, setAccounts, setChainId);
  }, [setWeb3, setAccounts, setChainId])


    if (!web3) {
      return <NotConnected/>;
    }
    return <Dashboard/>
  
}


export default App;
