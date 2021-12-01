import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const {_id,productName,image,sellerName,city,stock,price} = product;

    return (
            
      <div className="product">
            <div>
            <img
              style={{ borderRadius: '10%',height:'250px',width:'250px', display: 'block', margin: 'auto' }} 
            src={`data:image/*;base64,${image}`} alt="" />
            </div>
            <div id="ab">
                <h1 className="product-name">{productName}</h1>
                <p>Sell By: {sellerName}, { city}</p>
                <h3>Price:  {price}.00 Tk</h3>
                <p id="stock">only  <span id="stocknmb"> {stock} </span> left in stock - order soon</p>
                <Link to={`/orderpage/${_id}`} id="link1">
        <button id="button1">
        Buy Now
        </button>
        </Link>
            </div>
            
        </div>
            
    );

};

export default Product;