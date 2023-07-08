import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

// 'name' is the name of the person receiving the message. And 'user' is the name of the user sending the message, if 'name' and 'user' are same, it implies, the same user has sent the message so display the message on the right otherwise, someone else has sent the message so display it on the left side.
const Message = ({ message, user, name }) => {
    let isSentByUser = false;
    const trimmedName = name.trim().toLowerCase();
    if(user===trimmedName) isSentByUser = true;
  return (
    isSentByUser? (
      <div className='messageContainer justifyEnd'>
        <p className='sentText pr-10'>{user}</p>
        <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">
            {ReactEmoji.emojify(message)}
          </p>
        </div>
      </div>
    ) :
    (
      <div className='messageContainer justifyStart'>
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">
            {ReactEmoji.emojify(message)}
          </p>
        </div>
        <p className='sentText pl-10'>{user}</p>
      </div>
    )
  );
}

export default Message
