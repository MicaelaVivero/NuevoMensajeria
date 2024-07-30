import React, { useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'
import './ChatScreen.css'


export const ChatScreen = ({contactId}) => {
const [mensajeAnterior, mensajeChatNuevo] = useState([])

const handleNuevoMsj = (e) => {

    const nuevoMensaje = {
        author: 'yo',
        text: textoMensaje,
        estado: 'entregado' ,
        day: 'hoy', 
        hour: new Date().toLocaleTimeString(),
        id: mensajeAnterior.length + 1
    }

    mensajeChatNuevo ([...mensajeAnterior, nuevoMensaje])
    }



return (
    <div className='chat'>
        <ChatHeaderInfo />
        <ListaMensajes  personaId = {contactId} mensajesChat={mensajeAnterior}/>
        <MensajeForm handleNuevoMensaje={handleNuevoMsj} />
        </div>
)
}

/* <ListaMensajes  mensajesChat={mensajeAnterior}/>*/
