import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.dark};
    padding: 0px 0px;
    display: grid;
    grid-template-rows: 60px auto auto 1fr auto;
    width: ${props => props.open ? "200px" : "60px"};
    overflow: hidden;
    border-right: solid 1px ${props => props.theme.grey};

    h1{ 
        padding-left: 18px;
        color: ${props => props.theme.lightgrey};
    }

    a{  

        font-size: 15px;
        color: ${props => props.theme.lightgrey};
        text-decoration: none;
        font-weight: normal;
        padding: 10px 15px;
        text-align: ${props => props.open ? "left" : "center"};
        
        svg{
            color: ${props => props.theme.white};
            margin-right: 5px;
            font-size: 18px;
            padding-top: ${props => props.open ? "4px" : "0px"};
        }

        :hover{
            background-color: ${props => props.theme.grey};
            color: ${props => props.theme.white};

            svg{
                color: ${props => props.theme.white};
            }
        }
    }

    a:first-of-type{
        margin-top: 15px;
    }

    a:last-of-type{
        margin-bottom: 35px;
    }


`