import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import  "../node_modules/font-awesome/css/font-awesome.min.css";
// import Product from './components/product';
import Products from './components/products';
import ProductId from './components/productid';
import { BrowserRouter,Switch } from 'react-router-dom';
// import Products from './components/products';
import {Route} from "react-router-dom"
import Random from './components/random';


// ReactDOM.render(
//  <BrowserRouter><Products/></BrowserRouter>,document.getElementById("root")
// );

ReactDOM.render(
    <BrowserRouter>
       <Switch>
         <Route path="/id" component={ProductId}/>
         <Route path="/" exact component={Products}/> 
     </Switch>
   </BrowserRouter>,document.getElementById("root")
   );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
