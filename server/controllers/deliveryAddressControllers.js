const DeliveryAddress = require('../models/deliveryAddressModels.js');

exports.getAllDeliveryAddresses = (req, res) => {
  DeliveryAddress.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving delivery addresses.',
      });
    } else {
      res.status(200).json(data);
    }
  });
};
