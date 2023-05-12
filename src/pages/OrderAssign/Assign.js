import React from "react";
import AssignPage from "./AssignPage";
import Navbar from "../../components/Navbar";

const Queue = () => {
  return (
    <div className="container">
      <div className="main">
        <Navbar pagename={<h1>Delivery Agents</h1>} screenname={ <h2>DA106</h2>} />
        <AssignPage />
      </div>
    </div>
  );
};

export default Queue;
