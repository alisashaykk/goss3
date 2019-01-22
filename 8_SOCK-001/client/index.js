let socket = io('http://localhost:4321/');
let name = 'user_' + (Math.round(Math.random() * 100));
let dataObj = {};

document.querySelector('#nick').textContent = name;

document
  .querySelector('.send')
  .addEventListener('click', (event) => {
    event.preventDefault();
    let msg = document.querySelector('#m').value;
    dataObj = {name : name, msg: msg};

    socket.emit('clientMessage', dataObj) 
    document.querySelector('#m').value = '';
  });

socket.on('newMessage', (data) => { 
  let li = document.createElement('li');
  li.textContent = data.name  + ':  ' + data.msg;

  document.querySelector('#messages').appendChild(li);
});
