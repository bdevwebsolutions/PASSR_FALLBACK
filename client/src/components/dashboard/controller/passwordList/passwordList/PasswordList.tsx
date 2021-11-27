import { RouteComponentProps } from '@reach/router';
import React from 'react'
import {StoreContext} from '../../../../../context/store';

import { List } from '../list/List';
import { Container } from './styles';

export const PasswordList: React.FC<RouteComponentProps> = () => {


    const {passwordList, focusPassword, setFocusPassword, getPasswordsFromContract, locationsAreEncrypted, locationsCopy} = React.useContext(StoreContext);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        getPasswordsFromContract(setIsLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setIsLoading])

    return (
        <Container>
            <h4>Passwords</h4>
            {isLoading 
                ? <p>Loading...</p> 
                : <List passwords={passwordList} focus={focusPassword} setFocus={setFocusPassword} isEncrypted={locationsAreEncrypted} copy={locationsCopy}/>
            }
        </Container>
    )
}

