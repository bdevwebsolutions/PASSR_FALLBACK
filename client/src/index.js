import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
