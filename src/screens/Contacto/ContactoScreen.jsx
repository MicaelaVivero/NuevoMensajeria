import React from 'react'
import { MOOK_CONTACTOS } from '../../data'
import './ContactoScreen.css'
import HeaderContactos from '../../Components/Contactos/HeaderContactos/HeaderContactos'
import { ListaContactos } from '../../Components/Contactos/ListaContactos/ListaContactos'

const ContactoScreen = () => {
  return (
    <div className='contacto_screen'>
      <HeaderContactos/>
      <ListaContactos contactos={MOOK_CONTACTOS}/>
    </div>
  )
}

export default ContactoScreen