const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 4321;
const io = require('socket.io')(http);


app
  .use(express.static('client'))
  .get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
  });

http.listen(port, () => {
    console.log(`Listening on ${port} port`);
  });


  io.on('connection', (socket) => { 
    socket.on('clientMessage', (data) => {
      io.emit('newMessage', data); 
    }) 

    console.log('new client is connected');
  });
