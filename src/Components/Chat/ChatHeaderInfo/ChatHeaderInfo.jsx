import React from 'react'
import './ChatHeaderInfo.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { obtenerContactos } from '../../../Fetching/FetchContactos'

export const ChatHeaderInfo = () => {
  const { contactId } = useParams()
  const [contacto, setContactos] = useState([])

  useEffect(
    () => {
      obtenerContactos()
        .then(
          (data) => {
            const contacto = data.find(contacto => contacto.id === Number(contactId))
            setContactos(contacto)

          })
        .catch((error) => {
          console.error('Error al obtener contactos:', error);
        })
    }, [])




  return (
    <div className='info_header'>
      <div className='info_contacto'>
        <Link to={`/`}><div className='arrow'><i className="bi bi-arrow-left"></i></div></Link>
        <div className='img_contacto'><img src="./assets/chica.jpg" alt="" /></div>
        <div className='contacto'>{contacto.nombre}</div>
      </div>
      <div className='secundary_icons'>
        <div><i className="bi bi-camera-video"></i></div>
        <div><i className="bi bi-telephone"></i></div>
        <div><i className="bi bi-three-dots-vertical"></i></div>
      </div>
    </div>
  )
}
