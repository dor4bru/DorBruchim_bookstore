// import
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, ListStore, Info, NameStore, DataStore, Button, Imgstore, DivImg } from "../styles/storeStyles";

// Store page
function Store({ id, image, name, address, city }) {

    const navigate = useNavigate();

    function navigateToStorePage() {
        navigate('/Books', {state: {storeName: name, storeId: id}});
    }

    return (
        <Container>
            <ListStore key={id}>
                <DivImg>
                    <Button onClick={navigateToStorePage}>
                        <Imgstore src={`${image ? image : "defualt-store"}`} key={id} id={id}></Imgstore>
                    </Button>
                </DivImg>
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