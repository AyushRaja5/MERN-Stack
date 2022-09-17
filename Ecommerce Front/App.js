import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import ProductsContext from '../src/Global/ProductsContext';
import Products from '../src/components/Products';
import Cart from "./components/Cart";
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext';
function App() {
  return (
    <div>
      <ProductsContext>
        <CartContextProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Products />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route path="*" element={<NotFound />} ></Route>
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContext>
    </div>
  );
}

export default App;
