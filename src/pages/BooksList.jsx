import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faShoppingCart, } from "@fortawesome/free-solid-svg-icons"
import { getBooksData } from '../api/Books'
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import {Container, DivBookList, ErrorDiv} from '../styles/bookListStyles'

function BooksList({ setSelectedBookId, addBookToCart, data }) {
    let [booksData, setBooksData] = useState([]);

    useEffect(() => {
        const getBooksDataAsync = async () => {
            setBooksData(await getBooksData());
        };
        try {
            getBooksDataAsync();
        } catch (error) {
            console.log(error);
        }
    }, []);

    function setIdBook(id) {
        useEffect(() => {
            setSelectedBookId(id);
        }, []);
    }

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" }}></FontAwesomeIcon>
            </NavLink>
            <DivBookList>
                {booksData.map(book => {
                    if (book.store_id === data) {
                        return <Book {...{ ...book, addBookToCart, setIdBook, key: book.id }} />
                    }
                    // else{
                    //     return <ErrorDiv> No have this book please try again layter</ErrorDiv>
                    // }
                })}
            </DivBookList>
        </Container>
    )
}

export default BooksList