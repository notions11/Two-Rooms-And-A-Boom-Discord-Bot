const socket = io();

const players = {};
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  input.value = input.value()
  if (input.value){
    socket.emit('send message', input.value)
    input.value = '';
  }
})


