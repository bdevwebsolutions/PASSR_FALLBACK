import React from 'react'
import { Component } from './deployer.component'
import { Store } from './deployer.store';


const Deployer: React.FC = () => {
    return (
        <Store>
            <Component/>
        </Store>
    )
}


export default Deployer;