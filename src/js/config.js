// Document Variables
const URL = window.location.href;
const socket = io.connect(URL);


// DOM Variables
const message = document.getElementById('message-input');
const output = document.getElementById('message-output');
const username = document.getElementById('username');
const button = document.getElementById('send-button');
const feedback = document.getElementById('user-feedback');


// On send message
button.addEventListener('click', (e) => {
  e.preventDefault();

  socket.emit('chat', {
    message: message.value,
    username: username.value
  });

  // Clear message
  message.value = '';
});


// On user typing
message.addEventListener('keypress', () => {
  socket.emit('userTyping', username.value);
});


// Handle message submit
socket.on('chat', (data) => {
  const d = new Date();
  const hour = d.getHours().toString();
  const minute = d.getMinutes().toString();
  const timestamp = hour + ':' + minute;

  const messageTimestamp = '<span class="message__timestamp">[' + timestamp + ']</span>';
  const messageUsername = '<span class="message__username">' + data.username + ':</span>';
  const messageContent = '<span class="message__content">' + data.message + '</span>';

  output.innerHTML += '<p class="message">' + messageTimestamp + messageUsername + messageContent + '</p>';
  feedback.innerHTML = '';
});


// Handle user typing
socket.on('userTyping', (data) => {
  feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});