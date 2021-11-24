import { AES, enc } from 'crypto-js';
import React from 'react'
import styled from 'styled-components';
import { StoreContext } from '../../../../context/store';
import { GreenButton, PrimaryButton } from '../../../../styling/global';


export const PopupForm: React.FC<{setDeployementState: React.Dispatch<number>}> = ({setDeployementState}) => {
    const {master, setMaster, passwordList, addPasswordToContract} = React.useContext(StoreContext);
    const [isMasterCorrect, setIsMasterCorrect] = React.useState<boolean>(false);
    const [isKeyUnique, setIsKeyUnique] = React.useState<boolean>(false);
    const [key, setKey] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("")
    const [passwordCopy, setPasswordCopy] = React.useState<string>("");
    const [credential, setCredential] = React.useState<string>("");
    const [warning, setWarning] = React.useState<string>("")

    React.useEffect(() => {
        setIsMasterCorrect(false);
        setIsKeyUnique(false);
        setKey("")
        setPassword("");
        setCredential("");
        setWarning("");
    }, [])

    const handleMaster = (value: string) => {
        master === value && master.length > 0 ? setIsMasterCorrect(true) : setIsMasterCorrect(false);
    }

    const handleKey = (value: string) => {
        setKey(value);
        const psCopy = passwordList[1].map(loc => AES.decrypt(loc.toString(), master.toString()).toString(enc.Utf8).toLocaleUpperCase());
        if(psCopy.includes(value.toLocaleUpperCase())){
            setIsKeyUnique(false);
            setWarning('No duplicate keys allowed');
        } else {
            setWarning('')
            setIsKeyUnique(true);
        }
    }

    const handlePass = (value: string) => {
        setPassword(value);
    }

    const handlePassCopy = (value: string) => {
        setPasswordCopy(value);
    }
    
    const handleDeploy = () => {
        addPasswordToContract(setDeployementState, key, password, credential);
    }

    return (
        <Container>
            <b>Create a new secret</b>
            <p>Master</p>
            <input style={{cursor: 'not-allowed'}} disabled type="password" value={master} onChange={e => setMaster(e.target.value)}/>
            <p>Repeat Master</p>
            <input type="password" onChange={e => handleMaster(e.target.value)} />
            {
                isMasterCorrect ? (
                    <>
                        <p>Key</p>
                        <input onChange={e => handleKey(e.target.value)} type="text" placeholder="url / title ..." value={key}/>
                        <p>Username / email</p>
                        <input onChange={e => setCredential(e.target.value)} type="text" placeholder="username / email ..." value={credential}></input>
                        <p>Password</p>
                        <input onChange={e => handlePass(e.target.value)} value={password} type="password" placeholder='password'/>
                        <p>Repeat Password</p>
                        <input onChange={e => handlePassCopy(e.target.value)} value={passwordCopy} type="password" placeholder='repeat password'/>
                        <GreenButton onClick={handleDeploy} disabled={!isKeyUnique || passwordCopy !== password || password.length === 0 || key.length === 0 ? true : false}>Submit</GreenButton>
                        <b>{warning}</b>
                    </>
                ) : null
            }
            <PrimaryButton onClick={() => setDeployementState(0)}>Cancel</PrimaryButton>
        </Container>
    )

}

export const SucceedForm: React.FC<{setDeployementState: React.Dispatch<number>}> = ({setDeployementState}) => {

    window.setTimeout(() => {
        setDeployementState(0)
    }, 1500)

    return <p>Succes</p>
}
export const BusyForm: React.FC = () => <p>Deploying</p>
export const FailedForm: React.FC = () => <p>Failure</p>


const Container = styled.div`
    width: 400px;
    *{
        display: block;
        width: 100% !important;
    }

    display: grid !important;
    align-items: center;
    grid-gap: 8px;


    input{
        background-color: ${props => props.theme.grey};
        outline: none;
        border: solid 1px ${props => props.theme.grey};
        border-radius: 2px;
        outline: none;
        color: ${props => props.theme.white};
        font-size: 14px;
        padding: 8px 5px;
        width: 100% !important;
    }

    input:last-of-type{
        margin-bottom: 8;
    }
`