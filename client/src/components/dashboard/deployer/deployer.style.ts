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
    grid-template-columns: 1fr;
    width: 550px;

    button{
        margin-bottom: 15px;
    }

    div{
        background-color: ${props => props.theme.darkgrey};
        padding: 15px;
    }
`