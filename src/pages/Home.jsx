// import
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Store from '../components/Store'
import { Container, StoreDiv } from "../styles/homeStyles";
import BookStoresModel from '../model/BookStoresModel'

const storeImages = require('../data/StoreImageMap.json');

// Home page
function Home() {
    
    let [storesData, setStoresData] = useState([]);

    useEffect(() => {
        const getStoresDataAsync = async () => {
            setStoresData(await BookStoresModel.getInstance().getStores());
        };
        try {
            getStoresDataAsync();
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <Container>
            <Navbar />
            <StoreDiv>
                {Object.keys(storesData).map(storeId =>
                    (<Store {...{ ...storesData[storeId], key: storeId, image: storeImages[storeId] }} />)
                )}
            </StoreDiv>
        </Container>
    )
}

export default Home