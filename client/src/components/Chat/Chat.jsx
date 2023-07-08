import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import InfoBar from '../InfoBar/InfoBar.jsx'

import './Chat.css';

//URL of server
const ENDPOINT = 'http://localhost:5000/';

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  //'message' will store the state of the message input the user is giving.
  const [message, setMessage] = useState('');
  //'messages' will store all the messages sent till now by the users or admin (server).
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //It will parse the values of 'name' and 'room' from the URL.
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    //Emit the 'join' event to indicate a user has joined the room.
    socket.emit('join', { name, room }, (error) => {
      //If error got returned.
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, window.location.search]);

  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessages([...messages, message]);
      setMessage('');
    });
  }, [messages]);

  //This function will handle the event of message is sent by the user.
  const sendMessage = (event) => {
    //to prevent refreshing of page
    event.preventDefault();

    //if message is not empty.
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(messages);

  return (
    <div className='outer-container'>
      <div className="container">
        <input value={message} onChange={(e)=>setMessage(e.target.value)} onKeyUp={(e)=> (e.key=='Enter'?sendMessage(e):null)}/>
        <InfoBar />
      </div>
    </div>
  );
}

export default Chat;
