import React from 'react'

interface IStore {
    address: string,
    setAddress: React.Dispatch<string>,
    isValidAddress: boolean,
    setIsValidAddress: React.Dispatch<boolean>
    deployementState: number,
    setDeployementState: React.Dispatch<number>,
    PopupState: Array<JSX.Element>,
    allowedChains: number,
}

export const DeployerContext = React.createContext({} as IStore);
 
export const Store: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [address, setAddress] = React.useState("");
    const [isValidAddress, setIsValidAddress] = React.useState(false);
    const [deployementState, setDeployementState] = React.useState(0);
    const PopupState = [
        <p>""</p>, 
        <p>Building the contract...</p>, 
        <p>Calculating Gas Fee</p>, 
        <p>Deploying the contract</p>, 
        <p>this can take a while...</p>
    ];

    const allowedChains = process.env.NODE_ENV === "development" ? 80001 : 137;

    const STORE: IStore = {
            address,
            setAddress,
            isValidAddress,
            setIsValidAddress,
            deployementState,
            setDeployementState,
            PopupState,
            allowedChains
    }


    return <DeployerContext.Provider value={STORE}>{children}</DeployerContext.Provider>
}