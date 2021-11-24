import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-height: calc(100vh - 35px);
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        height: 100%;
    }
`