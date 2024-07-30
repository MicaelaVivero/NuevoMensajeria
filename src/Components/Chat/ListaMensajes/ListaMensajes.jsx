import React from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerContactos } from '../../../Fetching/FetchContactos'

export const ListaMensajes = () => {
  const { contactId } = useParams();
  const [mensaje, setMensaje] = useState([]);
  

  useEffect(
    () => {
      obtenerContactos()
        .then(
          (data) => {
            const contacto = data.find(contacto => contacto.mensajes === Number(contactId))
            setContactos(contacto)

          })
        .catch((error) => {
          console.error('Error al obtener contactos:', error);
        })
    }, [])

  return (
    <div className='lista_mensaje'>
      {mensaje.map((mensaje, index) =>
        <Mensaje mensaje={mensaje} key={`${contactId}.${mensaje.id}.${index}`} />
      )}
    </div>
  )
}
