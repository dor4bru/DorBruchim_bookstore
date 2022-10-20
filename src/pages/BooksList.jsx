import React, {useState ,useEffect} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import {faShoppingCart,} from "@fortawesome/free-solid-svg-icons"
import { getBooksData } from '../api/Books'
import Book from '../components/Book';
import Navbar from '../components/Navbar';


const Container = styled.div``

function BooksList({setBookById, setSelectedBookId, cartBookData, addBookToCart, data}) {
    let [booksData, setBooksData] = useState([]);

    useEffect(() =>{
        const getBooksDataAsync = async () => {
            setBooksData(await getBooksData());
        };
        try{
            getBooksDataAsync(); 
        }catch(error){
            console.log(error);
        }
    }, []);

    function setIdBook(id){
        useEffect(() => {
            setSelectedBookId(id);
        }, []);
    }

    // function getBookDataById(book){
    //     debugger
    //     let tempBook = cartBookData;
    //     setBookById(tempBook => [...tempBook, book]);
    //     //localStorage.setItem('book', JSON.stringify(tempBook));
    // }

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{color: "black"}}></FontAwesomeIcon>
            </NavLink>
            <Container>
                {booksData.map(book => {
                if(book.store_id === data){
                     return <Book {...{ ...book, addBookToCart, setIdBook, key: book.id} } />
                }
                })}
            </Container>
        </Container>

    )
}

export default BooksList