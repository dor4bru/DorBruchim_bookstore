import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
`
const HomePage = styled.button``
const Title = styled.div`` 
const Order = styled.div``
const GoodBye = styled.div``
const Thanks = (props) => {
  debugger
  return (
    <Container>
      <Navbar/>
      <Title>Congrats, {props.data.firstName} {props.data.lastName}</Title>
      <Order>your order: {props.data.dataIdOrder.insert_orders_one.id}</Order>
      <GoodBye>BookStore Bookshop will hope to see you again</GoodBye>
      <NavLink to='/' >
      <HomePage>Home Page</HomePage>
      </NavLink>
    </Container>
  )
}

export default Thanks