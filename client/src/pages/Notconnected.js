import React from 'react'
import styled from 'styled-components'


export default function NotConnected(){

    return(
        <Container>
            <div>
                <h1>PASSR_.</h1>
                <p> Decentralized password managing.</p>
                <p onClick={() => {window.location.reload()}}>Connect to metamask to continue.</p>
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
        padding: 15px;
        margin-bottom: 5px;
        padding: 5px;
        
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
        color:  ${props => props.theme.dark};
        font-size: 12px;
    }

`