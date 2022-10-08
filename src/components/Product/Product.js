import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({product, addToCart}) => {
    const {name, img, seller, price, ratings, id} = product;
    return (
        <div className='product'>
           <img src={img} alt="img" />
           <div>
           <h5 className='name'>{name}</h5>
           <p className='price'>price: ${price}</p>
           </div>
           <div className='info'>
            <p className='manufacturer'><small>Manufacturer: {seller}</small></p>
            <p className='rating'><small>Rating: {ratings} star</small></p>
           </div>
           <div>
           <button onClick={()=> addToCart(product)}
            className='product-btn'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
            
           </div>
        </div>
    );
};

export default Product;