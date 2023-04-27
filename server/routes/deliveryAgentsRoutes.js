const express = require('express');
const router = express.Router();
const deliveryAgentsController = require('../controllers/deliveryAgentsControllers.js');

// Update a delivery agent's profile
router.put('/:id', deliveryAgentsController.update);

module.exports = router;
