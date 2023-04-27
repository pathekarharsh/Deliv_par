const express = require('express');
const router = express.Router();

// Import the Order model and getOrderById function
const { Order, getOrderById } = require('./models/OrderDetailsModels.js');

// Route to retrieve order details by ID
router.get('/orders/:id', (req, res) => {
  const id = req.params.id;
  getOrderById(id, (err, order) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving order details.');
    } else {
      res.json(order);
    }
  });
});

module.exports = router;
