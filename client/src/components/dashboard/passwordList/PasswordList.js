import React from 'react'
import styled from 'styled-components';
import {StoreContext} from '../../../context/store';
import { getPasswords } from '../../../helpers/web3/web3.service';

//COMPONENTS
import {AddNew} from './AddNew';
import { List } from './List';

export const PasswordList = () => {


    const {accounts, web3, contract, passwordList, setPasswordList, focusPassword, setFocusPassword} = React.useContext(StoreContext);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        async function getData(){
            setPasswordList(await getPasswords(accounts, web3, contract, setIsLoading));
        }
        getData();
    }, [accounts, web3, contract, setIsLoading, setPasswordList])

    if(isLoading) {
        return (
            <LoadingContainer><p>LOADING...</p></LoadingContainer>
        )
    }
    return (
        <Container>
            <List passwords={passwordList} focus={focusPassword} setFocus={setFocusPassword} />
            <AddNew/>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: 100%;
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        height: 100%;
    }
`