class Order {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  // Helper function to convert row data to Order object
  function rowToOrder(row) {
    return new Order(row.id, row.name, row.quantity, row.price);
  }
  
  // Function to retrieve order details by ID
  function getOrderById(id, callback) {
    db.get(`SELECT * FROM orders WHERE id = ?`, [id], (err, row) => {
      if (err) {
        callback(err);
      } else if (!row) {
        callback(new Error(`No order found with ID ${id}`));
      } else {
        callback(null, rowToOrder(row));
      }
    });
  }
  