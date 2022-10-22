import React from 'react'
import { Container, Circle, CartDiv } from '../styles/CounterCartStyles'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faShoppingCart, } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from 'react-router-dom';
// export default function PostDetailsScreen() {
   

const CounterCart = () => {
    const { state } = useLocation();
    debugger
  return (
    <Container>
        <CartDiv>
            <Circle>{state}</Circle>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" }}></FontAwesomeIcon>
        </CartDiv>
    </Container>
  )
}

export default CounterCart