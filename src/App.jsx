import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { ChatScreen, Contacto } from './screens'



function App() {
  
  return (
      <Routes>
            <Route path='/' element={<ChatScreen/>} />
            <Route path='/contacto' element={<Contacto/>}/>
              
         </Routes>
  )
}
export default App
