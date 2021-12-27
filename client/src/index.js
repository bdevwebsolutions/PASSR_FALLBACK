import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//STORE
import StoreProvider from './context/store';

ReactDOM.render(
        <StoreProvider>
            <App />
        </StoreProvider>, 

    document.getElementById('root')
);
