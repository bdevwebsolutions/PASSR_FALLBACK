import React from 'react'
import styled from 'styled-components'
import { Master } from './master/Master'
import { PasswordList } from './passwordList/PasswordList'
import { Details } from './passwordDetails/Details'



export const Dashboard = () => {
    

    return (
        <Container>
            <GeneralSettings>
                <Master/>
            </GeneralSettings>
            <Passwords>
                <PasswordList/> 
            </Passwords>
            <PasswordContent>
                <Details/>
            </PasswordContent>
            <Disclaimer>
                <p>VERSION: BETA 0.0.1</p>
            </Disclaimer>
        </Container>
    )
}



const Container = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr 35px;
    height: 100%;
`


const Passwords = styled.div`
    border-right: solid 1px ${props => props.theme.grey};
    width: 350px;

    grid-column: 1/2;
    grid-row: 2/3;

`

const PasswordContent = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;


`

const GeneralSettings = styled.div`
    grid-column: 1/3;
    grid-row: 1/2;
    width: auto;
`

const Disclaimer = styled.div`
    grid-column: 1/3;
    grid-row: 3/4;
    border-top: solid 1px ${props => props.theme.grey};
    line-height: 35px;
    text-align: center;
`