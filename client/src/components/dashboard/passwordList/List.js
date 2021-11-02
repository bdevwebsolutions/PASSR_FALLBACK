import React from 'react'
import styled from 'styled-components'

export const List = ({passwords, focus, setFocus}) => {

    const changeFocus = (name, pass) => {
        setFocus([name, pass]);
    }

    return (
        <Container>
            {passwords && passwords.length > 0 
                ? passwords[1].map((el, id) => 
                    (
                        <ListItem isFocus={el === focus[0]} value={el} onClick={() => changeFocus(el, passwords[0][id])} key={id}>
                            {el.toLocaleUpperCase()}
                        </ListItem>
                    )) 
                : null}
        </Container>
    )
}


const Container = styled.div`
    text-align: left;
    grid-gap: 5px;
    overflow: auto;
`

const ListItem = styled.div`
    height: 55px;
    line-height: 55px;
    padding-left: 15px;
    border-bottom: solid 1px ${props => props.theme.grey};
    cursor: pointer;
    color: ${props => props.isFocus ? props.theme.grey : null};
    font-weight: ${props => props.isFocus ? "bold" : "normal"};
    background-color: ${props => props.isFocus ? props.theme.green : null};

    :hover{
        background-color: ${props => props.theme.green};
        color: ${props => props.theme.grey};
        font-weight: bold;
    }
`