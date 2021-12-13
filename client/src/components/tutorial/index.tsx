import React from 'react'
import styled from 'styled-components'
import { GreenButton, IconButton, PrimaryButton } from '../../styling/global'
import { Popup } from '../popup/Popup'
import {AiOutlineCloseCircle} from 'react-icons/ai';

//STATES
import { 
    GettingStarted,
    Master,
    Add,
    List,
    Summary
} from './Views';
import { StoreContext } from '../../context/store';



export const Tutorial: React.FC<{setShowTutorial: React.Dispatch<boolean>}> = ({setShowTutorial}) => {

    const {master} = React.useContext(StoreContext);
    const [state, setState] = React.useState(0);
    const STATES = [
        <GettingStarted/>,
        <Master/>,
        <Add/>,
        <List/>,
        <Summary/>
    ]

    const handleNext = () => {
        switch (state) {
            case 0: 
                setState(1);
                break;
            case 1:
                if(master.length > 0) setState(2);
                break;
            case 2:
                setState(3);
                break;
            case 3:
                setState(4);
                break;
            case 4:
                setShowTutorial(false);
                break;
        }
    }

    return (
        <Popup>
            <Container>
                <Title>
                    <h4>Welcome to PASSR_.</h4>
                    <IconButton onClick={() => setShowTutorial(false)}>
                        <AiOutlineCloseCircle size={20}/>
                    </IconButton>
                </Title>
                <Content>
                    {STATES[state]}
                </Content>
                <Buttons>
                    <PrimaryButton 
                        disabled={state === 0} 
                        onClick={() => state !== 0 ? setState(state - 1) : setState(0)}
                    >PREVIOUS</PrimaryButton>
                    <div></div>
                    <GreenButton
                        disabled={state === 1 && master.length <= 0} 
                        onClick={handleNext}
                    >{state !== 4 ? "NEXT" : "CLOSE"}</GreenButton>
                </Buttons>
            </Container>
        </Popup>
    )
}

const Title = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 40px;
    border-bottom: solid 1px ${props => props.theme.grey};
    margin-bottom: 15px;
    width: 100%;

    button{
        text-align: right;
    }
`

const Buttons = styled.div`
    display: grid !important;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    margin-top: 25px;
    h4{
        display: block;
        width: 100%;
        margin: none !important;
    }
`

const Content = styled.div`
    width: 100%;
    p{
        cursor: default !important;
        padding: 0;
        margin: 0;
    }

    h5{
        margin: 0px;
        display: block;
        width: 100%;
    }
    
    border-bottom: solid 1px ${props => props.theme.grey};
    padding-bottom: 25px;
`

const Container = styled.div`
    width: 800px;
    height: auto;
    display: grid;
    grid-template-rows: 40px auto 40px;
    padding: 15px;
`