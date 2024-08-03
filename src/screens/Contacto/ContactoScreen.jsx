import React from 'react'
import './ContactoScreen.css'
import { useState } from 'react'
import HeaderContactos from '../../Components/Contactos/HeaderContactos/HeaderContactos'
import { ListaContactos } from '../../Components/Contactos/ListaContactos/ListaContactos'
import FooterContactos from '../../Components/Contactos/FooterContactos/FooterContactos'
import PantallaChat from '../../Components/Contactos/PantallaChat/PantallaChat'



const ContactoScreen = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value);
  }
  return (
    <div className='contacto_screen'>
      <div className='header_lista'>
        <HeaderContactos search={search} onSearchChange={handleSearchChange} />
        <ListaContactos />
      </div>
      <div className='footer_app'>
        <FooterContactos />
      </div>
      <div>
        
      </div>
      <PantallaChat/>
    </div>
  )
}
/*contactos={obtenerContactos}*/

export default ContactoScreen