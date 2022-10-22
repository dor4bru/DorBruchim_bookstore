import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faShoppingCart, } from "@fortawesome/free-solid-svg-icons"
import { getBooksData } from '../api/Books'
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import {Container, DivBookList, ErrorDiv} from '../styles/bookListStyles'
import CounterCart from '../components/CounterCart';


function BooksList({ setSelectedBookId, addBookToCart, data }) {
    let [booksData, setBooksData] = useState([]);
    const navigate = useNavigate();

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

    const countCart = () => {
        debugger
        navigate('/counterCart',
            {
                state: {
                    count: 0
                }
            });
    } 
    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                {/* //state={move data} */}
                <CounterCart onClick={() => { countCart()}}></CounterCart>
            </NavLink>
            <DivBookList>
                {booksData.map(book => {
                    if (book.store_id === data) {
                        return <Book {...{ ...book, addBookToCart, setIdBook, key: book.id }} />
                    }
                })}
            </DivBookList>
        </Container>
    )
}

export default BooksList