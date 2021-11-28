import React from 'react'
import styled from 'styled-components';
import { RedButton } from '../../../../styling/global';
import { RouteComponentProps } from '@reach/router';



export const Settings: React.FC<RouteComponentProps> = () => {

    const [verifyDelete, setVerifyDelete] = React.useState(false);
    return (
        <Container>
            <h4>Settings</h4>
            <div>
                <RedButton disabled={!verifyDelete}>Forget contract</RedButton>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    grid-template-rows: auto 1fr;   
    p {
        text-align: center;
        margin-top: 15px;
        font-weight: bold;
    }

    h4{
        font-weight: 14px;
        padding-left: 15px;
    }

    div{
        border-top: solid 1px ${props => props.theme.grey};
    }
`