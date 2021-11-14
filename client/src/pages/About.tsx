/**
    @INFO
    This component returns the about route in the dashboard

    @CONTAINS
    general information about our dapp and company

    //TODO
    All info still has to be included

*/

import { RouteComponentProps } from '@reach/router';
import React from 'react'
import { TextContainer } from '../styling/global';

const About: React.FC<RouteComponentProps> = () => {
    return (
        <TextContainer>
            <h4>About</h4>
            <h2>PASSR_.</h2>
            <br></br>
            <p>Passr_. is a decentralized password manager build on ethereum technology and deployed on the matic network.</p>
            <hr></hr>
            <p>Passr_. puts full control back in your hands while still garantueing security. Your hashed passwords are stored in our smart contract and can only be decrypted by your master password. In comparison to normal password managers, WE DO NOT STORE THE MASTER, this ensures that the key to your secrets always lays in your hand.</p>
            <br></br>
        </TextContainer>
    )
}

export default About;