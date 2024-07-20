import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'

export const ListaMensajes = ({mensajesChat}) => {
  return (
    <div className='lista_mensaje'>
    {mensajesChat.map((mensajes, index) =>
      <Mensaje mensaje={mensajes} key={index}/>
    )}
    </div>
  )
}
