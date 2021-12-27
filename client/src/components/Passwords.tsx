import { Grid, Paper } from '@mui/material';
import React from 'react'
import { StoreContext } from '../context/store'




export const Passwords = () => {

    const {passwordList} = React.useContext(StoreContext);

    return (
        <Grid container rowGap={2} columnGap={2} 
            sx={{
            borderBottom: "solid 1px grey",
            padding: 2,}}
        >
        </Grid>
    )
}