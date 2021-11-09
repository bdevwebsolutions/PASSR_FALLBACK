import styled from "styled-components"

export const StyledPopup = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.opaque};
    top: 0;
    left: 0;
    z-index: 99;
    display: grid !important;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
`

export const Container = styled.div`
    display: block;
    padding: 25px !important;
    background-color: ${props => props.theme.dark};
    font-weight: 600;
    color: ${props => props.theme.white};
`