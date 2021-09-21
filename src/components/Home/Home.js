import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/01/amazon-prime-1610537011.jpg"
          alt="prime amazon"
        />
        <div className="home__row">
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
