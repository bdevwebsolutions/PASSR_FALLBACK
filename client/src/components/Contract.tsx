import { Button, Grid, Input, TextField } from '@mui/material'
import React from 'react'
import { StoreContext } from '../context/store';




export const Contract = () => {

    const [contractInput, setContractInput] = React.useState('');
    const {contract, setContract, getPasswordsFromContract} = React.useContext(StoreContext);

    const handleSet = () => {
        //@ts-ignore
        setContract(contractInput);
    }

    const handleLoad = () => {
        getPasswordsFromContract(() => {});
    }

    return (
        <Grid container rowGap={2} columnGap={2} sx={{
            borderBottom: "solid 1px grey",
            padding: 2,
        }}>
            <Grid xs={12}>
                <TextField fullWidth onChange={(e) => setContractInput(e.target.value)} type="text" placeholder='contract address'/>
            </Grid>
            <Grid xs={12}>
                <Button fullWidth onClick={handleSet} >Set Contract</Button>
            </Grid>
            <Grid xs={12}>
                <Button disabled={contract === null} fullWidth onClick={handleLoad} >Load Passwords</Button>
            </Grid>
        </Grid>
    )
}