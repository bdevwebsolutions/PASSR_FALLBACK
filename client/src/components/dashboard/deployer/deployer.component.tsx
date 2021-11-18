/**
    @INFO
    This component returns the deployer for deploying or connecting to your smart contract

    @CONTAINS
    A deployer function to deploy a smart contract
    A Dispatcher for the global address for the smart contract that is in use
    A Test interaction - WORKING

    //TODO
    CHANGE CHAIN ID TO "137" WHEN IN PRODUCTION
    Create a wrong-chain component and a save to db component

*/

import React from 'react'

//Context
import { DeployerContext } from './deployer.store';
import {StoreContext} from '../../../context/store';

//Util
import { fetchContractFromLocalStorage } from '../../../helpers/data';
import {deployPasswordContract} from '../../../helpers/web3/web3Functions';

//Styling
import { Container, Grid } from './deployer.style';
import { PrimaryButton, GreenButton } from '../../../styling/global';

//Popup
import {Popup} from '../../popup/Popup';

//UTIL
import isValidAddress from './deployer.util';


export const Component = () => {

    //CONTEXT
    const {accounts, web3, chainId, setContract} = React.useContext(StoreContext);

    //STORE
    const STORE = React.useContext(DeployerContext);

    //GET CONTRACT RELATED TO THE ADDRESS
    React.useEffect(() => {
        STORE.setAddress(fetchContractFromLocalStorage(accounts))
        if(isValidAddress(fetchContractFromLocalStorage(accounts))){
            STORE.setIsValidAddress(true);
        };
    }, [])
    
    const deploy = async () => {
        if(chainId !== STORE.allowedChains){
            alert('NOT CONNECTED TO THE RIGHT CHAIN')
        } else {
            const ADDRESS = await deployPasswordContract(accounts, web3, STORE.setDeployementState).catch(() => {
                STORE.setDeployementState(0);
            })
            if(ADDRESS !== undefined){
                STORE.setAddress(ADDRESS)
                localStorage.setItem(accounts[0], ADDRESS)
                STORE.setIsValidAddress(true);
            }
        }
    }

    //HANDLE CONTRACT CHANGE
    const handleContractChange = (newAddress: string) => {
        console.log(isValidAddress(newAddress));
        if(isValidAddress(newAddress)){
            STORE.setAddress(newAddress)
            STORE.setIsValidAddress(true);
        } else {
            STORE.setIsValidAddress(false)
        };
    }
    
    //HANDLE CONTRACT SET
    const handleContractSet = () => {
        localStorage.setItem(accounts[0], STORE.address)
        //@ts-ignore
        setContract(STORE.address)
    }


    //TODO CHANGE TO 137 IN PROD
    if(chainId !== STORE.allowedChains){
        return (
        <Container>
            <div>
                <h3>CONNECT TO THE MATIC NETWORK</h3>
            </div>
        </Container>
        )
    }
    return (
        <Container>
            <Grid>
                <div>
                    <h2>Welcome to PASSR_.</h2>
                </div>
                <div>
                    <h3>Already deployed a contract ?</h3>
                    <p><b>Great!</b></p>
                    <p>Load from contract address.</p>
                    <input 
                        type="text"  
                        defaultValue={STORE.address} 
                        placeholder={STORE.address} 
                        onChange={e => handleContractChange(e.target.value)}
                    />
                    <GreenButton 
                        disabled={!STORE.isValidAddress} 
                        onClick={handleContractSet}
                    >{STORE.isValidAddress ? "Load from contract address" : "Invalid contract address"}</GreenButton>
                </div>
                <div>
                    <h3>Deploy a new contract .</h3>
                    <p>Deploying a new contract will give you a contract address, this will be stored in your local storage. <br></br><br></br><b>!! COPY THIS ADDRESS AND STORE IT SOMEWHERE SAFE !! </b><br></br> There is no risk in someone obtaining it, but losing it yourself will make you lose all access to your passwords.</p>
                    <br></br>
                    <PrimaryButton 
                        onClick={deploy}
                    >Deploy a new contract.</PrimaryButton>
                    {STORE.deployementState === 0 ? null : <Popup>{STORE.PopupState[STORE.deployementState]}</Popup>}
                </div>
            </Grid>
        </Container>
    )
}





