const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(5000, () => {
  console.log('Listening on port 5000');
});

// Static Files setup
app.use(express.static('public'));


// Setup Socket.io to correct port
const io = socket(server);

// When connection is established
io.on('connection', (socket) => {
  
  // When 'chat' event is submitted
  socket.on('chat', (data) => {

    // Emmit data to all sockets
    io.sockets.emit('chat', (data));
  });

  // When 'typing' event is submitted
  socket.on('userTyping', (data) => {

    // Emitting to every socket, but not the one submitted
    socket.broadcast.emit('userTyping', data);
  });
});

