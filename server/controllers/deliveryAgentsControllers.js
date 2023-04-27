const DeliveryAgent = require('../models/deliveryAgentModels.js');

// Update a delivery agent's profile
exports.update = async (req, res) => {
  const { id } = req.params;
  const deliveryAgent = new DeliveryAgent(req.body);

  try {
    await DeliveryAgent.update(id, deliveryAgent);
    res.status(200).send({ message: 'Delivery agent profile updated successfully.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: 'Error updating delivery agent profile.' });
  }
};
