import React from 'react'
import {StoreContext} from '../../../context/store';
import { getPasswordsFromVault, InteractWithContract } from '../../../helpers/web3/web3Functions';



export const PasswordList = () => {


    const {accounts, web3, contract} = React.useContext(StoreContext);

    return (
        <div>
            <button onClick={() => {InteractWithContract(accounts, web3, contract)}}>TEST</button>
            <button onClick={() => {getPasswordsFromVault(accounts, web3, contract)}}>GETALL</button>
        </div>
    )
}