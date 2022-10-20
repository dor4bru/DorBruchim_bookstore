import React, {useState ,useEffect} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import {faShoppingCart,} from "@fortawesome/free-solid-svg-icons"
import { getBooksData } from '../api/Books'
import Book from '../components/Book';
import Navbar from '../components/Navbar';


const Container = styled.div``

function BooksList(props) {
    let [booksData, setBooksData] = useState([]);

    useEffect(() =>{
        const getBooksDataAsync = async () => {
            setBooksData(await getBooksData());
        };
        try{
            getBooksDataAsync(); 
        }catch(error){
            console.log(error)
        }
    }, []);

    function setIdBook(id){
        props.updateIdBook(id)
        
    }

    function getBookDataById(book){
        let tempBook = props.cartBookData;
        props.getBookById(tempBook => [...tempBook, book]);
        localStorage.setItem('book', JSON.stringify(tempBook));
    }

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{color: "black"}}></FontAwesomeIcon>
            </NavLink>
            <Container>
                {booksData.map(book => {
                if(book.store_id === props.data){
                     return <Book {...{ ...book,...{setIdBook}, ...{getBookDataById}} } />
                }
                })}
            </Container>
        </Container>

    )
}

export default BooksList