import React from 'react'
import './Input.css';

const Input = () => {
  return (
    <form className='form'>
      <input className='input' type='text' placeholder='Type a message...'
        value={message}
        onChange={(e)=>{setMessage(e.target.value)}}
        onKeyUp={(e)=>e.key=='Enter'?sendMessage(message):null}/>
      <button className='sendButton'></button>
    </form>
  )
}

export default Input
