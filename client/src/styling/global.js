//THEME

import styled, { createGlobalStyle } from "styled-components"
/*
export const theme = {
    dark: "#0D1B2A",
    darkBlue: "#1B263B",
    blue: "#415A77",
    lightBlue: "#778DA9",
    grey: "#E0E1DD",
    white: "#FFFFFF",
    accent: "#FFFFFF"
}
*/
/*
export const theme = {
    dark: "#282F32",
    darkBlue: "darkgrey",
    blue: "grey",
    lightBlue: "lightgrey",
    grey: "#E0E1DD",
    white: "#FFFFFF",
}
*/


export const theme = {
    dark: "#272A2A",
    white: "#FEFEFE",
    blue: "#C0E8FF",
    green: "#D1FFD5",
    yellow: "#FEFDD1",
    grey: "#444A4D",
    lightgrey: "#EBECF0",
    opaque: "#282F3280"
}




export const GlobalStyle = createGlobalStyle`

    *{
     box-sizing: border-box ;
    }
    body{
        background-color: ${theme.dark};
        overflow: hidden;
    }

    h1, h2, h3, p{
        color: ${theme.lightgrey};
        margin: 0px;
        padding: 0px;
    }

    span {
        color: ${theme.lightgrey};
        font-size: 14px;
        font-weight: bold;
    }

    h1{
        font-size: 36px;
        font-weight: bold;
    }

    h2{
        font-size: 28px;
        font-weight: bold;
    }

    h3{
        font-size: 22px;
        font-weight: normal;
    }

    p{
        font-size: 14px;
        color: ${props => props.theme.lightgrey};
    }

    button{
        border: none;
        box-sizing: border-box;
        outline: none;
        cursor: pointer;
        background-color: ${theme.white};

        :hover{
            font-weight: 600;
        }
    }

    input{
        background-color: ${theme.grey};
        outline: none;
        border: solid 1px ${theme.grey};
        border-radius: 2px;
        outline: none;
        color: ${theme.white};
        font-size: 14px;
    }

    b{
        color: ${theme.green};
    }

`

//COMPONENTS
const Button = styled.button`
    width: 100%;
    min-width: 100px;
    padding: 12px 5px;
    font-weight: normal;
    font-size: 14px;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    text-align: center;
    border-radius: 2px;
    :hover{
        font-weight: bold;
    }
`

export const PrimaryButton = styled(Button)`
    color: ${theme.white};
    background-color: ${theme.dark};
    border: solid 1px ${theme.grey};
`

export const GreenButton = styled(Button)`
    background-color: ${theme.green};
    color: ${theme.dark};
`
