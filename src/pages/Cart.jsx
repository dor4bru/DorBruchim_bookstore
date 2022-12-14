import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CounterCart from '../components/CounterCart';
import Navbar from '../components/Navbar';
import CartTable from '../components/CartTable';
import { Container, Button, ButtonDiv } from '../styles/cartStyles';

import BookCartModel from '../model/BookCartModel'

// columns for table
const columns = [
    { heading: 'Name', value: 'name' },
    { heading: 'Quantity', value: 'quantity' },
    { heading: 'Price', value: 'price' },
    { heading: '', value: 'icon' },
]

function Cart() {
    const {t} = useTranslation()
    const { getBookCart, getTotalPrice, deleteBookFromCart, getTotalBookCount } = BookCartModel;

    let [cartBooks, setCartBooks] = useState(getBookCart());

    // delete book
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
                    <Button>{t('Next')}</Button>
                </ButtonDiv>
            </NavLink>
        </Container>
    );
}

export default Cart
