import React from 'react'

interface IStore {
    message: string,
    setMessage: React.Dispatch<string>,
    visiblePass: boolean,
    setVisiblePass: React.Dispatch<boolean>,
    decodedPassword: string,
    setDecodedPassword: React.Dispatch<string>,
    decodedCredentials: string,
    setDecodedCredentials: React.Dispatch<string>,
    isEncrypted: boolean,
    setisEncrpyted: React.Dispatch<boolean>,
    removeState: number,
    setRemoveState: React.Dispatch<number>,
    STATES: Array<null | JSX.Element>,

}

export const DetailsContext = React.createContext({} as IStore);

export const Store: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [message, setMessage] = React.useState("")
    const [visiblePass, setVisiblePass] = React.useState(false);
    const [decodedPassword, setDecodedPassword] = React.useState("");
    const [decodedCredentials, setDecodedCredentials] = React.useState("")
    const [isEncrypted, setisEncrpyted] = React.useState(true);
    const [removeState, setRemoveState] = React.useState<number>(0)
    const STATES = [null, <p>Removing...</p>, <p>Succes...</p>];

    const STORE: IStore = {
        message, setMessage,
        visiblePass, setVisiblePass,
        decodedPassword, setDecodedPassword,
        decodedCredentials, setDecodedCredentials,
        isEncrypted, setisEncrpyted,
        removeState, setRemoveState,
        STATES
    }

    return <DetailsContext.Provider value={STORE}>{children}</DetailsContext.Provider>

}