const db = require('../db');

// Delivery Agent model
class DeliveryAgent {
  constructor(deliveryAgent) {
    this.id = deliveryAgent.id;
    this.email = deliveryAgent.email;
    this.firstName = deliveryAgent.firstName;
    this.lastName = deliveryAgent.lastName;
    this.phone = deliveryAgent.phone;
  }

  // Update a delivery agent's profile
  static update(id, deliveryAgent) {
    return new Promise((resolve, reject) => {
      const { email, firstName, lastName, phone } = deliveryAgent;
      db.run(
        `UPDATE delivery_agents SET email = ?, first_name = ?, last_name = ?, phone = ? WHERE id = ?`,
        [email, firstName, lastName, phone, id],
        function (err) {
          if (err) {
            console.error(err.message);
            reject(err);
          }
          resolve({ id: this.lastID });
        }
      );
    });
  }
}

module.exports = DeliveryAgent;
