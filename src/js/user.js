// Assign colour to username
const colours = [
  '#3498db', // Blue
  '#8e44ad', // Purple
  '#d35400', // Orange
  '#e74c3c', // Red
  '#2ecc71', // Green
];

var randColour = colours[Math.floor(Math.random() * colours.length)];

const messageUsername = document.getElementsByClassName('message__username');

