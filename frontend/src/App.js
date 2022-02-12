import React ,{Component} from 'react';
import {Route,Switch} from  'react-router-dom'
import Products from "./components/clients"
import './App.css';
import ProductId from './components/productid';

class App  extends Component {
  render() { 
    return (
      <main className="containers">
        <Switch>

        <Route exact path="/"   component={Products}/>
        <Route path="/products/:id" component={ProductId}/>
        </Switch>
        
      
      </main>
    );
    
  }
}
 
export default App ;
