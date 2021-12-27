import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../styling/global'


const NotConnected: React.FC = () => {

    return(
        <Container>
            <div>
                <h1>PASSR_.</h1>
                <br></br>
                <br></br>
                <p> Decentralized password managing.</p>
                <p onClick={() => {window.location.reload()}}>Connect metamask to the matic chain to continue.</p>
                <br></br>
                <PrimaryButton><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">WEBSITE</a></PrimaryButton>
                <br/>
                <sub>* refresh the page if connecting does not show the dashboard</sub>
            </div>
        </Container>
    )
}

const Container = styled.div`

    display: grid;
    align-items: center;
    align-content: center;
    text-align: center;
    height: 100vh;
    max-height: 100vh;
    padding: 45px;
    grid-template-rows: 1fr;

    h1{
        font-size: 48px;
        color: ${props => props.theme.dark};
        background-color: ${props => props.theme.green};
        display: inline-block;
        padding: 18px;
        margin-bottom: 5px;
        padding: 8px 12px;
        
    }

    div{
        width: 100%;
        max-width: 1240px;
        margin: 0px auto;
    }

    svg{
        width: 20%;
        height: 20%;
        min-width: 700px;
    }

    p{
        font-size: 22px;
        margin-bottom: 2px;
    }

    p:nth-of-type(2){
        font-size: 14px;
    }

    sub{
        color:  ${props => props.theme.lightgrey};
        font-size: 12px;
    }

    button {
        width: 120px;
        display: block;
        margin: 0px auto;
    }

    a {
        color: white;
        text-decoration: none;
    }

`


export default NotConnected;