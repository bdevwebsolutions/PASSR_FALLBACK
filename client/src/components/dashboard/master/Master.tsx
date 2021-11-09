import React from 'react'
import { StoreContext } from '../../../context/store'
import styled from 'styled-components';


export const Master = () => {

    const {master, setMaster, contract} = React.useContext(StoreContext)
    const [visibleContract, setVisibleContract] = React.useState(false)

    const handleInput = (value: string) => {
        setMaster(value)
    }

    return (
        <Container>
            <div>
                <h3>Master Password.</h3>
                <input placeholder={master.replaceAll(/./g,"*")} type="password" onChange={(e) => {handleInput(e.target.value)}}/>
            </div>
            <div>
                <h3>Contract.</h3>
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
    max-height: 100px;

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