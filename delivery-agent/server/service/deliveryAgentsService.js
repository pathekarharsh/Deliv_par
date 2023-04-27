const DeliveryAgent = require('../models/deliveryAgent');

// Update a delivery agent's profile
exports.update = async (id, deliveryAgent) => {
  try {
    const result = await DeliveryAgent.update(id, deliveryAgent);
    return result;
  } catch (err) {
    console.error(err.message);
    throw new Error('Error updating delivery agent profile.');
  }
};
