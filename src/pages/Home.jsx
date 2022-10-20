// import
import React, {useState ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Store from '../components/Store'
import {getStoresData} from '../api/Store'
import { Container, StoreDiv } from "../styles/homeStyles";

const storeImages = require('../data/StoreImageMap.json');

// Home page
function Home(props) {
  let [storesData, setStoresData] = useState([]);

  useEffect(() => {
    const getStoresDataAsync = async () => {
      setStoresData(await getStoresData());
    };
    try{
      getStoresDataAsync(); 
    }catch(error){
      console.log(error)
    }
  }, []);    

  function setIdStore(id){
    props.updateIdStore(id)
  }
  
  return (
    <Container>
        <Navbar/>
        <StoreDiv>
          {storesData.map(store => {
            return  <Store {...{ ...store, ...{key: store.id, image: storeImages[store.id],...{setIdStore}}} } />
          })}
        </StoreDiv>
    </Container>  
  )
}

export default Home