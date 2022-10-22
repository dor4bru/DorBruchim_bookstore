import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar'
import {Container, HomePage, Title, GoodBye, Order, ThanksDiv, ButtonDiv} from '../styles/thanksStyles'


const Thanks = (props) => {
  return (
    <Container>
      <Navbar/>
      <ThanksDiv>
        <Title>Congrats, {props.data.firstName} {props.data.lastName}</Title>
        <Order>your order: {props.data.dataIdOrder.insert_orders_one.id}</Order>
        <GoodBye>BookStore Bookshop will hope to see you again</GoodBye>
        <NavLink to='/' >
          <ButtonDiv>
            <HomePage>Home Page</HomePage>
          </ButtonDiv>
        </NavLink>
      </ThanksDiv>
    </Container>
  )
}

export default Thanks