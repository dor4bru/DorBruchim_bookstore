// import
import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Store from '../pages/Store'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Books from './Books'
import FinalizeOrder from './FinalizeOrder'
const Container = styled.div``

// Home page
const Home = () => {  
  return (
    <Container>
        <Navbar/>
        {/* <NavLink to="/testpage">
            <button type="button">Read More</button>
          </NavLink> */}
        <Routes>
          <Route path="/Books" element={<Books/>}></Route>
        </Routes>
        <Store/>
        <Books/>
        <FinalizeOrder/>
    </Container>  
  )
}

export default Home