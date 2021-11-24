import React from 'react'
import { StoreContext } from '../../../../context/store';
import { GreenButton, IconButton } from '../../../../styling/global';
import { Popup } from '../../../popup/Popup';
import { PopupForm, FailedForm, SucceedForm, BusyForm } from './Form';
import { GrAdd } from 'react-icons/gr';



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
            <IconButton disabled={master.length === 0} onClick={handleNew}>
                    <GrAdd size={35} style={{paddingTop: 0}}/>
            </IconButton>
            {deployementState === 0 ? null : <Popup>{STATES[deployementState]}</Popup>}
        </>
    )
}
