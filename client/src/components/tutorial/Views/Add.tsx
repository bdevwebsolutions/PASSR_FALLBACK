import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { PopupForm } from '../../dashboard/controller/passwordList/addNew/Form'

export const Add = () => {
    return(
        <Container>
            <div>
                <h5>Add Password.</h5>
                <p>Adding a new password can only be done after the master is set and confirmed. The add password tab is indicated by this icon.</p>
            </div>
            <div>
                <PopupForm/>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px !important;

    div:first-of-type{
        
    }
`