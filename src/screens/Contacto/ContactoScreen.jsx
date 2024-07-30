import React from 'react'
import './ContactoScreen.css'
import HeaderContactos from '../../Components/Contactos/HeaderContactos/HeaderContactos'
import { ListaContactos } from '../../Components/Contactos/ListaContactos/ListaContactos'




const ContactoScreen = () => {

  
return (
  <div className='contacto_screen'>
    <HeaderContactos />
    <ListaContactos />
  </div>
)
}
/*contactos={obtenerContactos}*/

export default ContactoScreen