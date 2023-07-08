import React from 'react'
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import TextContainer from '../TextContainer/TextContainer';

const Messages = ({ messages }) => {
  return (
    // ScrollToBottom will scroll to the bottom automatically.
    <ScrollToBottom>
      {messages.map((message)=> (
        <TextContainer message={message.message} name={message.user}/>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
