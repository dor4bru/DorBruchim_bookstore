import React from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar'
import {Container, HomePage, Title, GoodBye, Order, ThanksDiv, ButtonDiv} from '../styles/thanksStyles'

const Thanks = () => {
    const location = useLocation();
    const {thanksData} = location.state;

    return (
        <Container>
            <Navbar/>
            <ThanksDiv>
                <Title>Congrats, {thanksData.firstName} {thanksData.lastName}</Title>
                <Order>Your order ID is: {thanksData.orderId}</Order>
                <GoodBye>BookStore Bookshop will hope to see you again</GoodBye>
                <NavLink to='/' >
                    <ButtonDiv>
                        <HomePage>Back To Home Page</HomePage>
                    </ButtonDiv>
                </NavLink>
            </ThanksDiv>
        </Container>
    )
}

export default Thanks