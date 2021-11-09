import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//STORE
import StoreProvider from './context/store';

//THEME
import {ThemeProvider} from 'styled-components';
import { theme, GlobalStyle } from './styling/global';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StoreProvider>
            <GlobalStyle/>
            <App />
        </StoreProvider>
    </ThemeProvider>, 

    document.getElementById('root')
);
