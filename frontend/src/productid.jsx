import React,{useState,useEffect}   from "react";
import {BrowserRouter as Router} from "react-router-dom"
// import "./../newpros.css";
import "./../products.css"
import { Redirect } from "react-router-dom";
// const ThemeContext =React.createContext()
import { ThemeContext } from "./product";
// import ProductId from './productid';


class ProductId extends React.Component{
//   // static contextType = ThemeContext;
 
  constructor()
  {
    super()
    this.state={
      productsdetails:[],
      

    }
    
  }
  componentDidMount()

  {   
    fetch('http://localhost:3000/api/v1/products/:id') 
        .then((response) => response.json())
        .then((productdetails) => this.setState({productdetails:productdetails.Product}))
  }



 
 
  
 

  render() {
     
    return (
      
        <div class="hi">
          <div className="navbar">
          <img src="logo.jpg" alt="" />
          <span className="text">
          Quality Products at your doorsteps...
          </span>
         
          
        </div>
        <div class="containerx">
            <div class="imgBxs">
                <img src={this.state.productsdetails.images[0]} alt="" />
                {/* <img src="waffles.png" alt="" /> */}
            </div>
            <div class="detail">
              {/* <div class="name">{this.state.productsdetails.name}</div>
               */}
               <div className="name">Waffles</div>
              <div class="description">Fresh and best in the market </div>
              {/* <span class="price">${this.state.productsdetails.price}</span> */}
              <span><strike>200</strike></span>
              <span class="off">50% off</span>
            </div>
            
            <div class="ratings">
              <span class="stars">
                3.3 
              </span>
    
              <span class="fa">
               <i class="fa fa-star"></i>
              </span>
              
            </div>
            <div class="size">
              <h3>Size :</h3>
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL </span>
          </div>
            <br/>
            <br/>
    
    
            <div class="cart">
              <div class="Bag">Add to  Bag</div>
              <div class="buy">Buy Now</div>
    
          </div>
        </div>
    </div>
    
    )
              }
  
}
export default ProductId;