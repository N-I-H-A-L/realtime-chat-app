import React from 'react'
import './TextContainer.css';

const TextContainer = ({ message, name }) => {
  return (
    <div> 
      {name}
      {message}
    </div>
  )
}

export default TextContainer
