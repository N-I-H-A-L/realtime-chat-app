const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const port = process.env.port || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

//On the localhost:5000 it should say, 'Server is up and running'. Because of router.
const router = require('./router');

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const user = addUser({ id: socket.id, name, room });

    if(user.error) return callback(user.error);

    //Joins the socket instance to the room.
    socket.join(user.room);

    //Emit this message for current socket instance
    socket.emit('message', {user: 'admin', message: `Welcome ${user.name} to the room, ${user.room}`});

    //Emit this message to all the users present in the room except the socket instance itself.
    socket.broadcast.to(user.room).emit('message', {user: 'admin', message: `${user.name} has joined the room!`});
  });

  //When message is sent from the frontend side.
  socket.on('sendMessage', (message)=>{
    const user = getUser(socket.id);
    //Send this message to all the users present in the room.
    if(user) io.in(user.room).emit('message', {user: user.name, message: message});
  });
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));