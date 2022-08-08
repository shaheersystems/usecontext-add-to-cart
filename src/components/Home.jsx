import React from "react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
faker.seed(100);
function Home({ cart, setCart }) {
  const productsArray = [...Array(20)].map((item) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.food(),
  }));
  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div className="products-container">
      {products.map((item) => {
        return (
          <SingleProduct
            key={item.id}
            product={item}
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}

export default Home;
