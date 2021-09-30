import React, { useState } from "react";
import "./Login.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "../../firebase";

import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(authentication, email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  }
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(authentication, email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

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
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>

          <p>asdsadsadsadsadsa you agree to terms adadsds</p>

          <button onClick={register} className="login__registerButton">
            Create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
