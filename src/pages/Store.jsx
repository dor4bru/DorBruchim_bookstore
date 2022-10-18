// import
import React, {useState ,useEffect} from 'react'
import { getStoresData, getImageStoreData} from '../api/Store'
import styled from 'styled-components'
import fnac from '../img/fnac.jpg';
import { NavLink } from 'react-router-dom';
// import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Product from './Product';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    justify-content: space-between;
`

const Imgstore = styled.img.attrs({
    // src:`${getImgByIdStore()}`
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
const Button = styled.button`
`
// Store page
function Store(props) {  
    const [store, setSelectStore] = useState([]);
    let [dataStore, setdataStoreInfo] = useState([]);
    let tempData={};
        

    useEffect(() =>{
        getStoresData()
        .then((data) =>{
            data.map(function(e){
                tempData.id = e.id;
                tempData.name = e.name;
                tempData.address = e.address;
                tempData.city = e.city;
                tempData.lang = e.lang;
                tempData.language= e.language;
                setdataStoreInfo(dataStore => [...dataStore, tempData])
            })
            setSelectStore(data);
        })
        getImageStoreData()
         .then((imgData) =>{
             console.log(imgData)
         })
    }, []);

  console.log(dataStore)

    // TODO
    function getImgByIdStore(){

    }
    function createStore(e){
        debugger
        let idStore = e.target.id
        props.getIdStore(e.target.id)
        props.hideStorePage()
    }
  return (
    <Container>
        {store.map(function(e){
            return( <ListStore key={e.id}>
            <NavLink to="/Books">
                <Button onClick={createStore}>
                <Imgstore key={e.id} id={e.id}></Imgstore>
                </Button>
            </NavLink>
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