import React from 'react'
import {Link} from '@reach/router';
import {AiFillHome, AiFillRead, AiFillCloud } from 'react-icons/ai'
import {FaCoins, FaFileContract} from 'react-icons/fa'; 

//Styles
import { Container } from './styles';

export const Nav: React.FC = () => {

    const open = true;

    return(
        //@ts-ignore
        <Container open={open}>
            <h1>PASSR_.</h1>
            <Link to="/">
                <AiFillHome/>
                {open ? "Home" : null}
            </Link>
            <Link to="/about">
                <AiFillRead/>
                {open ? "About" : null}
            </Link>
            <Link to='/contract'>
                <FaFileContract/>
                {open ? "Contract" : null }
            </Link>
            <Link to="/airdrop">
                <AiFillCloud/>
                {open ? "Airdrop" : null }
            </Link>
            <Link to="/governance">
                {open ? "Governance" : null}
            </Link>
            <div></div>
            <Link to="/token">
                <FaCoins/>
                {open ? "PASSR" : null}
            </Link>
        </Container>
    )
}



