import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://flipshope.com/blog/wp-content/uploads/2020/12/Amazon-New-Year-Sale-2021.jpg"
          alt="ad photo"
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;