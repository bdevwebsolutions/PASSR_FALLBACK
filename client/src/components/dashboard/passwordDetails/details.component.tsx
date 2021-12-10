/**
 * @INFO
 * This component renders the details of a passwordItem selected from the list.
 * 
 * @CONTAINES
 * A decrypt function to show the password and credentials
 * An encrypt function to hide the password and credentials
 * A Remove function to remove the password
 * 
 */


import React from 'react'

//Context
import { StoreContext } from '../../../context/store'

//Util
import {AES, enc} from 'crypto-js';

//Styling
import {Container, Sub} from './details.style';
import { GreenButton, RedButton, PrimaryButton } from '../../../styling/global';

//Popup
import { Popup } from '../../popup/Popup';
import { DetailsContext } from './details.store';


export const Component: React.FC = () => {

    const { focusPassword, master, removeFromContract } = React.useContext(StoreContext);
    const STORE = React.useContext(DetailsContext);

    const decrypt = () => {
        if(master.length === 0){
            STORE.setMessage("NO MASTER PASSWORD");
            window.setTimeout(() => {
                STORE.setMessage("")
            }, 1000)
            return null;
        }
        STORE.setMessage("")
        const decrypted = AES.decrypt(focusPassword[1].toString(), master.toString());
        const decode = decrypted.toString(enc.Utf8);
        const decryptedCred = AES.decrypt(focusPassword[2].toString(), master.toString());
        const decodeCred = decryptedCred.toString(enc.Utf8);
        if(decode.length === 0){
            return null;
        }
        STORE.setDecodedCredentials(decodeCred);
        STORE.setDecodedPassword(decode);
        STORE.setisEncrpyted(false);
    }

    const encrypt = () => {
        STORE.setDecodedPassword(focusPassword[1]);
        STORE.setDecodedCredentials(focusPassword[2]);
        STORE.setisEncrpyted(true);
        STORE.setVisiblePass(false);
    }

    const handleRemove = async () => {
        removeFromContract(STORE.setRemoveState, focusPassword[0]);
    } 

    React.useEffect(() => {
        STORE.setMessage("");
        STORE.setDecodedPassword(focusPassword[1])
        STORE.setDecodedCredentials(focusPassword[2]);
        STORE.setisEncrpyted(true);
        STORE.setVisiblePass(false);
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
                    <p>Username</p>
                    <input type="text" placeholder={STORE.decodedCredentials} readOnly={true} />
                    <p>Password</p>
                    <input type="text" placeholder={STORE.visiblePass ? STORE.decodedPassword : STORE.decodedPassword.replace(/./g, "*")} readOnly={true} />
                    <Sub>
                        <PrimaryButton onClick={() => STORE.setVisiblePass(!STORE.visiblePass)}>{STORE.visiblePass ? "HIDE" : "SHOW"}</PrimaryButton>
                        <PrimaryButton onClick={() => window.navigator.clipboard.writeText(STORE.decodedPassword)}>COPY</PrimaryButton>
                    </Sub>
                    <GreenButton onClick={STORE.isEncrypted ? decrypt : encrypt}>{STORE.isEncrypted ? 'Decrypt' : 'Hide Derypted'}</GreenButton>
                    <RedButton onClick={handleRemove}>Remove From Vault</RedButton>
                    <p>{STORE.message}</p>
                </div>

            </Container>
            {STORE.removeState === 0 ? null : <Popup>{STORE.STATES[STORE.removeState]}</Popup>}
        </>
    )
}
