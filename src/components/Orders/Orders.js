import React, { useEffect, useState } from "react";
import "./Orders.css";

import { doc, orderBy, query, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

import Order from "../Order/Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      //   db.collections("users")
      //     .doc(user?.uid)
      //     .collections("orders")
      //     .orderBy("created", "desc")
      //     .onSnapshot((shot) => {
      //       setOrders(
      //         shot.docs.map((doc) => ({
      //           id: doc.id,
      //           data: doc.data(),
      //         }))
      //       );
      //     });

      const ordersDoc = doc(db, "users", "orders");
      const q = query(ordersDoc, orderBy("created", "desc"));
      onSnapshot(q, (shot) => {
        setOrders(
          shot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders.map((el) => (
          <Order order={el} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
