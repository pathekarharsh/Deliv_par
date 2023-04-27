async function getOrders(db) {
    return db.all('SELECT * FROM orders');
  }
  
  async function getOrderById(db, id) {
    return db.get('SELECT * FROM orders WHERE id = ?', id);
  }
  
  module.exports = { getOrders, getOrderById };
  