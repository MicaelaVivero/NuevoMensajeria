import React from 'react'
import Contacto from '../Contacto/Contacto'
import './ListaContactos.css'

export const ListaContactos = ({contactos}) => {
return (
    <div className='lista_contacto'>
        {contactos.map((contacto, index) => 
            <Contacto contactochat={contacto} key={index}/>
        )}
    </div>
        )
    }

