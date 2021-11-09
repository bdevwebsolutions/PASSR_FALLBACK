import React from 'react'
import { StoreContext } from '../../../../context/store';
import { Popup } from '../../../popup/Popup';
import { PopupForm, FailedForm, SucceedForm, BusyForm } from './Form';
import { Container } from './styles';



export const AddNew: React.FC = () => {

    const {master} = React.useContext(StoreContext);
    const [deployementState, setDeployementState] = React.useState<number>(0);

    const STATES: Array<null | React.ReactNode> = 
        [
            null, 
            <PopupForm setDeployementState={setDeployementState} />,
            <BusyForm/>, 
            <SucceedForm setDeployementState={setDeployementState}/>, 
            <FailedForm/>
        ];

    const handleNew = async () => {
        if(master.length === 0){
            return null;
        } 
        setDeployementState(1);
    }

    return (
        <>
            <Container onClick={handleNew}>
                    {master.length === 0 ? "Fill in a master to add a password" : "ADD NEW +"}
            </Container>
            {deployementState === 0 ? null : <Popup>{STATES[deployementState]}</Popup>}
        </>
    )
}
