import React from 'react'
import {Link} from '@reach/router';
import {AiFillCloud, AiFillHome, AiFillRead} from 'react-icons/ai'
import {FaCoins, FaFileContract} from 'react-icons/fa'; 
import {RiGovernmentFill} from 'react-icons/ri';

//Styles
import { Container } from './styles';
import { theme } from '../../styling/global';

export const Nav: React.FC = () => {

    return(
        <Container>
            <h1>PASSR_.</h1>
            <div>
                <p>General</p>
                <Navlink to="dashboard">
                    <AiFillHome size={16}/>
                    Dashboard
                </Navlink>
            </div>
            <div>
                <p>Community</p>
                <Navlink to="airdrop">
                    <AiFillCloud size={16}/>
                    Airdrop
                </Navlink>
                <Navlink to="governance">
                    <RiGovernmentFill size={16}/>
                    Governance 
                </Navlink>
            </div>
            <div>
                <p>Info</p>
                <Navlink to="about">
                    <AiFillRead size={16}/>
                    About 
                </Navlink>
                <Navlink to='contract'>
                    <FaFileContract size={16}/>
                    Contract
                </Navlink>
            </div>
            <div>
                <Navlink to="token">
                    <FaCoins size={16}/>
                    PSR
                </Navlink>
            </div>
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
                 borderRight: isPartiallyCurrent ? `solid 3px ${theme.green}` : "none",
             }
         }
     }}
    />
);



