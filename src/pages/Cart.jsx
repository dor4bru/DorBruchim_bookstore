import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import { Container, Button, ButtonDiv } from '../styles/cartStyles';


const column = [
  { heading: 'Name', value: 'name' },
  { heading: 'Quantity', value: 'quantity' },
  { heading: 'Price', value: 'price' },
  { heading: '', value: 'icon' },
]

function Cart({ data }) {
  const [cartList, setCartList] = useState([]);
  const [sumItemsCart, setSumItemCart] = useState();
  let dataTable = [];
  let sum = calculateSum();
  buildDataForTable();

  useEffect(() => {
    setCartList(cartList)
    setSumItemCart(sum)
    buildDataForTable()
  }, [cartList]);

  function calculateSum() {
    return data.map(b => b.price).reduce((p1, p2) => p1 + p2, 0);
  }

  function deleteBookSelect(idBook) {
    data.findIndex((obj, index) => {
      if (obj.id === idBook) {
        delete data[index]
      }
    });
    calculateSum();
    buildDataForTable();
    setCartList(cartList)
  }

  function getAmount(id) {
    let amount = 0;
    data.some((book, index) => {
      if (book.id === id) {
        if (amount > 0) {
          delete data[index]
        }
        amount++;
      }
    });
    return amount;
  }

  function buildDataForTable() {
    data.map(book => {
      dataTable = [
        {
          id: book.id,
          name: book.author + ' - ' + book.name,
          description: book.description,
          price: book.price,
          quantity: getAmount(book.id)
        }, ...dataTable]
    })

    dataTable.sum = sum
  }

  return (
    <Container>
      <Navbar />
      <Table data={dataTable} column={column} />
      <NavLink to='/FinalizeOrder' >
        <ButtonDiv>
          <Button>Next</Button>
        </ButtonDiv>
      </NavLink>
    </Container>
  )
}

export default Cart