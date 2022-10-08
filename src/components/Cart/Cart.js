import React from "react";

const Cart = ({ cart }) => {

    let price = 0;
    let shipping = 0;
    let tax = 0;
   

    for(const product of cart){
        price += product.price;
        shipping += product.shipping;
        tax = price * .10;
    }
    let total = price + shipping + tax;
  return (
    <div>
      <h2>Order summary</h2>
      <p>Selected Item: {cart.length}</p>
      <p>Total price: ${price}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax :${tax.toFixed(2)} </p>
      <h4>Grand Total: {total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
