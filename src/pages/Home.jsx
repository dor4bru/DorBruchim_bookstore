// import
import React, {useState ,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { getStoresData } from '../api/Store'
import styled from 'styled-components'

// Home page
const Home = () => {  
    const [store, setSelectStore] = useState([]);
    useEffect(() =>{
        getStoresData()
        .then((data) =>{
            setSelectStore(data.stores);
        })
    }, []);
  return (
      <div>
    <Navbar/>
        {store.map(function(e){
            return( <ul>
                <p>{e.name}</p>
                <p>{e.address}</p>
                <p>{e.city}</p>
                    </ul>
                )
        })}
      </div>
     
  )

}

export default Home