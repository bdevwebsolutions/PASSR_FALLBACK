import React from 'react'
import styled from 'styled-components'

export const List = () => {
    return(
        <>
            <h5>View List.</h5>
            <p>View and decrypt your passwords, decryption can only be done after a master is set and confirmed.</p>
            <br></br>
            <br></br>
            <p>Selecting a password will allow you to decrypt and copy it to your clipboard.</p>
        </>
    )
}


const Container = styled.div`
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px !important;

    div:first-of-type{
        border-right: solid 1px ${props => props.theme.grey};
    }
`