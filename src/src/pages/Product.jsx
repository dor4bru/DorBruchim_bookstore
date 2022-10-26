//import
import React from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEuro, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Navbar from '../components/Navbar';
import {
    Container, ListProduct, NameBook, NameAuthor, Description,
    Title, DataBook, AddCart, Button, Price, ProductDiv, ButtonDiv, PriceDiv
} from '../styles/productStyles'

import RatingStar from "../components/RatingStar"

import BookCartModel from '../model/BookCartModel'

function Product() {

    const { addBookToCart } = BookCartModel;
    const location = useLocation();
    const {theBook} = location.state;
    console.log("the book id in products: theBook: " + JSON.stringify(theBook));

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{color: "black"}}></FontAwesomeIcon>
            </NavLink>
            <ListProduct>
                <ProductDiv>
                    <NameBook>{theBook.name}</NameBook>
                    <NameAuthor>{theBook.author}</NameAuthor>
                    <RatingStar rating={theBook.stars}></RatingStar>
                    <Description>{theBook.description}</Description>
                    <Title>Product details</Title>
                    <DataBook>publisher: {theBook.publisher}</DataBook>
                    <DataBook>language: {theBook.language}</DataBook>
                    <DataBook>paperback: {theBook.paperback}</DataBook>
                </ProductDiv>
                <AddCart>
                    <PriceDiv>
                        <Price>Buy: {theBook.price} <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                        </Price>
                    </PriceDiv>
                    <Description>
                        As an alternative, pre-order the Kindle
                    </Description>
                    <Description>
                        eBook insteat to automatiaclly receive on day of release
                    </Description>
                    <ButtonDiv>
                        <Button onClick={() => addBookToCart({
                            id: theBook.id,
                            name: theBook.name,
                            description: theBook.description,
                            author: theBook.author,
                            price: theBook.price
                        })}>Add to Cart</Button>
                    </ButtonDiv>
                </AddCart>
            </ListProduct>

        </Container>
    )

}

export default Product