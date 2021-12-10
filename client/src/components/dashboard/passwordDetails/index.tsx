import React from 'react'
import { Component } from "./details.component";
import { Store } from './details.store';


const Details: React.FC = () => {
    return (
        <Store>
            <Component/>
        </Store>
    )
}

export default Details;