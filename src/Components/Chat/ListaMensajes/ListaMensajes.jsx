import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerContactos } from '../../../Fetching/FetchContactos' 

export const ListaMensajes = ({mensajesChat}) => {

  return (
    <div className='lista_mensaje'>
    {mensajesChat.map((mensajes) =>
      <Mensaje mensaje={mensajes} key = {mensajes.id} />
    )}
    </div>
  )
}
