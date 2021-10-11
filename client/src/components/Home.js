/**

    @INFO
    This is the main view for the dashboard

    @CONTAINS
    A check if there is a active contract
    TRUE: returns the dashboard interface
    FALSE: returns the deployer components

*/

import React from 'react'
import { StoreContext } from '../context/store';

//COMPONENTS
import { Deployer } from './dashboard/deployer/Deployer';
import { Dashboard } from './dashboard/Dashboard';

const Home = () => {

    const {contract} = React.useContext(StoreContext);

    if(contract === null){
        return <Deployer/>
    } else {
        return <Dashboard/>
    }
}


export default Home;