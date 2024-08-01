import React from 'react'
import './ContactoScreen.css'
import HeaderContactos from '../../Components/Contactos/HeaderContactos/HeaderContactos'
import { ListaContactos } from '../../Components/Contactos/ListaContactos/ListaContactos'
import FooterContactos from '../../Components/Contactos/FooterContactos/FooterContactos'




const ContactoScreen = () => {

  
  return (
    <div className='contacto_screen'>
      <div>
      <HeaderContactos />
      <ListaContactos />
      </div>
      <FooterContactos />
      
    </div>
  )
  }
  /*contactos={obtenerContactos}*/
  
  export default ContactoScreen