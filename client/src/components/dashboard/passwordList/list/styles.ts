import styled from "styled-components"

export const Container = styled.div`
    text-align: left;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: calc(100vh - 188px);
`

export const ListItem = styled.div<{isFocus: boolean}>`
    min-height: min-content;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    border-bottom: solid 1px ${props => props.theme.grey};
    cursor: pointer;
    color: ${props => props.isFocus ? props.theme.grey : props.theme.white} !important;
    font-weight: ${props => props.isFocus ? "bold" : "normal"};
    background-color: ${props => props.isFocus ? props.theme.green : props.theme.dark} !important;
    overflow: hidden;
    :hover{
        background-color: ${props => props.theme.green};
        color: ${props => props.theme.grey};
        font-weight: bold;
    }
`