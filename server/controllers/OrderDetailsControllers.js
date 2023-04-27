const { getOrderById } = require('../models/OrderDetailsModels.js');

// Function to handle GET /orders/:id requests
function getOrderByIdController(req, res) {
  const id = req.params.id;
  getOrderById(id, (err, order) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving order details.');
    } else {
      res.json(order);
    }
  });
}

module.exports = {
  getOrderById: getOrderByIdController,
};
