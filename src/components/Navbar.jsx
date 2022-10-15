// import
import React from 'react'
import styled from 'styled-components'
import myImage from '../../src/logo.png';

const Container = styled.div`
background-color: #FFC770;
height: 60px;
`
// Logo book store
const Logo = styled.img.attrs({
    src:`${myImage}`
})
//style logo
`
width: 100px;
margin: 9px;
`

const Navbar = () => {
  return (
    <Container>
        <Logo/>
    </Container>
  )
}

export default Navbar