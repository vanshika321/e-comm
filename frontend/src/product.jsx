import React from "react";
import "./../products.css";
import { Link } from "react-router-dom";
import ProductId from "./productid";
export const ThemeContext =React.createContext()



const Product = ({ name, price, ratings, images ,_id,CallComponent}) => {
  const image=images[0]

  return (
    
      
    <a href="/id">
      {/* <ProductId id={_id}/> */}
    <div className="card">
      <div className="imgBx">
        <h1>Product</h1>
        <img src={image} alt={image} className="myProductImage" />
      </div>
      <div className="content">
        <div className="productName">
          <h3>{name}<Link to={`/products/${_id}`}/></h3>
        </div>
        <div className="price_rating">
          <div className="price">{price} Rs</div>
          <div className="ratings">
              {ratings}
            <i className="fa fa-star"></i>
            {/* <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i> */}
          </div>
        </div>
      </div>
     
    </div>
    </a>
    
  );
};

export default Product;
