import React, {useState ,useEffect} from 'react'
import { getBookData } from '../api/Books'
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import books from '../img/books.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faEuro} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';
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
width: 40%;
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
flex-direction: column;`

const DataBook = styled.h2`
font-size: small;
text-align: center;
flex-direction: column;
`
const Button = styled.button``

function Books (props) {

    const [book, setSelectBook] = useState([]);
    useEffect(() =>{
        getBookData()
        .then((data) =>{
            setSelectBook(data);
            console.log(data)
        })
    }, []);
   
    // const navigate = useNavigate();
  return (
    <Container>
    {book.map(function(e){
        return( <ListBook>
                   <NavLink to="/Product">
                <Button onClick={() => 
                props.hideBookPage()}>
            <ImgBooks></ImgBooks>
            </Button>
            </NavLink>
            <Info>
            <NameBook>{e.name}</NameBook>
            <DataBook>{e.author}</DataBook>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <DataBook>{e.price}</DataBook>
            <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
           </Info>
        </ListBook>
        )
    })}
</Container> 
  )
}


export default Books