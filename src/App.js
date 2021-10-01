import "./App.css";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Login from "./components/Login/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { authentication } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(""); // add stripe publisher key

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged off
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
