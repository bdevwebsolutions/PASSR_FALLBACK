import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.dark};
    padding: 0px 0px;
    display: grid;
    grid-template-rows: 60px repeat(3, auto) 1fr;
    width: 200px;
    overflow: hidden;
    border-right: solid 1px ${props => props.theme.grey};

    div{
        border-top: solid 1px ${props => props.theme.grey};

        p{
            padding: 10px 10px;
            color ${props => props.theme.grey};
            font-weight: bold;
            font-size: 12px;
        }
    }

    div:last-of-type{
        display: flex;
        align-items: flex-end;
        align-content: flex-end;
        padding-bottom: 35px;
    }

    h1{ 
        padding-left: 18px;
        color: ${props => props.theme.lightgrey};
        line-height: 60px;
    }

    a{  
        display: block;
        box-sizing: border-box;
        width: 100%;
        font-size: 12px;
        color: ${props => props.theme.lightgrey};
        text-decoration: none;
        font-weight: bolder;
        padding: 10px 15px;
        text-align: left;
        
        svg{
            color: ${props => props.theme.white};
            margin-right: 5px;
            font-size: 18px;
            padding-top: 4px;
        }

        :hover{
            background-color: ${props => props.theme.grey};
            color: ${props => props.theme.white};

            svg{
                color: ${props => props.theme.white};
            }
        }
    }

`