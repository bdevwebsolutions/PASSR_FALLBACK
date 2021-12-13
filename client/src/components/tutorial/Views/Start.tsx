import React from 'react'
import { AiOutlineKey, AiOutlineLock, AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'


export const GettingStarted = () => {
    return (
        <Container>
            <div>
                <h5>Getting Started.</h5>
                <p>Reaching this point means you deployed a contract and are only a few basic steps away from decentralizing your password management.</p>
            </div>
            <div>
                <ul>
                    <li><AiOutlineKey size={18}/> Setting a master password</li>
                    <li><AiOutlinePlusCircle size={18}/> Adding a new password</li>
                    <li><AiOutlineLock size={18}/> Viewing your passwords</li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px !important;
    text-align: justify !important;
    div:first-of-type{
        padding: 15px;
    }

    ul{
        height: 100%;
        margin: 0px;
        display: grid;
        grid-template-rows: repeat(3, 1fr);

        font-size: 12px;

        svg{
            padding-top: 5px;
        }
        li{
            line-height: 50px;
        }
    }
`