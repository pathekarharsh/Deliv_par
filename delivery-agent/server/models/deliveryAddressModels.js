const db = require('../db');

const DeliveryAddress = function (deliveryAddress) {
  this.name = deliveryAddress.name;
  this.address1 = deliveryAddress.address1;
  this.address2 = deliveryAddress.address2;
  this.city = deliveryAddress.city;
  this.state = deliveryAddress.state;
  this.zip = deliveryAddress.zip;
};

DeliveryAddress.getAll = (result) => {
  db.all('SELECT * FROM delivery_address', (err, rows) => {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, rows);
    }
  });
};

module.exports = DeliveryAddress;
