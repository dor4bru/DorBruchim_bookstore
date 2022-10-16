// import
import React, {useState ,useEffect} from 'react'
import { getStoresData } from '../api/Store'
import styled from 'styled-components'
import fnac from '../img/fnac.jpg';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Books from './Books';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    justify-content: space-between;
`

const Imgstore = styled.img.attrs({
    src:`${fnac}`
})
//style imgStore
`
cursor: pointer;
width: 100%;
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

// Store page
const Store = () => {  
    const [store, setSelectStore] = useState([]);
    useEffect(() =>{
        getStoresData()
        .then((data) =>{
            setSelectStore(data);
        })
    }, []);
   
    const navigate = useNavigate();
  
  return (
    <Container>
        {store.map(function(e){
            return( <ListStore>
            <button onClick={() => navigate('books')}>
            <Imgstore></Imgstore>
            </button>
                <Info>
                <NameStore>{e.name}</NameStore>
                <DataStore>{e.address}</DataStore>
                <DataStore>{e.city}</DataStore>
               </Info>
            </ListStore>
            )
        })}
    </Container> 
  )
}

export default Store