import React, { Component } from 'react';
import Product from './Product';
import { storeProducts } from '../data';
import  {ProductConsumer} from "./context";
import Title from './Title';

export default class ProductList extends Component {
  state={
    products:storeProducts
  }
  render() {
 
    return (
      <div >
         <div className='py-5'>
           <div className='container'>
             <Title name="Our" title='Products'/>
             <div className='row'>
               
                <ProductConsumer>
                  {(value)=>{
                    return value.products.map(product =>{
                      return <Product key={product.id} product={product} />;
                    })
                  }}
                </ProductConsumer>
             </div>
           </div>

         </div>
      </div>
    )
  }
}
