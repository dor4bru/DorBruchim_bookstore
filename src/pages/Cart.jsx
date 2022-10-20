import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashCan, faEuro} from "@fortawesome/free-solid-svg-icons"
import Navbar from '../components/Navbar';

const Container = styled.div``
const Button = styled.button``
const Table = styled.table``

const Tr = styled.tr``

const Td = styled.td``

const Th = styled.th``

const Title = styled.h3``

const Description = styled.p``

function Cart (props) {
  //debugger
  //console.log('cart props', props)
    // const [contacts, updateContacts] = useState([]);

    // const addContact = (contact) => {
    //     updateContacts([...contacts, contact]);
    //   };

    // console.log(contacts)

    function getCountBook(id){
      let count = 0;
      props.data.forEach((book) => (book.id === id && count++));
      return count;
    }

    function calculateSum(){
      let sum = 0;
      props.data.forEach((book) => (sum+= book.price));
      return sum;
    }

  return (
      <Container>
        <Navbar></Navbar>
        <Table id="cart">
          <tbody>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th></Th>
          </tbody>
            {props.data.map(book => {
              return(
                <tbody>
                  <Td>
                    <Title>{book.author} - {book.name}</Title>
                    <Description>{book.description}</Description>
                  </Td>
                  <Td>{getCountBook(book.id)}</Td>
                  <Td>{book.price}</Td>
                  <Td><FontAwesomeIcon icon={faTrashCan} style={{color: "red"}}></FontAwesomeIcon></Td>
              </tbody>
              )
              })}
          <tbody>
            <Td></Td>
            <Td></Td>
            <Td>{calculateSum()}
            <FontAwesomeIcon icon={faEuro}></FontAwesomeIcon>
            </Td>
          </tbody>
        </Table>
        <NavLink to='/FinalizeOrder' >
          <Button>Next</Button>
        </NavLink>
          {/* <FormOrder addContact={addContact}/> */}
          {/* <Thanks contacts = {contacts}/> */}
      </Container>
  )
}

export default Cart