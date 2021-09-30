import React from "react";
import "./Checkout.css";

import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://flipshope.com/blog/wp-content/uploads/2020/12/Amazon-New-Year-Sale-2021.jpg"
          alt="ad photo"
        />

        <div>
          {user ? <h3>Hello {user.email}</h3> : null}
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              raiting={item.raiting}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
