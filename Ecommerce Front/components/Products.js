import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Global/ProductsContext';
import Banner from './Banner';
import { CartContext } from '../Global/CartContext'
const Products = () => {
    const { products } = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);

    return (
        <div className='container'>
            <Banner/>
            <div className='products'>
                {products.map((product) => (
                    <div className='product' key={product.id}>
                        <div className='product-image'>
                            <img src={product.image} alt='Home image' />
                        </div>
                        <div className='product-details'>
                            <div className='product-name'>
                                {product.name}
                            </div>
                            <div className='product-price'>
                                Rs. {product.price}
                            </div>
                        </div>
                        <div className='add-cart' onClick={()=>dispatch({type: 'ADD_TO_CART', id:product.id, product})}>Add to Check</div>
                        {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
                        {product.status === 'New' ? <div className='new'>New</div> : ''}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products