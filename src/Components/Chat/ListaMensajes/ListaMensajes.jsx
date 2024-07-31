import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerContactos } from '../../../Fetching/FetchContactos'

export const ListaMensajes = (obtenerContactos) => {
  const { contactId } = useParams();
  const [mensaje, setMensaje] = useState([]);
  

  return (
    <div className='lista_mensaje'>
      {mensaje.map((mensaje, index) =>
        <Mensaje mensaje={mensaje} key={`${contactId}.${mensaje.id}.${index}`} />
      )}
    </div>
  )
}
