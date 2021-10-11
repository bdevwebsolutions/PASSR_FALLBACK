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
import styled from 'styled-components';

import {StoreContext} from '../../../context/store';
import { fetchContractFromLocalStorage } from '../../../helpers/data';
import {deployPasswordContract} from '../../../helpers/web3/web3Functions';


import { PrimaryButton, GreenButton } from '../../../styling/global';

//popup
import {Popup} from './../../popup/Popup';



export const Deployer = () => {

    //CONTEXT
    const {accounts, web3, chainId, setContract} = React.useContext(StoreContext);

    //ADDRESS FOR CONTRACT LOCALLY IN THIS COMPONENT
    const [address, setAddress] = React.useState("");

    //Popup
    const [deployementState, setDeployementState] = React.useState(0)
    const STATES = ["", "Building the contract...", "Calculating Gas Fee", "Deploying the contract, this can take a while..."]


    //GET CONTRACT RELATED TO THE ADDRESS
    React.useEffect(() => {
        setAddress(fetchContractFromLocalStorage(accounts))
    }, [])


    //TODO CHANGE TO 137 IN PROD
    //DEPLOYS A NEW CONTRACT WHEN ON THE RIGHT CHAIN
    const deploy = async () => {
        if(chainId !== "80001"){
            alert('NOT CONNECTED TO THE RIGHT CHAIN')
        } else {
            const ADDRESS = await deployPasswordContract(accounts, web3, setDeployementState).catch(() => {
                setDeployementState(0)
            })
            if(ADDRESS !== undefined){
                setAddress(ADDRESS)
                localStorage.setItem(accounts[0], ADDRESS)
            }
        }
    }

    //HANDLE CONTRACT SET
    const handleContractSet = () => {
        localStorage.setItem(accounts[0], address)
        setContract(address)
    }


    //TODO CHANGE TO 137 IN PROD
    if(chainId !== "80001"){
        return <p>CONNECT TO the MUMBAI TESTCHAIN</p>
    }
    return (
        <Container>
            <div>
                <h2>Hi!</h2>
                <p>If you are new, start with reading our about section.</p>
                <hr></hr>
                <h3>Already deployed a contract ?</h3>
                <p><b>Great!</b></p>
                <p>Load from contract address.</p>
                <input type="text"  defaultValue={address} placeholder={address} onChange={e => setAddress(e.target.value)}/>
                <GreenButton onClick={handleContractSet}>Load from contract address</GreenButton>
                <hr></hr>
                <h3>Deploy a new contract .</h3>
                <p>Deploying a new contract will give you a contract address, this will be stored in your local storage. !! COPY THIS ADDRESS AND STORE IT SOMEWHERE SAFE !!</p>
                <br></br>
                <PrimaryButton onClick={deploy}>Deploy a new contract.</PrimaryButton>
                {deployementState === 0 ? null : <Popup textstate={STATES[deployementState]}/>}
            </div>
        </Container>
    )
}





const Container = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    margin: 0px auto;

    div{
        background-color: ${props => props.theme.darkgrey};
        padding: 15px;
        border: solid 1px ${props => props.theme.grey};
        box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
    }

    *{
        display: block;
    }
    h2{
        margin-bottom: 15px;
    }

    p{
        margin-bottom: 4px; 
        padding: 4px;
    }

    button:nth-of-type(2){
        border: none;
    }

    input{

        padding: 15px;
        margin-bottom: 15px;
        margin-top: 15px;
        width: 100%;
    }

    hr{
        border: solid 1px ${props => props.theme.grey};
        margin-bottom: 15px;
    }

    h3{
        font-size: 22px;
        margin-bottom: 5px;
    }

`