// import
import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Store from '../pages/Store'

const Container = styled.div``

// Home page
const Home = () => {  
  return (
    <Container>
        <Navbar/>
        <Store/>
    </Container>  
  )
}

export default Home