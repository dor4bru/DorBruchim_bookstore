// import
import React from 'react'
import styled from 'styled-components'
import logoImg from '../img/logo.png';

const Container = styled.div`
background-color: #FFC770;
height: 50px;
`
// Logo book store
const Logo = styled.img.attrs({
    src:`${logoImg}`
})
//style logo
`
width: 70px;
margin: 11px;
`

const Navbar = () => {
  return (
    <Container>
        <Logo/>
    </Container>
  )
}

export default Navbar