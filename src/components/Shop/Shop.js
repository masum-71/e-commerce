import React, { useEffect, useState } from "react";
import { addToDb, getStoredCard } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //Load products from db start here
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //Load products from db end here

  //AddToCart button handel start
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  //AddToCart button handel end

  //Load data from localStorage
  useEffect(() => {
    const storedId = getStoredCard();
    const savedCart = []
    for (const id in storedId) {
      const addedProducts = products.find((product) => product.id === id);
      if (addedProducts) {
        const quantity = storedId[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts)
      }
    }
    setCart(savedCart)
  }, [products]);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
