// Modules
const express = require('express');

// App setup
const app = express();
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);

// Static files setup
app.use(express.static('src'));

// Import socket.io setup
require('./server/socketConfig')(server);