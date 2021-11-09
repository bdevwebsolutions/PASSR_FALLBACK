import React from 'react'
import { StyledPopup, Container } from './styles';



export const Popup: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <StyledPopup>
            <Container>{children}</Container>
        </StyledPopup>
    )
}

