import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import BookStoresModel from '../model/BookStoresModel'
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import {Container, DivBookList, StoreName} from '../styles/bookListStyles'
import CounterCart from '../components/CounterCart';
import BookCartModel from '../model/BookCartModel'

function BooksList() {

    const { getTotalBookCount, addBookToCart } = BookCartModel;

    let [storeBooks, setStoreBooks] = useState([]);
    let [cartBooksCount, setCartBooksCount] = useState(getTotalBookCount());
    const location = useLocation();
    const {storeName, storeId} = location.state;

    function addBook(theBook) {
        addBookToCart(theBook);
        setCartBooksCount(getTotalBookCount());
    }

    useEffect(() => {
        const getBooksDataAsync = async () => {
            setStoreBooks(await BookStoresModel.getInstance().getBooksData(storeId));
        };
        try {
            getBooksDataAsync();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <CounterCart count={cartBooksCount}></CounterCart>
            </NavLink>
            
            <StoreName>{storeName}</StoreName>
            <DivBookList>
                {Object.keys(storeBooks).map(bookId => {
                    const book = storeBooks[bookId];
                    return <Book {...{ ...book, key: book.id, addBook }} />;
                })}
            </DivBookList>
        </Container>
    )
}

export default BooksList