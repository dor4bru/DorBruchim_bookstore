//import
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { VscStarEmpty, VscStarFull, VscStarHalf } from "react-icons/vsc";
// import { BiStar, BsStarHalf, AiFillStar } from 'react-icons/';
import { getBookData } from '../api/Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuro, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Navbar from '../components/Navbar';
import {
    Container, ListProduct, NameBook, NameAuthor, StarDiv, Description,
    Title, DataBook, AddCart, Button, Price, ProductDiv, ButtonDiv, PriceDiv} from '../styles/productStyles'

function Product({ bookId, addBookToCart }) {

    let [bookData, setBookData] = useState([]);

    useEffect(() => {
        const getBookDataAsync = async () => {
            setBookData(await getBookData(bookId));
        };
        try {
            getBookDataAsync();
        } catch (error) {
            console.log(error)
        }
    }, []);

    function star(num) {
        
        if (num === 0) {
            return <VscStarEmpty> </VscStarEmpty>
        }
        if (num === 0.5) {
            return <VscStarHalf />
        }
        return (<VscStarFull /> + star(num - 1))
    }


    return (
        <Container>
            <Navbar></Navbar>
            <NavLink to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" }}></FontAwesomeIcon>
            </NavLink>
            {bookData.map(book => {
                
                return (
                    <ListProduct>
                        <ProductDiv>


                            <NameBook>{book.name}</NameBook>
                            <NameAuthor>{book.author}</NameAuthor>
                            <StarDiv >
                                {
                                    star(book.stars)

                                }

                                {/* <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "orange"}}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}  style={{color: "orange"}}></FontAwesomeIcon>                    */}
                                <StarDiv>({book.ratings} ratings)</StarDiv>
                            </StarDiv>
                            <Description>{book.description}</Description>
                            <Title>Product details</Title>
                            <DataBook>publisher: {book.publisher}</DataBook>
                            <DataBook>language: {book.language}</DataBook>
                            <DataBook>paperback: {book.paperback}</DataBook>
                        </ProductDiv>
                        <AddCart>
                            <PriceDiv>
                                <Price>Buy: {book.price} <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
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
                                    id: book.id,
                                    name: book.name,
                                    description: book.description,
                                    author: book.author,
                                    price: book.price
                                })}>Add to Cart</Button>
                            </ButtonDiv>
                        </AddCart>
                    </ListProduct>
                )
            })}
        </Container>
    )

}

export default Product