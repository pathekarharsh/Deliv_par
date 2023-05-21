const express = require("express");
const router = express.Router();
// const { updateStock } = require("../controller/deliveryAgentsController");
const { getAllProducts } = require("../controller/DeliveryAgentController");
const { createOrder } = require("../controller/DeliveryAgentController");
// const { getOrderDetails } = require("../controller/DeliveryAgentController");
// const { createOrder } = require("../controller/deliveryAgentsController");
//const { getStock } = require("../controller/inventoryController");

// router.post("/inventory/:id", updateStock);
router.get("/orders", getAllProducts);
router.post("/orders", createOrder);
// router.post()
// router.get("/orders/:id", getOrderDetails);
// router.post("/orders", createOrder);
// router.get("/inventory", getStock);

module.exports = router;