import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./cartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context";
import CartList from "./CartList";
import CartTotals from "./CartTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            console.log(cart);
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              console.log("how");
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}