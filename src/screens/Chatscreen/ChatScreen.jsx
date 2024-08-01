import React, { useEffect, useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'
import './ChatScreen.css'
import { obtenerContactos } from '../../Fetching/FetchContactos'



export const ChatScreen = ({ }) => {

    const [mensajeAnterior, mensajeChatNuevo] = useState('')
    const [contactos, setContactos] = useState([])

    useEffect(() => {
        obtenerContactos()
            .then((contactos) => {
                setContactos(contactos)

                const contactoMensaje = contactos.mensajes
                mensajeChatNuevo(contactoMensaje)

            })
    })
    const handleNuevoMsj = (textoMensaje) => {

        mensajeChatNuevo (
            [...mensajeAnterior, {
                author: 'yo',
                text: textoMensaje,
                estado: 'entregado',
                day: 'hoy',
                hour: new Date().toLocaleTimeString(),
                id: mensajeAnterior.length + 1
            }]
        )
        }

    




    return (
        <div className='chat'>
            <ChatHeaderInfo />
            <ListaMensajes mensajesChat={mensajeAnterior} />
            <MensajeForm handleNuevoMensaje={handleNuevoMsj} />
        </div>
    )
}

/* <ListaMensajes  mensajesChat={mensajeAnterior}/>*/
