import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__raiting">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
        alt="lean startup"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
