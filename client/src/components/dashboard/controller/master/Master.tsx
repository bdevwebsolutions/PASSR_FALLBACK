import React from 'react'
import { StoreContext } from '../../../../context/store'
import styled from 'styled-components';
import { GreenButton } from '../../../../styling/global';
import { RouteComponentProps } from '@reach/router';



export const Master: React.FC<RouteComponentProps> = () => {

    const {setMaster, master} = React.useContext(StoreContext)
    const [newMaster, setNewMaster] = React.useState(master)
    const [confirm, setConfirm] = React.useState("");

    const handleInput = () => {
        setConfirm('Master set')
        setMaster(newMaster)
        setTimeout(() => {
            setConfirm("")
        }, 1000)
    }

    return (
        <Container>
            <h4>Master</h4>
            <div>
                <input placeholder="Master Password" type="password" value={newMaster} onChange={(e) => {setNewMaster(e.target.value)}}/>
                <GreenButton onClick={handleInput}>confirm</GreenButton>
                <br></br>
                <p>{confirm}</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    grid-template-rows: auto 1fr;   
    p {
        text-align: center;
        margin-top: 15px;
        font-weight: bold;
    }

    h4{
        font-weight: 14px;
        padding-left: 15px;
    }

    input{
        padding: 8px 10px;
        margin-bottom: 15px;
    }

    div{
        border-top: solid 1px ${props => props.theme.grey};
        padding: 15px;
        height: 100%;
    }


`