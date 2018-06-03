// Document Variables
const URL = window.location.href;
const socket = io.connect(URL);


// DOM Variables
const message = document.getElementById('message-input');
const output = document.getElementById('message-output');
const handle = document.getElementById('username');
const button = document.getElementById('send-button');
const feedback = document.getElementById('user-feedback');


// On send message
button.addEventListener('click', (e) => {
  e.preventDefault();

  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });

  // Clear message
  message.value = '';
});


// On user typing
message.addEventListener('keypress', () => {
  socket.emit('userTyping', handle.value);
});


// Handle message submit
socket.on('chat', (data) => {
  const messageUsername = '<span class="message__username">' + data.handle + ': </span>';
  const messageContent = '<span class="message__content">' + data.message + '</span>';

  output.innerHTML += '<p class="message">' + messageUsername + messageContent + '</p>';
  feedback.innerHTML = '';
});


// Handle user typing
socket.on('userTyping', (data) => {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});