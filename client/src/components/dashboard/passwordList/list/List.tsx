import React from 'react'
import { TPasswordList } from '../../../../context/types';
import { Container, ListItem } from './styles';

export const List: React.FC<
    {
        passwords: TPasswordList, 
        focus: string[], 
        setFocus: React.Dispatch<string[]>
    }
    > = ({passwords, focus, setFocus}) => {

    const changeFocus = (name: string, pass: string) => {
        setFocus([name, pass]);
    }

    return (
        <Container>
            {passwords && passwords.length > 0 
                ? passwords[1].map((el, id) => 
                    (
                        <ListItem isFocus={el === focus[0]} onClick={() => changeFocus(el, passwords[0][id])} key={id}>
                            {el.toLocaleUpperCase()}
                        </ListItem>
                    )) 
                : null
            }
        </Container>
    )
}