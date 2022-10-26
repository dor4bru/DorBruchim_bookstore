import React from 'react'
import imgBooks from '../img/imgBooks.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEuro } from "@fortawesome/free-solid-svg-icons"
import { Container, ListBook, Button, ImgForBooks, Info, NameBook, DataBook, DivForButton, CartDiv } from '../styles/bookStyle'

function Book({ id, name, description, author, price, stars, ratings, publisher, language, paperback, addBook }) {

    const navigate = useNavigate();
    const theBook = { id, name, description, author, price, stars, ratings, publisher, language, paperback };

    // move to product page
    function navigateToProduct() {
        navigate('/Product', { state: { theBook } });
    }

    return (
        <Container>
            <ListBook>
                <DivForButton>
                    <Button key={id} id={id} onClick={navigateToProduct}>
                        <ImgForBooks src={`${imgBooks}`}></ImgForBooks>
                    </Button>
                </DivForButton>
                <Info>
                    <NameBook>{name}</NameBook>
                    <DataBook>{author}</DataBook>
                    <DataBook>{price}
                        <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                    </DataBook>
                </Info>
                <CartDiv>
                    <FontAwesomeIcon icon={faShoppingCart} onClick={() => addBook(theBook)}
                        style={{ cursor: "pointer", display: "table-column" }}></FontAwesomeIcon>
                </CartDiv>
            </ListBook>
        </Container>
    )
}

export default Book;