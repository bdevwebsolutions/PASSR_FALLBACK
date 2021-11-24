import React from 'react'
import { StoreContext } from '../../../context/store'
import styled from 'styled-components';
import { GreenButton, IconButton } from '../../../styling/global';
import { AddNew } from '../passwordList/addNew/AddNew';
import {GrDomain} from 'react-icons/gr'


export const Master = () => {

    const {master, setMaster, contract, decryptLocations} = React.useContext(StoreContext)
    const [visibleContract, setVisibleContract] = React.useState(false)

    const handleInput = (value: string) => {
        setMaster(value)
    }

    const handleRedirect = () => {
       const route = process.env.NODE_ENV === "development" 
        ? `https://mumbai.polygonscan.com/address/${contract}` 
        : `https://polygonscan.com/address/${contract}`;
        window.open(route, '_blank');
    }

    return (
        <Container>
            <div className='controller'>
                <input placeholder="Master Password" type="password" onChange={(e) => {handleInput(e.target.value)}}/>
                <IconButton disabled={master.length === 0} onClick={() => decryptLocations()}><GrDomain size={30}/></IconButton>
                <AddNew/>
            </div>
            <div>
                <h3 onClick={() => handleRedirect()}>Contract. (view on polygonscan)</h3>
                {/*  @ts-ignore */}
                <p onClick={() => setVisibleContract(!visibleContract)}>{visibleContract ? contract : contract.replace(/./g, "*")}</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    border-bottom: solid 1px ${props => props.theme.grey};

    width: 100%;

    display: grid;
    grid-template-columns: 1fr auto;
    height: auto;

    h3{
        display: block;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
    
    *{
        display: inline-block;
        padding: 4px;
        margin-right: 15px;
    }

    div{
        padding: 15px;
    }

    div:nth-of-type(2){
        min-width: 370px;
    }

    p{
        display: inline-block;
        margin-top: 8px !important;
        cursor: pointer;
        font-size: 12px;
        color: ${props => props.theme.white};
    }

    button{
        display: inline; 
        width: auto;
        width: 40px;
        line-height: 40px;
    }

    input{
        width: 210px;
    }

    p{  
        margin-top: 15px;
        display: block;
    }

    div:nth-of-type(2){
        border-left: solid 1px ${props => props.theme.grey};
    }
    .controller{
        display: flex;
        align-items: center;
    }

`