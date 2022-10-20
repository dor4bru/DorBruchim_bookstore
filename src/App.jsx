// import
import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import FinalizeOrder from './pages/FinalizeOrder'
import Thanks from './pages/Thanks'

// main app
function App(){

  const [idStoreSelect, setIdStoreSelect] = useState('');
  const [idBookSelect, setIdBookSelect] = useState('');
  const [bookDataSelectToBuy, setBookDataSelectToBuy] = useState([])
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookDataSelectToBuy));
  
  }, [bookDataSelectToBuy]);

  return (
    <Routes>
      <Route path="/" element={<Home data ={idStoreSelect} updateIdStore={setIdStoreSelect}/>}></Route>
      <Route path="/Books" element={<BooksList data ={idStoreSelect} 
                                               bookData={idBookSelect} 
                                               cartBookData={bookDataSelectToBuy}
                                               updateIdBook={setIdBookSelect} 
                                               getBookById={setBookDataSelectToBuy}/>}></Route>
      <Route path="/Product" element={<Product data={idBookSelect}
                                               cartBookData={bookDataSelectToBuy}
                                               getBookById={setBookDataSelectToBuy}/>}></Route>
      <Route path="/Cart" element={<Cart data={bookDataSelectToBuy}/>}></Route>
      <Route path="/FinalizeOrder" element={<FinalizeOrder data={bookDataSelectToBuy}
                                               getOrderId={setOrderId}/>}></Route>
      <Route path="/Thanks" element={<Thanks data={orderId}/>}></Route>
    </Routes>
  )
}

export default App