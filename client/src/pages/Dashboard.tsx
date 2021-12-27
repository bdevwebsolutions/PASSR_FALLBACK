/*
    Complete component that will return the dashboard, functionality wise only use this page atm


    TODO: REFACTOR THIS COMPONENT


*/
import { Paper } from "@mui/material";
import React from "react"
import { Contract } from "../components/Contract";
import { Passwords } from "../components/Passwords";

//TODO

//CONTRACT
//MASTER
//DECRYPT
//LIST

const Dashboard = () => {

    return (
        <div>
            <Paper sx={{
                padding: 2,
                textAlign: "center",
            }}>PASSR_. backup client</Paper>
            <Contract/>
            <Passwords/>
        </div>
    )

}



export default Dashboard;