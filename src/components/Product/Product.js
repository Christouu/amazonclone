import React from "react";
import "./Product.css";

function Product({ id, title, image, price, raiting }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/*Display stars */}
        <div className="product__raiting">
          {Array(raiting)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="lean startup" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
