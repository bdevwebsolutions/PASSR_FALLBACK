import React from 'react'
import {Link} from '@reach/router';
import {AiFillHome} from 'react-icons/ai'
import {FaCoins} from 'react-icons/fa'; 

//Styles
import { Container } from './styles';
import { theme } from '../../styling/global';

export const Nav: React.FC = () => {

    return(
        <Container>
            <h1>PASSR_.</h1>
            <Navlink default to="/">
                <AiFillHome/>
                Dashboard
            </Navlink>
            {/*
            <Navlink to="/about">
                <AiFillRead/>
                About 
            </Navlink>
            <Navlink to='/contract'>
                <FaFileContract/>
                Contract
            </Navlink>

            <Navlink to="/airdrop">
                <AiFillCloud/>
                Airdrop
            </Navlink>
            <Navlink to="/governance">
                Governance 
            </Navlink>

            <div></div>
            <Navlink to="/token">
                <FaCoins/>
                PASSR
            </Navlink>
            */}
        </Container>
    )
}

// @ts-ignore
const Navlink = (props) => (
    <Link
     {...props}
     getProps={({isPartiallyCurrent}) => {
         return {
             style: {
                 backgroundColor: isPartiallyCurrent ? theme.grey : theme.dark,
                 color: isPartiallyCurrent ? theme.green : theme.lightgrey,
                 fontWeight: isPartiallyCurrent ? "bold" : "normal",
             }
         }
     }}
    />
);



