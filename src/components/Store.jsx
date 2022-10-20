// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    justify-content: space-between;
`
const ListStore = styled.div`
flex: 1;
margin: 5px;
border-radius: 10px;
`
const Info = styled.div`
`
const NameStore = styled.h1`
font-size: medium;
text-align: center;
flex-direction: column;`

const DataStore = styled.h2`
font-size: small;
text-align: center;
flex-direction: column;
`
const Button = styled.button`
`
// Store page
function Store(props) {  
  
    function createStore(e){
        props.setIdStore(e.target.id)
    }

    // Load store image using Imgstore
    const storePathName =props.id; // todo check how to work with routes like /*/Books

    const Imgstore = styled.img.attrs({
        src: `${props.image}`
    })
    //style imgStore
    `
    cursor: pointer;
    width: 100%;
    `

    return (
        <Container>
            <ListStore key={props.id}>
                <NavLink to='/Books' >
                    <Button onClick={createStore}>
                        <Imgstore key={props.id} id={props.id}></Imgstore>
                    </Button>
                </NavLink>
                <Info>
                    <NameStore>{props.name}</NameStore>
                    <DataStore>{props.address}</DataStore>
                    <DataStore>{props.city}</DataStore>
                </Info>
            </ListStore>
        </Container> 
    )
}

export default Store