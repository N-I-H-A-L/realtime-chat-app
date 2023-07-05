const express = require('express');
const socket = require('socket.io');
const http = require('http');

const port = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = socket(server);

const router = require('./router');
//On the localhost:5000 it should say, 'Server is up and running'. 
app.use(router);

//'connection' is a built in keyword. Whenever a new instance of socket connects to the server, the below event will be fired. 
io.on('connection', (socket)=>{
    //We'll manage the socket which just got connected. 
    console.log(`${socket.id} connected to the server.`);

    //disconnect is a built in event of Socket.io.
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} has left.`);
    })
});

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});