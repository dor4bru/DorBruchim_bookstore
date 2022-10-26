// import
import React from 'react'
import { NavLink } from 'react-router-dom';
import logoImg from '../img/logo.png';
import { Container, Logo, Button, LogoDiv, ButtonDiv } from '../styles/navBarStyles';

const Navbar = () => {

  const changeLang = () => {

  }
  return (
    <Container>
      <NavLink to='/'>
        <LogoDiv>
          <Logo src={`${logoImg}`} />
        </LogoDiv>
      </NavLink>
      <ButtonDiv>
        <Button onClick={changeLang}>EN</Button>
      </ButtonDiv>
    </Container>
  )
}

export default Navbar