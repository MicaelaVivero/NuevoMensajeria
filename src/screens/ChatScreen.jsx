import React, { useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
export const ChatScreen = () => {
const MOOK_MENSAJES = [
    {
        author: 'yo',
        text: 'Hola mi bro',
        estado: 'visto' ,
        day: 'hoy', 
        hour: '13:15',
        id: '1'
    },
    {
        author: 'pepe',
        text: 'Hola que tal',
        estado: 'visto' ,
        day: 'hoy', 
        hour: '13:16',
        id: '2'
    },
    {
        author: 'yo',
        text: 'todo piolaaaa',
        estado: 'visto' ,
        day: 'hoy', 
        hour: '13:17',
        id: '3'
    }
]

const [mensajeAnterior, mensajeChatNuevo] = useState(MOOK_MENSAJES)

const handleNuevoMsj = (textoMensaje) => {
    
    mensajeChatNuevo ([...mensajeAnterior, { 
        author: 'yo',
        text: textoMensaje,
        estado: 'entregado' ,
        day: 'hoy', 
        hour: new Date().toLocaleTimeString(),
        id: mensajeAnterior.length + 1
      }]);

}


return (
    <>
        <ChatHeaderInfo />
        <ListaMensajes mensajesChat={mensajeAnterior}/>
        <MensajeForm handleNuevoMensaje={handleNuevoMsj} />
    </>
)
}
