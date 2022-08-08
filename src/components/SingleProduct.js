import React from "react";

function SingleProduct({ product, cart, setCart }) {
  return (
    <div className="single-product">
      <img className="flex-1" src={product.image} alt={product.name} />
      <div className="product-desc flex-15">
        <span>{product.name}</span>
        <span> $ {product.price.substring(0, 3)}</span>
      </div>
      <div className="flex-15">
        {cart.includes(product) ? (
          <button
            onClick={() => {
              setCart(cart.filter((c) => c.id !== product.id));
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
