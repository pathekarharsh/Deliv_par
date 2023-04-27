const express = require('express');
const { connect } = require('../db');
const { getOrders } = require('../db/OrderQueueModels.js');

const router = express.Router();

router.get('/', async (req, res) => {
  const db = await connect();
  const orders = await getOrders(db);
  res.json(orders);
});

module.exports = router;
