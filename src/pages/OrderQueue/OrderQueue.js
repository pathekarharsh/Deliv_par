import React, { useState, useEffect } from "react";
import "./OrderQueue.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const OrderQueue = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the API using fetch or any other library
    fetch("http://localhost:5011/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="orders-container">
  {orders.map((order) => (
    <div key={order.orderNumber} className="order-card">
      <h2>Order #{order.id}</h2>
      <p>{order.item_name}</p>
      <div>
        <Link to="/orderqueue/orderdetails" className="update-button">
          Details
        </Link>
      </div>
    </div>
  ))}
</div>

  );
};

export default OrderQueue;
