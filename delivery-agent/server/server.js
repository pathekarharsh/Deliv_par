const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const deliveryAgentsRoutes = require('./routes/deliveryAgentsRoutes.js');

const app = express();

// Enable CORS
app.use(cors());

// Enable JSON parsing
app.use(bodyParser.json());

// Delivery agents routes
app.use('/api/delivery-agents', deliveryAgentsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
