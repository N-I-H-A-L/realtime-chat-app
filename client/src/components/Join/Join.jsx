import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder='Name' className='joinInput' type='text' onChange={(e)=>{setName(e.target.value);}}/>
        </div>
        <div>
          <input placeholder='Room' className='joinInput mt-20' type='text' onChange={(e)=>setRoom(e.target.value)}/>
        </div>
        {/* We will transfer the user to the chat, and the URL will contain information about the name of the user */}
        {/* and the room name */}
        <Link onClick={(event)=>(!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button className='button mt-20' type='submit'>Sign In</button>
        </Link>
        {/* Inside the onClick listener of 'Link' we want to make sure, the user don't click the button without
        entering the 'name' and 'room' otherwise the app will break. */}
      </div>
    </div>
  );
}

export default Join;
