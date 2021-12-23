import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 61px 1fr 35px;
    height: 100%;
`


export const Passwords = styled.div`
    border-right: solid 1px ${props => props.theme.grey};
    width: 400px;

    grid-column: 1/2;
    grid-row: 2/3;

`

export const PasswordContent = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;


`

export const GeneralSettings = styled.div`
    border-bottom: solid 1px ${props => props.theme.grey};

    grid-column: 1/3;
    grid-row: 1/2;
    width: auto;
`

export const Disclaimer = styled.div`
    grid-column: 1/3;
    grid-row: 3/4;
    border-top: solid 1px ${props => props.theme.grey};
    line-height: 35px;
    text-align: center;
    
    p{
        font-size: 10px !important;
    }
`