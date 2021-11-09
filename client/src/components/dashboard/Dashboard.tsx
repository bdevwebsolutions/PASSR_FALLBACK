import React from 'react'
import { Master } from './master/Master'
import { PasswordList } from './passwordList/passwordList/PasswordList'
import { Details } from './passwordDetails/Details'
import { Container, GeneralSettings, Passwords, PasswordContent, Disclaimer } from './styles'



export const Dashboard: React.FC = () => {

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
                <p>VERSION: 0.0.1</p>
            </Disclaimer>
        </Container>
    )
}
