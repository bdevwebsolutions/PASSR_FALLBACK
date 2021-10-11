import React from 'react'
import { StoreContext } from '../../../context/store'
import styled from 'styled-components';
import { BlueButton, GreenButton } from '../../../styling/global';
import {CgLastpass} from 'react-icons/cg';



export const Master = () => {

    const {master, setMaster, contract} = React.useContext(StoreContext)
    const [input, setInput] = React.useState("")
    const [visibleMaster, setVisibleMaster] = React.useState(false)
    const [visibleContract, setVisibleContract] = React.useState(false)

    const handleInput = () => {
        setMaster(input)
    }

    return (
        <Container>
            <div>
                <h3>Master Password.</h3>
                <input placeholder={master.replaceAll(/./g,"*")} type="password" onChange={(e) => {setInput(e.target.value)}}/>
                <GreenButton onClick={handleInput}>Apply</GreenButton>
                <sub onClick={() => setVisibleMaster(!visibleMaster)}>{visibleMaster ? master : master.replaceAll(/./g,"*") }</sub>
            </div>
            <div>
                <h3>Contract.</h3>
                <sub onClick={() => setVisibleContract(!visibleContract)}>{visibleContract ? contract : contract.replaceAll(/./g, "*")}</sub>
            </div>
        </Container>
    )
}

const Container = styled.div`
    border-bottom: solid 1px ${props => props.theme.grey};

    width: 100%;

    display: grid;
    grid-template-columns: 1fr auto;

    h3{
        display: block;
        font-size: 16px;
        font-weight: bold;
    }
    
    *{
        display: inline-block;
        padding: 4px;
        margin-right: 15px;
    }

    div{
        padding: 15px;
    }

    sub{
        margin-bottom: 0px;
        padding-bottom: 0px;
        cursor: pointer;
        font-size: 14px;
        color: ${props => props.theme.white};
        font-weight: bold;
    }

    button{
        display: inline; 
        width: auto;
        padding: 5px 10px;
        width: 210px;
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

`