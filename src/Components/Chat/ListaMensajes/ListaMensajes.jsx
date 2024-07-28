import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
import { useParams } from 'react-router-dom'
import { MOOK_CONTACTOS } from '../../../data'

export const ListaMensajes = ({mensajesChat}) => {
  const{contactId} = useParams()
  const contacto = MOOK_CONTACTOS.find(contacto => contacto.id === Number(contactId))
  return (
    <div className='lista_mensaje'>
    {mensajesChat.map((mensajes, index) =>
      <Mensaje mensaje={mensajes} key = {index} contacto />
    )}
    </div>
  )
}
