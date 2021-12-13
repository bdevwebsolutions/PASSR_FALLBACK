import React from 'react'
import styled from 'styled-components'

export const Summary = () => {
    return(
        <>
            <h5>Summary.</h5>
            <p>One more time to be shure you understand the workings.</p><br></br>
            <p> - First: Set a master</p><br></br>
            <p> - Second: Add a new password</p><br></br>
            <p> - Last: View your password in the list</p><br></br>
            <br></br>
            <p>DISCLAIMER: some actions require you to change data on the blockchain, these actions might take some time depending on how busy the chain is at that moment. In case of losing the master or the contract addres we are not able to retrieve it. General security measurements when working with passwords still apply.</p>
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