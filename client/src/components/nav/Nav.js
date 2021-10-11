import React from 'react'
import {Link} from '@reach/router';
import {AiFillHome, AiFillRead, AiFillSetting} from 'react-icons/ai'

//Styles
import { Container } from './styles';

export const Nav = () => {

    const [open, setOpen] = React.useState(true)

    return(
        <Container open={open}>
            <h1>PASSR_.</h1>
            <Link to="/"><AiFillHome/> {open ? "Home" : null}</Link>
            <Link to="/about"><AiFillRead/> {open ? "About" : null}</Link>
            <div></div>
            <Link to="/settings"><AiFillSetting/>{open ? "Settings" : null}</Link>
        </Container>
    )
}



