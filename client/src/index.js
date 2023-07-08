import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Commenting out StrictMode so the components won't render more than once. When the components get 
  // rendered more than once, the same Socket.io instance tries to 'Join' the room, which leads to 'Username
  // already taken' error. To solve this, removed strict mode which will lead to single rendering of App component.
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


