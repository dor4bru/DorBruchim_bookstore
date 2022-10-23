import React from 'react'
import books from '../img/books.jpg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEuro } from "@fortawesome/free-solid-svg-icons"
import { Container, ListBook, Button, ImgBooks, Info, NameBook, DataBook, DivForButton, CartDiv } from '../styles/bookStyle'
import { ButtonDiv } from '../styles/navBarStyles';

function Book({ id, name, description, author, price, addBookToCart, setIdBook }) {

    const theBook = { id, name, description, author, price };
    function selectBook(id) {
        setIdBook(id)
    }

    return (
        <Container>
            <ListBook >
                <NavLink to="/Product" key={id}>
                    <DivForButton>
                        <Button key={id} id={id} onClick={(selectBook(id))}>
                            <ImgBooks src={`${books}`}></ImgBooks>
                        </Button>
                    </DivForButton>
                </NavLink>
                <Info>
                    <NameBook>{name}</NameBook>
                    <DataBook>{author}</DataBook>
                    <DataBook>{price}
                        <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                    </DataBook>
                </Info>
                <CartDiv>
                    <FontAwesomeIcon icon={faShoppingCart} onClick={() => addBookToCart(theBook)} size={'md'}
                        style={{ cursor: "pointer", display: "table-column" }}></FontAwesomeIcon>
                </CartDiv>
            </ListBook>
        </Container>
    )
}

export default Book