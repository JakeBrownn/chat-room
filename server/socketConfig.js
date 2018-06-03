const socket = require('socket.io');

module.exports = (server) => {
  
  // Setup Socket.io to the correct port
  // The server variable is defined in ./index.js
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
};