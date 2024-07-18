

import React from 'react'
import './mensaje.css'


export const Mensaje = ({informacion}) => {
  const { author, text, estado, day, hour } = informacion
  return (
    <div className={author} key={id}>
        <div className="burbuja">
            <div className="author-name">
                <span className="author fonts">{author}</span>
            </div>
            <div className="message-box">
                <span className="messageText fonts">{text}</span>
            </div>
            <div className="date-hour-state">
                <div className="date-hour">
                    <span className="date fonts">{day}</span>
                    <span className="hour fonts">{hour}</span>
                </div>
                <div className={author + " state-box"} >
                    <span>{validacionVisto(estado)}</span>
                </div>
            </div>
        </div>
    </div>
)
}

const validacionVisto = (estado) => {
if(estado === 'visto'){
    const state = <i className="bi bi-check2-all state"></i>
    return state
}
else if(estado === 'no recibido'){
    const state = <i className="bi bi-check2 state-negative"></i>
    return state
}
}

