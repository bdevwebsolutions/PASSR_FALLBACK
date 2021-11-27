import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    max-height: calc(100vh - 35px);
    h4{
        font-weight: 14px;
        padding-left: 15px;
    }
    p{
        padding-left: 15px;
    }
`

export const LoadingContainer = styled.div`
    h4{
        font-weight: 14px;
        padding-left: 15px;
    }
`