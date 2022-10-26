//import
import React,{useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEuro, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Navbar from '../components/Navbar';
import {
    Container, ListProduct, NameBook, NameAuthor, Description,
    Title, DataBook, AddCart, Button, Price, ProductDiv, ButtonDiv, PriceDiv, StarDiv, DivRatingAndStar
} from '../styles/productStyles'

import RatingStar from "../components/RatingStar"
import CounterCart from '../components/CounterCart';
import BookCartModel from '../model/BookCartModel'

function Product() {

    const { getTotalBookCount, addBookToCart } = BookCartModel;
    const location = useLocation();
    const {theBook} = location.state;
    debugger
    console.log('theBook', theBook)
    let [cartBooksCount, setCartBooksCount] = useState(getTotalBookCount());
    function addBook(theBook) {
        addBookToCart(theBook);
        setCartBooksCount(getTotalBookCount());
    }
    // console.log("the book id in products: theBook: " + JSON.stringify(theBook));

    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
            <CounterCart count={cartBooksCount}></CounterCart>
                {/* <FontAwesomeIcon icon={faShoppingCart} style={{color: "black"}}></FontAwesomeIcon> */}
            </NavLink>
            <ListProduct>
                <ProductDiv>
                    <NameBook>{theBook.name}</NameBook>
                    <NameAuthor>{theBook.author}</NameAuthor>
                    <DivRatingAndStar>
                        <RatingStar rating={theBook.stars}></RatingStar>
                        <StarDiv>({theBook.ratings} ratings)</StarDiv>
                    </DivRatingAndStar>
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
                        {/* <Button onClick={() => addBookToCart({
                            id: theBook.id,
                            name: theBook.name,
                            description: theBook.description,
                            author: theBook.author,
                            price: theBook.price
                        })}>Add to Cart</Button> */}
                                                <Button onClick={() => addBook({
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