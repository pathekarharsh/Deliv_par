const express = require('express');
const router = express.Router();
const deliveryAddressController = require('./controllers/deliveryAddressControllers.js');

router.get('/delivery-address', deliveryAddressController.getAllDeliveryAddresses);

module.exports = router;
