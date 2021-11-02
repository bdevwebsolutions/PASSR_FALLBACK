import React from 'react'
import { StoreContext } from '../../../context/store'
import {AES, enc} from 'crypto-js';
import styled from 'styled-components';
import { GreenButton, PrimaryButton } from '../../../styling/global';


export const Details = () => {

    const { focusPassword, master } = React.useContext(StoreContext);
    const [message, setMessage] = React.useState("")
    const [visiblePass, setVisiblePass] = React.useState(false);
    const [decodedPassword, setDecodedPassword] = React.useState("");

    const decrypt = () => {
        if(master.length === 0){
            setMessage("NO MASTER PASSWORD");
            return null;
        }
        setMessage("")
        const decrypted = AES.decrypt(focusPassword[1].toString(), master.toString());
        const decode = decrypted.toString(enc.Utf8);
        if(decode.length === 0){
            setMessage("WRONG MASTER")
            return null;
        }
        setDecodedPassword(decode);
    }

    React.useEffect(() => {
        setMessage("");
        setDecodedPassword(focusPassword[1])
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
        <Container>
            <div>
                <h3>{focusPassword[0].toUpperCase()}</h3>
                <input type="text" placeholder={visiblePass ? decodedPassword : decodedPassword.replaceAll(/./g, "*")} readOnly={true} />
                <Sub>
                    <PrimaryButton onClick={() => setVisiblePass(!visiblePass)}>{visiblePass ? "HIDE" : "SHOW"}</PrimaryButton>
                    <PrimaryButton onClick={() => window.navigator.clipboard.writeText(decodedPassword)}>COPY</PrimaryButton>
                </Sub>
                <GreenButton onClick={decrypt}>decrypt</GreenButton>
                <p>{message}</p>
            </div>
        </Container>
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
    }

    h3{
        font-weight: bold;
    }
`

const Sub = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    margin-bottom: 0px;
`