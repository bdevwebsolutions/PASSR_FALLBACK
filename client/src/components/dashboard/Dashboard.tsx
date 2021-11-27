import React from 'react'
import { Details } from './passwordDetails/Details';
import {TopBar} from './top';
import { Container, GeneralSettings, Passwords, PasswordContent, Disclaimer } from './styles'
import DashboardController from './controller'
import { navigate } from '@reach/router';



export const Dashboard: React.FC = () => {

    React.useEffect(() => {
        navigate('/dashboard/passwords')
    }, [])

    return (
        <Container>
            <GeneralSettings>
                <TopBar/>
            </GeneralSettings>
            <Passwords>
                {/*<PasswordList/>*/}
                <DashboardController/> 
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
