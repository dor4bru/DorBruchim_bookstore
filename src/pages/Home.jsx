// import
import React, {useState ,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Store from '../components/Store'
import FinalizeOrder from './FinalizeOrder'
import {getStoresData} from '../api/Store'

const Container = styled.div``

const StoreDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 20px;
padding: 20px;
justify-content: space-between;`

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