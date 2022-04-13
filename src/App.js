import React, {element} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import Home from "./components/Home";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";





function App() {
  return (
   <div>
      <Navbar />
      <Routes>
       
        <Route path="Cart" element={<Cart/>} />
        <Route path="Details" element={<Details />} />
        <Route path="ProductList" element={<ProductList />} />
        <Route path="Default" element={<Default />} />
        <Route exact path="/" element={<  Home />}>
        
      </Route>
    </Routes>
   </div>


  
  );
}

export default App;
