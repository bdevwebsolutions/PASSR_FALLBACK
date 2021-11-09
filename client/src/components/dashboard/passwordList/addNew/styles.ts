import styled from "styled-components"

export const Container = styled.div`
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