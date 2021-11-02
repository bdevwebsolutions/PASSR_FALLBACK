import React from 'react'
import styled from 'styled-components'
import { addToVault } from '../../../helpers/web3/web3.service'
import { GreenButton } from '../../../styling/global'
import {StoreContext} from '../../../context/store';


export const AddNew = () => {

    const {accounts, web3, contract, passwordList, setPasswordList, focusPassword, setFocusPassword, master} = React.useContext(StoreContext);
    const [isLoading, setIsLoading] = React.useState(false);
    const handleNew = () => {
        if(master.length === 0){
            return null;
        }
        addToVault(accounts, web3, contract, 'ababab', 'pass', master, setIsLoading);
    }

    return (
        <Container onClick={handleNew}>
                ADD NEW +
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    padding: 15px;
    align-items: center;
    border-top: solid 1px ${props => props.theme.grey};
    :hover{
        background-color: ${props => props.theme.green};
        color: ${props => props.theme.grey};
        font-weight: bold;
        cursor: pointer;
    }
`