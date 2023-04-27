import React, { useState } from "react";
import "./OrderDetails.css";
import Navbar from "../../components/Navbar";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Order Details</h1>} screenname={<h2>DA104</h2>} />
        <div className="details-page">
          <h2>Order #12345</h2>
          <div className="item-card">
            <img
              src="https://imgs.search.brave.com/nsy-i1VDkBCMDNiBwMEUqfU7Tbmmi6dUuLSNsVyFUHI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZmVlZGlwZWRpYS5v/cmcvc2l0ZXMvZGVm/YXVsdC9maWxlcy9p/bWFnZXMvdG9tYXRv/X2ZydWl0cy5qcGc"
              alt="Tomato"
            />
            <div className="item-details">
              <h3>Tomato</h3>
              <p>Quantity: {quantity} Kg</p>
              <p>Price: Rs.31</p>
              <div className="quantity-controls">
                <FaMinusCircle onClick={handleMinus} className="control-icon" />
                <p className="card-quantity">{quantity}</p>
                <FaPlusCircle onClick={handlePlus} className="control-icon" />
              </div>
              <div>
                <div className="verified">
                  <Link to="/orderqueue/orderdetails/deliveryaddress" className="update-button">Quantity Verified</Link>
                  <Link to="/orderqueue/orderdetails/deliveryaddress" className="update-button">Item Verified</Link>
                </div>
                <div className="reject">
                  <Link className="update-button">Rejected</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
