import React from 'react'
import { StoreContext } from '../../../context/store'
import {AES, enc} from 'crypto-js';
import styled from 'styled-components';
import { GreenButton, RedButton, PrimaryButton } from '../../../styling/global';
import { removeFromVault } from '../../../helpers/web3/web3.service';
import { Popup } from '../../popup/Popup';


export const Details: React.FC = () => {

    const { focusPassword, master, removeFromContract } = React.useContext(StoreContext);
    const [message, setMessage] = React.useState("")
    const [visiblePass, setVisiblePass] = React.useState(false);
    const [decodedPassword, setDecodedPassword] = React.useState("");
    const [isEncrypted, setisEncrpyted] = React.useState(true);
    const [removeState, setRemoveState] = React.useState<number>(0)
    const STATES = [null, <p>Removing...</p>, <p>Succes...</p>];

    const decrypt = () => {
        if(master.length === 0){
            setMessage("NO MASTER PASSWORD");
            window.setTimeout(() => {
                setMessage("")
            }, 1000)
            return null;
        }
        setMessage("")
        const decrypted = AES.decrypt(focusPassword[1].toString(), master.toString());
        const decode = decrypted.toString(enc.Utf8);
        if(decode.length === 0){
            return null;
        }
        setDecodedPassword(decode);
        setisEncrpyted(false);
    }

    const encrypt = () => {
        setDecodedPassword(focusPassword[1]);
        setisEncrpyted(true);
        setVisiblePass(false);
    }

    const handleRemove = async () => {
        removeFromContract(setRemoveState, focusPassword[0]);
    } 

    React.useEffect(() => {
        setMessage("");
        setDecodedPassword(focusPassword[1])
        setisEncrpyted(true);
        setVisiblePass(false);
    }, [focusPassword])

    if(focusPassword[0].length === 0){
        return(
            <Container>
                <div>
                    <p>NO PASSWORD SELECTED</p>
                </div>
            </Container>
        )
    }
    return (
        <>
            <Container>
                <div>
                    <h3>{focusPassword[0].toUpperCase()}</h3>
                    <input type="text" placeholder={visiblePass ? decodedPassword : decodedPassword.replace(/./g, "*")} readOnly={true} />
                    <Sub>
                        <PrimaryButton onClick={() => setVisiblePass(!visiblePass)}>{visiblePass ? "HIDE" : "SHOW"}</PrimaryButton>
                        <PrimaryButton onClick={() => window.navigator.clipboard.writeText(decodedPassword)}>COPY</PrimaryButton>
                    </Sub>
                    <GreenButton onClick={isEncrypted ? decrypt : encrypt}>{isEncrypted ? 'Decrypt' : 'Hide Derypted'}</GreenButton>
                    <RedButton onClick={handleRemove}>Remove From Vault</RedButton>
                    <p>{message}</p>
                </div>

            </Container>
            {removeState === 0 ? null : <Popup>{STATES[removeState]}</Popup>}
        </>
    )
}

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;

    div{
        width: 450px;
        text-align: center;
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

const Sub = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 0px;
`