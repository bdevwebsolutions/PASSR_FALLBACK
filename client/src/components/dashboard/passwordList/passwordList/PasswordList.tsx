import React from 'react'
import {StoreContext} from '../../../../context/store';

//COMPONENTS
import {AddNew} from '../addNew/AddNew';
import { List } from '../list/List';
import { LoadingContainer, Container } from './styles';

export const PasswordList: React.FC = () => {


    const {passwordList, focusPassword, setFocusPassword, getPasswordsFromContract} = React.useContext(StoreContext);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        getPasswordsFromContract(setIsLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsLoading])

    if(isLoading) {
        return (
            <LoadingContainer><p>LOADING...</p></LoadingContainer>
        )
    }
    return (
        <Container>
            <List passwords={passwordList} focus={focusPassword} setFocus={setFocusPassword} />
        </Container>
    )
}

