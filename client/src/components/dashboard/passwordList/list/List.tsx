import React from 'react'
import { TPasswordList } from '../../../../context/types';
import { Container, ListItem } from './styles';

export const List: React.FC<
    {
        passwords: TPasswordList, 
        focus: string[], 
        setFocus: React.Dispatch<string[]>,
        isEncrypted: boolean,
        copy: string[],
    }
    > = ({passwords, focus, setFocus, isEncrypted, copy}) => {

    const changeFocus = (name: string, pass: string, cred: string) => {
        setFocus([name, pass, cred]);
    }

    React.useEffect(() => {
        setFocus(["", "", ""])
    }, [passwords, setFocus])
    
    return (
        <Container>
            {passwords && passwords.length > 0 
                ? passwords[1].map((el, id) => 
                    (   !isEncrypted && !copy[id] 
                        ? null 
                        : 
                            <ListItem isFocus={el === focus[0]} onClick={() => changeFocus(el, passwords[0][id], passwords[2][id])} key={id}>
                                {isEncrypted ? el.toLocaleUpperCase() : copy[id].toLocaleUpperCase()}
                            </ListItem>
                    )) 
                : null
            }
        </Container>
    )
}