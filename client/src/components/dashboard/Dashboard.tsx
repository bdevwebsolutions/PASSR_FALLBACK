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
                <p>BETA 1.0</p>
            </Disclaimer>
        </Container>
    )
}
