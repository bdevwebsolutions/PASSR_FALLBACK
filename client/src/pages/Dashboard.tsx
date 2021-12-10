/*
    Complete component that will return the dashboard, functionality wise only use this page atm


    TODO: REFACTOR THIS COMPONENT


*/
import React from "react"
import styled from "styled-components"
import {Router, Link} from '@reach/router';

//COMPONENTS
import { Nav } from "../components/nav/Nav";
//ROUTES
const Home = React.lazy(() => import('../components/Home'));

const Dashboard = () => {

    return (
        <Container>
            <Nav/>
            <React.Suspense fallback={<span>Loading</span>}>
                <Router>
                    <Home path="/*"/>
                </Router>
            </React.Suspense>
        </Container>
    )

}

//FULL DASHBOARD CONTAINER
const Container = styled.div`
    display: grid;
    height: 100vh;
    max-height: 100vh;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;

`


export default Dashboard;