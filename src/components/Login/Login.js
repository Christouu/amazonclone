import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkuoaZhOPgeDFgR1A8ltOLR-Xjz-p0mbGcg&usqp=CAU"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton">Sign In</button>
          <p>asdsadsadsadsadsa you agree to terms adadsds</p>
          <button className="login__registerButton">
            Create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
