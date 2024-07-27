import React from 'react'
import './App'
import {Route, Routes } from 'react-router-dom'
import { ChatScreen } from './screens'
import { ContactoScreen } from './screens'




function App() {
  
  return (
      <Routes>
            <Route path='/' element={<ContactoScreen/>}/>
            <Route path='chat/:contactId' element={<ChatScreen/>}/>
              
      </Routes>
  )
}
export default App
