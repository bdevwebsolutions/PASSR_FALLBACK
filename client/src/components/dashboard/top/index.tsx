import React from 'react'
import {StoreContext} from '../../../context/store';
import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';
import { IconButton } from '../../../styling/global';

export const TopBar: React.FC = () => {

    const {contract} = React.useContext(StoreContext)
    const [visibleContract, setVisibleContract] = React.useState(false)

    const handleRedirect = () => {
        const route = process.env.NODE_ENV === "development" 
         ? `https://mumbai.polygonscan.com/address/${contract}` 
         : `https://polygonscan.com/address/${contract}`;
         window.open(route, '_blank');
     }

    return (
        <Container>
            {/*  @ts-ignore */}
            <p onClick={() => setVisibleContract(!visibleContract)}>{visibleContract ? contract : contract.replace(/./g, "*")}</p>
            <IconButton onClick={() => handleRedirect()}><MdOpenInNew size={24} style={{marginTop: 0}}/></IconButton>
        </Container>
    )
}

const Container = styled.div`
    border-bottom: solid 1px ${props => props.theme.grey};
    width: 100%;
    padding: 15px;
    text-align: right;

    h3{
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
    }
    
    *{
        display: inline-block;
        margin-right: 15px;
    }

    p{
        display: inline-block;
        cursor: pointer;
        font-size: 12px;
        line-height: auto;
        color: ${props => props.theme.white};
    }

`