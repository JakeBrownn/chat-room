// Make socket connection
const connectionURL = 'http://localhost:5000';
const socket = io.connect(connectionURL);

// DOM Variables
const message = document.getElementById('message-input');
const output = document.getElementById('message-output');
const handle = document.getElementById('handle-input');
const button = document.getElementById('send-button');
const feedback = document.getElementById('user-feedback');


// Event Listeners

// On message sent
button.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// On user typing
message.addEventListener('keypress', () => {
  socket.emit('userTyping', handle.value);
});


// Event Handlers

// When a message is submitted
socket.on('chat', (data) => {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong> ' + data.message + '</p>';
  feedback.innerHTML = '';
});

// When user is typing
socket.on('userTyping', (data) => {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});