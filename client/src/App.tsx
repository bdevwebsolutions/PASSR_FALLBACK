import React from "react";

import { intializeEthereumConnection } from "./helpers/web3/web3Functions";

import { StoreContext } from "./context/store";

//PAGES
import NotConnected from './pages/Notconnected';
import Dashboard from "./pages/Dashboard";
import { Container, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
      return (
        <ThemeProvider theme={darkTheme}>
          <Container maxWidth="md">
            <NotConnected/>
          </Container>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="md">
          <Dashboard/>
        </Container>
      </ThemeProvider>
    )
  
}


export default App;
