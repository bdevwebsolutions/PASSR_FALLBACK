import styled from "styled-components"
export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;

    div{
        width: 450px;
        text-align: center;

        p{
            text-align: center;
            font-weight: bold;
        }
    }

    *{
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }

    input{
        padding: 15px;
        text-align: center;
        cursor: default;
    }

    h3{
        font-weight: bold;
        font-size: 14px;
    }
`

export const Sub = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 0px;
`