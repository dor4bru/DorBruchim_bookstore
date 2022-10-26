// import
import React from 'react'
import { Container, Circle, CartDiv } from '../styles/CounterCartStyles'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const CounterCart = ({ count }) => {
    return (
        <Container>
            <CartDiv>
                <Circle>{count}</Circle>
                <FontAwesomeIcon icon={faShoppingCart} style={{
                    color: "black", top: 0,
                    position: 'absolute', left: '84%', padding: '4%'
                }}></FontAwesomeIcon>
            </CartDiv>
        </Container>
    )
}

export default CounterCart
