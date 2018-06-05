// DOM Variables
const popup = document.getElementById('welcome-popup');
const popupForm = document.getElementById('popup-form');
const header = document.getElementById('header');
const chatRoom = document.getElementById('chat-room');


// Close popup
popupForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  popup.classList.add('hidden');

  header.classList.remove('disabled');
  chatRoom.classList.remove('disabled');
});
