import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Join from './components/Join/Join.jsx';
import Chat from './components/Chat/Chat.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path = "/" element={<Join />} />
          <Route exact path = "/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
