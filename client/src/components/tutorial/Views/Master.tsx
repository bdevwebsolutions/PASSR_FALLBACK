import React from 'react'
import styled from 'styled-components'
import { StoreContext } from '../../../context/store'
import { GreenButton } from '../../../styling/global'

export const Master = () => {

    const {setMaster} = React.useContext(StoreContext);
    const [isValid, setIsValid] = React.useState(false);
    const [masterCopy, setMasterCopy] = React.useState('')
    const [confirmMessage, setConfirmMessage] = React.useState('');
    const handleMaster = (copy: string) => {
        if(copy === masterCopy) {
            setIsValid(true)
        }
    }

    const handleSet = () => {
        if(isValid){
            setMaster(masterCopy);
            setConfirmMessage('Master password set click on NEXT to continue');
        }
    }

    return(
        <Container>
            <div>
                <h5>Master Password.</h5>
                <p>Setting a master password is the most important step.</p>
                <br></br>
                <p>The master password is what will give you acces to your saved secrets, without this password you will never be able to decrypt your secrets.</p>
                <br></br>
                <p>We will never add this to a database, that's how we keep security at the highest level. Using a wrong master will not give you acces to the decrypted state of your passwords.</p>
            </div>
            <div>
                <div>
                    <p>Master Password</p>
                    <input onChange={(e) => setMasterCopy(e.target.value)} type="password" placeholder='password'/>
                    <p>Repeat Master</p>
                    <input onChange={(e) => handleMaster(e.target.value)} type="password" placeholder='password'/>
                    <GreenButton onClick={handleSet} disabled={!isValid} >Confirm</GreenButton>
                    <p>{confirmMessage}</p>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px !important;

    div:first-of-type{
        padding: 15px;
    }

    div:nth-of-type(2){
        display: grid;
        align-items: center;
        justify-items: center;
        border: none;
    }

    input{
        padding: 8px 10px;
    }

    button{
        margin-top: 10px;
    }
`