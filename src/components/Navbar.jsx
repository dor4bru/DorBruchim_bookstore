// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import logoImg from '../img/logo.png';
import { Container, Logo } from '../styles/navBarStyles';

const Navbar = () => {
  return (
    <Container>
      <NavLink to='/'>
        <Logo src={`${logoImg}`} />
      </NavLink>
    </Container>
  )
}

export default Navbar