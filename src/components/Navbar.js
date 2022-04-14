import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (

      < div className="navbar">
          
      <div className='flex-container'>
        <a class="active" href="#">  <i class="fa fa-ravelry fa-pull-left fa-beat-fade fa-4x"></i></a>
         <Link to ='/Product'>
         <div className='product'>
         <a href="#news">Products</a>
         </div></Link>
    
    
                  < Link to ="/Cart">
                   <div className='shopCart'><a href="#"><i class="fa-solid fa-cart-shopping fa-2x fa-pull-right fa-bounce"></i></a>
                  </div>
                  </Link>
  
          
         
      </div>
        
  </div>
    );
  }}