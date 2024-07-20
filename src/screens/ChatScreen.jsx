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

const [mensajeAnterior, mensajeNuevo] = useState('MOOK_MENSAJES')

const handleNuevoMensaje = (nuevoMensaje) => {
    e.preventDefault()
    setMensajes([...mensajes, { 
        id: mensajes.length + 1, 
        texto: nuevoMsj, 
        autor: "yo", 
        estado: "entregado", 
        dia: "hoy", 
        hora: new Date().toLocaleTimeString() 
      }]);

    mensajeNuevo ([...mensajeAnterior, nuevoMensaje])

}


return (
    <>
        <ChatHeaderInfo />
        <ListaMensajes mensajesChat={MOOK_MENSAJES}/>
        <MensajeForm handleNuevoMensajeNew={handleNuevoMensaje} />
    </>
)
}
