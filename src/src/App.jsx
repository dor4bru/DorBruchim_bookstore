// import
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BooksList from './pages/BooksList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import FinalizeOrder from './pages/FinalizeOrder'
import Thanks from './pages/Thanks'

// main app
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Books" element={<BooksList />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/FinalizeOrder" element={<FinalizeOrder />}></Route>
            <Route path="/Thanks" element={<Thanks />}></Route>
        </Routes>
    );
}

export default App