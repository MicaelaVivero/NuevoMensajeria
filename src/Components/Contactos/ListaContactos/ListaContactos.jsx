import React, { useEffect, useState } from 'react'
import Contacto from '../Contacto/Contacto'
import './ListaContactos.css'
import { obtenerContactos } from '../../../Fetching/FetchContactos'


export const ListaContactos = () => {
    const [contactos, setContactos] = useState([])

    useEffect(
        () => {
            obtenerContactos()
                .then(
                    (contactos) => {
                        setContactos(contactos)

                    })
    .catch((error) => {
            console.error('Error al obtener contactos:', error);
        })
    }, [])


    return (
        <div className='lista_contacto'>
            {contactos.map((contacto) => (
                <Contacto contactochat={contacto} key={contacto.id} />
            ))}
        </div>
    )
}

