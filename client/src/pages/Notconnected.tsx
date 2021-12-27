import { Box, Button } from '@mui/material';
import React from 'react'


const NotConnected: React.FC = () => {

    return(
            <Box sx={{
                textAlign: "center"
            }}>
                <h1>PASSR_.</h1>
                <h2>Fallback client</h2>
                <p onClick={() => {window.location.reload()}}>Connect metamask to the matic chain to continue.</p>
                <Button sx={{
                    display: "block",
                    margin: "0px auto",
                }}><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">WEBSITE</a></Button>
                <sub>* refresh the page if connecting does not show the dashboard</sub>
            </Box>
    )
}

export default NotConnected;