// import
import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Store from '../pages/Store'
import { Routes, Route } from 'react-router-dom'
import Books from './Books'

const Container = styled.div``

// Home page
const Home = () => {  
  return (
    <Container>
        <Navbar/>
        <Routes>
          <Route path="/Books" element={<Books/>}></Route>
        </Routes>
     <Store/>
    </Container>  
  )
}

export default Home