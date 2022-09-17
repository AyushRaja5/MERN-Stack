import React, { useContext, useState } from 'react'
import { CartContext } from '../Global/CartContext'
// import { CartReducer } from '../Global/CartReducer';
import StripeCheakout from "react-stripe-checkout";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Cart = (props) => {
  const { shoopingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const data = useContext(CartContext);
  const handleToken = async(token) =>{
    const product  = {name: "All Products", price: totalPrice}
    const responce = await axios.post("http://localhost:8000/checkout",{
      product,token
    });
    const [status] = responce.data;
    if(status === "success"){
      dispatch({type: 'EMPTY'});
      props.history.push('/');
      toast.success("You have paid Successfully, Now you can Chat with Owner",{position:toast.POSITION.TOP_RIGHT});
    }
    console.log(responce)
  }
  console.log(data);
  return (
    <div className='container'>
      <div className='cart-container' style={{ marginTop: '100px' }}>
        {shoopingCart.length > 0 ?
          shoopingCart.map(cart => (
            <div className='cart' key={cart.id}>
              <span className='cart-image'><img src={cart.image} alt='not Found' /></span>
              <span className='cart-name'>{cart.name}</span>
              <span className='cart-product-price'>Rs. {cart.price}/person</span>
              <div className='cart-block'>
              <span className='inc' onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><i className='fas fa-plus' /></span>
              <span className='product-quantity'>{cart.qty}</span>
              <span className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><i className='fas fa-minus' /></span>
              </div>
              <span className='product-total-price'>Rs. {cart.price * cart.qty}</span>
              <span className='del' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><i className='fa fa-trash-alt' /></span>
            </div>
          ))
          : <div className='empty'>Sorry You rcart is empty</div>}
      </div>
      {shoopingCart.length > 0 ? <div className='cart-summary'>
        <div className='summary'>
          <h2>Cart summary</h2>
          <div className='total-items'>
            <div className='items'>Total Items</div>
            <div className='items-count'>{qty}</div>
          </div>
          <div className='total-price-section'>
            <div className='just-title'>Total Price</div>
            <div className='item-price'>Rs : {totalPrice}.00</div>
          </div>
          <div className='stripe-section'>
              <StripeCheakout
              stripeKey='pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlPCg'
              token={handleToken}
              billingAddress
              shippingAddress
              amount={totalPrice*100}
              name = 'Pay Here'
              >
              </StripeCheakout>
          </div>
        </div>
      </div> : ''}
    </div>
  );
}

export default Cart