import React from 'react'
import { Container, Circle, CartDiv } from '../styles/CounterCartStyles'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const CounterCart = ({count}) => {
    return (
        <Container>
            <CartDiv>
                <Circle>{count}</Circle>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i class="fa" style="font-size:24px">&#xf07a;</i> */}
                {/* <span class='badge badge-warning' id='lblCartCount'> 5 </span> */}
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" ,top:0 , position:'absolute', left: '84%', padding:'4%'}}></FontAwesomeIcon>
            </CartDiv>
        </Container>
    )
}

export default CounterCart
