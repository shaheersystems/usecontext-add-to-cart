import React from "react";
import SingleProduct from "./SingleProduct";
function Cart({ cart, setCart }) {
  const calTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + parseInt(cart[i].price);
    }
    return totalPrice;
  };
  return (
    <div className="cart">
      <div className="total-bill">
        <span style={{ fontSize: 30 }}>My Cart</span>
        <br />
        <span style={{ fontSize: 30 }}>Total Price: $ {calTotal()}</span>
      </div>
      <div className="products-container">
        {cart.map((item) => {
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
    </div>
  );
}

export default Cart;
