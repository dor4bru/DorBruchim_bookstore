// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, ListStore, Info, NameStore, DataStore, Button, Imgstore, DivImg } from "../styles/storeStyles";

// Store page
function Store({ id, image, name, address, city, setIdStore }) {

    function createStore(e) {
        setIdStore(e.target.id)
    }

    return (
        <Container>
            <ListStore key={id}>
                <NavLink to='/Books' >
                    <DivImg>
                        <Button onClick={createStore}>
                            <Imgstore src={`${image ? image : "defualt-store"}`} key={id} id={id}></Imgstore>
                        </Button>
                    </DivImg>
                </NavLink>
                <Info>
                    <NameStore>{name}</NameStore>
                    <DataStore>{address}</DataStore>
                    <DataStore>{city}</DataStore>
                </Info>
            </ListStore>
        </Container>
    )
}

export default Store