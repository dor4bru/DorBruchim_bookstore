// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import logoImg from '../img/logo.png';
import { Container, Logo, LogoDiv, ButtonDiv } from '../styles/navBarStyles';
import Language from '../components/Language'

//nav bar
const Navbar = () => {
  return (
    <Container>
      <NavLink to='/'>
        <LogoDiv>
          <Logo src={`${logoImg}`} />
        </LogoDiv>
      </NavLink>
      <ButtonDiv>
        <Language>
        </Language>
      </ButtonDiv>
    </Container>
  )
}

export default Navbar