
import React from "react";
import Product from "./product";
import "./../products.css";
import { BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";


import ProductId from "./productid";

class Products extends React.Component {
  // CallComponent = (_id) => {
  //   console.log("hi");
  //   <Link to="/productnew">
  //   </Link>;
  //   <Route path="/productnew" component={ProductId}></Route>
  // };
 
//   CallComponent = (_id) => {
//       useHistory.push("/productid")
//  };


  constructor() {
    super();
    this.state = {
      productsdetails: [],
      searchTerm:""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3002/api/v1/products")
      .then((response) => response.json())
      .then((productsdetails) =>
        this.setState({ productsdetails: productsdetails.AllProducts })
      );
  }

  render() {
    // console.log(this.state.productsdetails);
    return (
      <div className="body">
        <div className="navbar">
          <img src="logo.jpg" alt="" />
          <span className="text">
          Quality Products at your doorsteps...

          </span>
          <span>
          <input type="text"placeholder="Search ...." 
        onChange={(e)=>{
          this.setState({searchTerm:e.target.value})
        }}/>
          </span>
         
          
        </div>
        <div className="container">
          {this.state.productsdetails.filter((val)=>{
            if(this.state.searchTerm==="")
                return val
                else if(val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                    return val
          }).map((obj) => (
            <Product {...obj} CallComponent={this.CallComponent} />
          ))}
        </div>
      </div>
    );
  }
}
export default Products;
