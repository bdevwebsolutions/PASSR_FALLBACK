import React from 'react'
import styled from 'styled-components'
import { GreenButton, IconButton, PrimaryButton } from '../../styling/global'
import { Popup } from '../popup/Popup'
import {AiOutlineCloseCircle, AiOutlineKey, AiOutlineLock, AiOutlinePlusCircle} from 'react-icons/ai';



export const Tutorial: React.FC<{setShowTutorial: React.Dispatch<boolean>}> = ({setShowTutorial}) => {

    const [state, setState] = React.useState(0);
    const STATES = [
        <GettingStarted/>,
        <Master/>,
        <Add/>,
        <List/>,
        <Summary/>
    ]

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
                        onClick={() => state !== 4 ? setState(state + 1) : setShowTutorial(false)}
                    >{state !== 4 ? "NEXT" : "CLOSE"}</GreenButton>
                </Buttons>
            </Container>
        </Popup>
    )
}

const GettingStarted = () => {
    return (
        <>
            <b>READING THIS IS IMPORTANT !</b>
            <h5>Getting Started.</h5>
            <p>Well done! Reaching this point means you deployed a contract and are only a few basic steps away from decentralizing your password management.</p>
        </>
    )
}

const Master = () => {
    return(
        <>
            <h5>Master Password.</h5>
            <p>Setting a master password is the most important step. The master password tab is indicated by this icon.</p>
            <br></br>
            <br></br>
            <AiOutlineKey size={24}/>
            <br></br>
            <br></br>
            <p>The master password is what will give you acces to your saved secrets, without this password you will never be able to decrypt your secrets.</p>
            <br></br>
            <b>BE SHURE THIS IS A SAFE PASSWORD YOU CAN REMEMEBER</b>
            <br></br>
            <p>We will never add this to a database, that's how we keep security at the highest level. Using a wrong master or losing it will not give you acces to the decrypted state of your passwords.</p>
        </>
    )
}

const Add = () => {
    return(
        <>
            <h5>Add Password.</h5>
            <p>Adding a new password can only be done after the master is set and confirmed. The add password tab is indicated by this icon.</p>
            <br></br>
            <br></br>
            <AiOutlinePlusCircle size={24}/>
            <br></br>
            <br></br>
            <p>Adding a password requires 3 params:
                <br></br> - The domain (site/app you will be using the password for)
                <br></br> - The user (email/username)
                <br></br> - The password (password you use for that accout).
            </p>
            <br></br>
            <p>These 3 params will be encrypted on the client and then stored on the blockhain, even if someone get's access to these they won't be able to decrypt them without the master.</p>
        </>
    )
}

const List = () => {
    return(
        <>
            <h5>View List.</h5>
            <p>View and decrypt your passwords, decryption can only be done after a master is set and confirmed. The view passwords tab is indicated by this icon.</p>
            <br></br>
            <br></br>
            <AiOutlineLock size={24}/>
            <br></br>
            <br></br>
            <p>Selecting a password will allow you to decrypt and copy it to your clipboard.</p>
        </>
    )
}

const Summary = () => {
    return(
        <>
            <h5>Summary.</h5>
            <p>One more time to be shure you understand the workings.</p><br></br>
            <p> - First: Set a master</p><br></br>
            <p> - Second: Add a new password</p><br></br>
            <p> - Last: View your password in the list</p><br></br>
            <br></br>
            <p>DISCLAIMER: some actions require you to change data on the blockchain, these actions might take some time depending on how busy the chain is at that moment. In case of losing the master or the contract addres we are not able to retrieve it. General security measurements when working with passwords still apply.</p>
        </>
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