// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, ListStore, Info, NameStore, DataStore, Button, Imgstore, DivImg} from "../styles/storeStyles";

// Store page
function Store(props) {  
  
    function createStore(e){
        props.setIdStore(e.target.id)
    }

    // Load store image using Imgstore
    const storePathName =props.id; // todo check how to work with routes like /*/Books

    return (
        <Container>
            <ListStore key={props.id}>
                <NavLink to='/Books' >
                    <DivImg>
                    <Button onClick={createStore}>
                    <Imgstore src={`${props.image}`}  key={props.id} id={props.id}></Imgstore>
                    </Button>
                    </DivImg>
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