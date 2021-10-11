import React from 'react'
import styled from 'styled-components'
import { Master } from './master/Master'
import { PasswordList } from './passwordList/PasswordList'



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

            </PasswordContent>
        </Container>
    )
}



const Container = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
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