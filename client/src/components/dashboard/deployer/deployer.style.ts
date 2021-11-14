import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0px auto;


    *{
        display: block;
    }
    h2{
        margin-bottom: 0px;
    }



    p{
        margin-bottom: 4px; 
        padding: 4px;
    }

    input{

        padding: 15px;
        margin-bottom: 15px;
        margin-top: 15px;
        width: 100%;
    }

    hr{
        border: solid 1px ${props => props.theme.grey};
        margin-bottom: 15px;
    }

    h3{
        font-size: 22px;
        margin-bottom: 5px;
    }

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 15px;

    div{
        background-color: ${props => props.theme.darkgrey};
        padding: 15px;
        border: solid 1px ${props => props.theme.grey};
        :hover{
            box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
        }
    }

    div:first-of-type {
        grid-row: 1/2;
        grid-column: 1/3;
        :hover{
            box-shadow: none;
        }
    }
    div:nth-of-type(2){
        display: grid;
        grid-template-rows: auto auto 1fr auto auto;
    }
`