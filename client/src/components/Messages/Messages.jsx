import React from 'react'
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

const Messages = ({ messages, name }) => {
  return (
    // ScrollToBottom will scroll to the bottom automatically.
    <ScrollToBottom className='messages'>
      {messages.map((message, index)=> (
        <Message message={message.message} user={message.user} name={name} key={index}/>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
