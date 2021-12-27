import React from 'react'
import {StoreContext} from '../../../context/store';
import styled from 'styled-components';
import { MdOpenInNew } from 'react-icons/md';
import { IconButton } from '../../../styling/global';
import {BsQuestionCircle} from 'react-icons/bs';
import { Tutorial } from '../../tutorial';

export const TopBar: React.FC = () => {

    const {contract} = React.useContext(StoreContext)
    const [visibleContract, setVisibleContract] = React.useState(false);
    const [showTutorial, setShowTutorial] = React.useState(false);

    React.useEffect(() => {
        const isNew = localStorage.getItem("INITIAL_SESSION");
        if(isNew !== "false") {
            setShowTutorial(true);
        }
    }, [])

    const handleRedirect = () => {
        const route = process.env.NODE_ENV === "development" 
         ? `https://mumbai.polygonscan.com/address/${contract}` 
         : `https://polygonscan.com/address/${contract}`;
         window.open(route, '_blank');
     }

    return (
        <Container>
            <div>
                <IconButton onClick={() => setShowTutorial(!showTutorial)}>
                    <BsQuestionCircle size={20} style={{marginTop: 10}}/>
                </IconButton>
            </div>
            <div>
                {/*  @ts-ignore */}
                <p onClick={() => setVisibleContract(!visibleContract)}>{visibleContract ? contract : contract.replace(/./g, "*")}</p>
                <IconButton onClick={() => handleRedirect()}><MdOpenInNew size={22} style={{marginTop: 0}}/></IconButton>
            </div>
            {showTutorial ? <Tutorial setShowTutorial={setShowTutorial}/> : null}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 15px;
    text-align: right;
    display: grid;
    grid-template-columns: 80px 1fr;

    div:first-of-type{
        line-height: 30px;
        text-align: left;
        padding-left: 10px;
    }

    h3{
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
    }
    
    *{
        display: inline-block;
        margin-right: 15px;
    }

    p{
        display: inline-block;
        cursor: pointer;
        font-size: 12px;
        line-height: auto;
        color: ${props => props.theme.white};
    }

`