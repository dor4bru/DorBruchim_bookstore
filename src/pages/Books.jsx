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

function Books (props) {
    const [book, setSelectBook] = useState([]);
    const [dataBook, setDataBook] = useState({
        id:'',
        author:'',
        store_id:'',
        description:'',
        created_at:'',
        language:'',
        name:'',
        paperback:'',
        price:'',
        publisher:'',
        ratings:'',
        stars:'',
        type:'',
        updated_at:'',
        isActive:false,
        type_book:{}

    })
    useEffect(() =>{
        getBookData()
        .then((data) =>{
            data.map(function(books){
                if(books.store_id == props.storeIdSelect){
                    debugger
                }
            })
            
            setSelectBook(data);
            console.log(data)
        })
    }, []);
   
    function selectBook(e){
        debugger
        props.hideBookPage()
    }
  return (
    <Container>
    {book.map(function(e){
        return( <ListBook>
                   <NavLink to="/Product">
                <Button onClick={(selectBook)}>
            <ImgBooks></ImgBooks>
            <Info>
            <NameBook>{e.name}</NameBook>
            <DataBook>{e.author}</DataBook>
            <DataBook>{e.price}
            <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
            </DataBook> 
            <FontAwesomeIcon icon={faShoppingCart} size={'lg'} style={{cursor: "pointer", display: "table-column"}}></FontAwesomeIcon>  
           </Info>
            </Button>
            </NavLink>
        </ListBook>
        )
    })}
</Container> 
  )
}


export default Books