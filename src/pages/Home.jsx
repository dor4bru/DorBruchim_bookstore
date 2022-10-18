// import
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Store from '../pages/Store'
import { Routes, Route } from 'react-router-dom'
import Books from './Books'
// import FinalizeOrder from './FinalizeOrder'
// import Cart from './Cart'
import Product from './Product'

const Container = styled.div``

// Home page
function Home() {
  let [bookPage, setBookPage] = useState(true)  
  let [storePage, setStorePage] = useState(true) 
  // let [product, setProduct] = useState(true)  

  const hideStorePage = () =>{
    setBookPage(false)
  }

  const hideBookPage = () =>{
    setStorePage(false)
  }
  return (
    <Container>
        <Navbar/>
        <Routes>
          <Route path="/Books" element={storePage && <Books hideBookPage={hideBookPage}/>}></Route>
        </Routes>
        {bookPage && <Store hideStorePage={hideStorePage}/>}
        <Routes>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
        {/* <Books/> */}
        {/* <FinalizeOrder/> */}
        {/* <Cart></Cart> */}
    </Container>  
  )
}

    /* <NavLink to="/testpage">
            <button type="button">Read More</button>
          </NavLink>  */
         

export default Home