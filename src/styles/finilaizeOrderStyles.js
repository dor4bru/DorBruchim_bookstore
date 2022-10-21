import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background-color: white;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;`

export const Form = styled.form`
    border:2px solid black;
    padding: 20px;`

export const Title = styled.h2``

export const Input = styled.input`
    display: grid
    align-items: center;
    border:2px solid black;
    margin: 3px;`