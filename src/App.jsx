// import
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import FinalizeOrder from './pages/FinalizeOrder'
import Thanks from './pages/Thanks'

// main app
function App() {

  const [idStoreSelect, setIdStoreSelect] = useState('');
  const [selectedBookId, setSelectedBookId] = useState('');
  const [orderId, setOrderId] = useState();
  const [booksCart, setBooksCart] = useState([]);

  function addBookToCart(book) {
    const lsBooksCart = JSON.parse(localStorage.getItem('booksCart'));
    console.log('saving the current cart: ' + JSON.stringify([book, ...lsBooksCart]))
    setBooksCart([book, ...lsBooksCart]);
  }

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('booksCart', JSON.stringify(booksCart));
  }, [booksCart]);

  return (
    <Routes>
      <Route path="/" element={<Home data={idStoreSelect} updateIdStore={setIdStoreSelect} />}></Route>

      <Route path="/Books" element={<BooksList data={idStoreSelect}
        setSelectedBookId={setSelectedBookId}
        addBookToCart={addBookToCart} />}></Route>

      <Route path="/Product" element={<Product bookId={selectedBookId}
        addBookToCart={addBookToCart} />}></Route>

      <Route path="/Cart" element={<Cart data={booksCart} />}></Route>

      <Route path="/FinalizeOrder" element={<FinalizeOrder data={booksCart}
        getOrderId={setOrderId} />}></Route>

      <Route path="/Thanks" element={<Thanks data={orderId} />}></Route>
    </Routes>
  )
}

export default App