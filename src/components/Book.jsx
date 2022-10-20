import React, {useState ,useEffect} from 'react'
import styled from 'styled-components'
import books from '../img/books.jpg';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faEuro} from "@fortawesome/free-solid-svg-icons"
// import Product from './Product';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    justify-content: space-between;
`

const ImgBooks = styled.img.attrs({
    src:`${books}`

})
//style imgbook
`
cursor: pointer;
width: 60%;
`
const ListBook = styled.div`
flex: 1;
margin: 5px;
border-radius: 10px;
`
const Info = styled.div`
`
const NameBook = styled.h1`
font-size: medium;
text-align: center;
flex-direction: column;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 20px;`

const DataBook = styled.h2`
font-size: small;
text-align: center;
flex-direction: column;
mragin: 3px
`
const Button = styled.button`
width:40%,
height:30%`

function Book (props) {

    function selectBook(e){
        props.setIdBook(e.target.id)
    }

    function addBookToCart(){
        props.getBookDataById(props)
    
    }

  return (
    <Container>
    {/* {books.map(function(e){
        return( <ListBook> */}
        <ListBook>
            <NavLink to="/Product">
                <Button key={props.id} id={props.id} onClick={(selectBook)}>
                    <ImgBooks id={props.id}></ImgBooks>
                </Button>
            </NavLink>
            <Info>
                <NameBook>{props.name}</NameBook>
                <DataBook>{props.author}</DataBook>
                <DataBook>{props.price}
                <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
                </DataBook> 
                <FontAwesomeIcon icon={faShoppingCart} onClick={addBookToCart} size={'lg'} style={{cursor: "pointer", display: "table-column"}}></FontAwesomeIcon>  
            </Info>   
            
        </ListBook>
        {/* </ListBook>
        )
    })} */}
</Container> 
  )
}


export default Book