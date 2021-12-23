import { Link, Router } from '@reach/router';
import React from 'react';
import { AiOutlineKey, AiOutlineLock, AiOutlinePlusCircle, AiOutlineSetting } from 'react-icons/ai';
import styled from 'styled-components';
import { IconButton, theme } from '../../../styling/global';
import { Master } from './master/Master';
import { PopupForm } from './passwordList/addNew/Form';
import { PasswordList } from './passwordList/passwordList/PasswordList';
import { Settings } from './passwordList/settings/Settings';

const DashboardController: React.FC = () => {


    return (
        <Container>
            <Nav>
                <TopButtons>
                    <Navlink to="passwords">
                        <IconButton text="passwords">
                            <AiOutlineLock size={24}/>
                        </IconButton>
                    </Navlink>
                    <Navlink to="master">
                        <IconButton text="master">
                            <AiOutlineKey size={24}/>
                        </IconButton>
                    </Navlink>
                    <Navlink to="new">
                        <IconButton text="new">
                            <AiOutlinePlusCircle size={24}/>
                        </IconButton>
                    </Navlink>
                </TopButtons>
                <BottomButtons>
                    <Navlink to="settings">
                        <IconButton text="settings">
                            <AiOutlineSetting size={24}/>
                        </IconButton>
                    </Navlink>
                </BottomButtons>
            </Nav>
            <Router>
                <Master path="master"/>
                <PasswordList path="passwords"/>
                <PopupForm path="new"/>
                <Settings path="settings"/>
            </Router>
        </Container>
    )
}

// @ts-ignore
const Navlink = (props) => (
    <Link
     {...props}
     getProps={({isPartiallyCurrent}) => {
         return {
             style: {
                 backgroundColor: isPartiallyCurrent ? theme.grey : theme.dark,
                 color: isPartiallyCurrent ? theme.green : theme.lightgrey,
                 fontWeight: isPartiallyCurrent ? "bold" : "normal",
             }
         }
     }}
    />
);

const Container = styled.div`
    display: grid;
    grid-template-columns: 70px auto;
    height: 100%;
`
const Nav = styled.div`
    border-right: solid 1px ${props => props.theme.grey};
    height: 100%;
    padding-top: 15px;
    padding-left: 10px;

    display: grid;
    grid-template-rows: 1fr auto;

    button {
        height: 50px;
        width: 50px;
        margin-bottom: 45px;
    }

`

const TopButtons = styled.div`

`

const BottomButtons = styled.div`

`
export default DashboardController;

