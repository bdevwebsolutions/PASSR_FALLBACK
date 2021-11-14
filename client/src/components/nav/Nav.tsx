import React from 'react'
import {Link} from '@reach/router';
import {AiFillHome, AiFillRead, AiFillCloud } from 'react-icons/ai'
import {FaCoins, FaFileContract} from 'react-icons/fa'; 

//Styles
import { Container } from './styles';
import { theme } from '../../styling/global';

export const Nav: React.FC = () => {

    return(
        <Container>
            <h1>PASSR_.</h1>
            <Navlink to="/">
                <AiFillHome/>
                Home 
            </Navlink>
            <Navlink to="/about">
                <AiFillRead/>
                About 
            </Navlink>
            <Navlink to='/contract'>
                <FaFileContract/>
                Contract
            </Navlink>
            {/*
            <Navlink to="/airdrop">
                <AiFillCloud/>
                Airdrop
            </Navlink>
            <Navlink to="/governance">
                Governance 
            </Navlink>
            */}
            <div></div>
            <Navlink to="/token">
                <FaCoins/>
                PASSR
            </Navlink>
        </Container>
    )
}

// @ts-ignore
const Navlink = (props) => (
    <Link
     {...props}
     getProps={({isCurrent}) => {
         return {
             style: {
                 backgroundColor: isCurrent ? theme.green : theme.dark,
                 color: isCurrent ? theme.dark : theme.lightgrey,
                 fontWeight: isCurrent ? "bold" : "normal",
             }
         }
     }}
    />
);



