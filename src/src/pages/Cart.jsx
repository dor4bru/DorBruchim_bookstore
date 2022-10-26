import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CounterCart from '../components/CounterCart';
import Navbar from '../components/Navbar';
import CartTable from '../components/CartTable';
import { Container, Button, ButtonDiv } from '../styles/cartStyles';

import BookCartModel from '../model/BookCartModel'

const columns = [
    { heading: 'Name', value: 'name' },
    { heading: 'Quantity', value: 'quantity' },
    { heading: 'Price', value: 'price' },
    { heading: '', value: 'icon' },
]

function Cart() {

    const { getBookCart, getTotalPrice, deleteBookFromCart, getTotalBookCount } = BookCartModel;

    let [cartBooks, setCartBooks] = useState(getBookCart());

    function deleteBook(id) {
        setCartBooks(deleteBookFromCart(id));
    }

    return (
        <Container>
            <Navbar />
            <CounterCart count={getTotalBookCount()}></CounterCart>
            <CartTable data={cartBooks} chargeAmount={getTotalPrice()} columns={columns} onDeleteBook={deleteBook} />
            <NavLink to='/FinalizeOrder'>
                <ButtonDiv>
                    <Button>Next</Button>
                </ButtonDiv>
            </NavLink>
        </Container>
    );
}

export default Cart
