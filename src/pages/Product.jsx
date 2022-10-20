//import
import React, {useState ,useEffect} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getBookData } from '../api/Product'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfStroke, faEuro, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { BiStar, BsStarHalf, AiFillStar} from 'react-icons/';
import { VscStarEmpty,VscStarFull, VscStarHalf } from "react-icons/vsc";
// import { BiStar } from "@react-icons/all-files/fa/BigStar";

const Container = styled.div`
`
const ListProduct = styled.div``

const NameBook = styled.h1`

text-align: center;
flex-direction: column;

`

const NameAuthor = styled.h3`
font-size: medium;
text-align: center;
flex-direction: column;
mragin: 1px`

const Description = styled.p`
`

const StarDiv = styled.div``

const Title = styled.h2``

const DataBook = styled.div``

const Button = styled.button`
`
const AddCart = styled.div`
margin: 50px;
width: 100%
`

const Price = styled.div`
background-color: #fefeed`

function Product(props) {

    let [BookData, setBookData] = useState([]);

    useEffect(() =>{
        const getBookDataAsync = async () => {
            setBookData(await getBookData(props.data));
        };
        try{
            getBookDataAsync(); 
        }catch(error){
            console.log(error)
        }
    }, []);

    function addBookToCart(){
        let bookDataToBuy ={};
        BookData.find(b => bookDataToBuy = b)

        props.getBookById([{bookDataToBuy}])
        
    }

  return (
    <Container>
        <NavLink to="/Cart">
        <FontAwesomeIcon icon={faShoppingCart}  style={{color: "black"}}></FontAwesomeIcon>
        </NavLink>
        {BookData.map(book =>{
            return (
                <ListProduct>
                    <NameBook>{book.name}</NameBook>
                    <NameAuthor>{book.author}</NameAuthor>
                    <StarDiv>
                        <VscStarEmpty/>
                        <VscStarHalf/>
                        <VscStarFull/>

                        {/* <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "orange"}}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}  style={{color: "orange"}}></FontAwesomeIcon>                    */}
                        <StarDiv>({book.ratings} ratings)</StarDiv>
                    </StarDiv>
                    <Description>{book.description}</Description>
                    <Title>Product details</Title>
                    <DataBook>publisher: {book.publisher}</DataBook>
                    <DataBook>language: {book.language}</DataBook>
                    <DataBook>paperback: {book.paperback}</DataBook>
                    <AddCart>
                        <Price>Buy:
                            {book.price}
                            <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                        </Price>
                        <Description>
                        As an alternative, pre-order the Kindle 
                        </Description>
                            
                        <Description>
                        eBook insteat to automatiaclly receive on day of release
                        </Description>
                        <Button onClick={addBookToCart}>Add to Cart</Button>
                    </AddCart>
                </ListProduct>
            )
        })}
    </Container>
  )
}

export default Product