import React from 'react'
import books from '../img/books.jpg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEuro } from "@fortawesome/free-solid-svg-icons"
import {Container, ListBook, Button, ImgBooks, Info, NameBook, DataBook } from "../styles/bookStyle"

function Book({ id, name, description, author, price, addBookToCart, setIdBook }) {

    const theBook = { id, name, description, author, price };
    function selectBook(id) {
        setIdBook(id)
    }

    return (
        <Container>
            <ListBook >
                <NavLink to="/Product" key={id}>
                    <Button key={id} id={id} onClick={(selectBook(id))}>
                        <ImgBooks src={`${books}`}></ImgBooks>
                    </Button>
                </NavLink>
                <Info>
                    <NameBook>{name}</NameBook>
                    <DataBook>{author}</DataBook>
                    <DataBook>{price}
                        <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                    </DataBook>
                </Info>
                <FontAwesomeIcon icon={faShoppingCart} onClick={() => addBookToCart(theBook)} size={'lg'}
                        style={{ cursor: "pointer", display: "table-column" }}></FontAwesomeIcon>
            </ListBook>
        </Container>
    )
}

export default Book