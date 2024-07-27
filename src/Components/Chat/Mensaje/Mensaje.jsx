import React from 'react'
import { useParams } from "react-router-dom";
import { MOOK_CONTACTOS } from '../../../data';
import './mensaje.css'

export const Mensaje = ({mensaje}) => {
    const { author, text, estado, day, hour, id } = mensaje 
    const { contactoID } = useParams();
  const contacto = MOOK_CONTACTOS.find((contacto) => contacto.id === parseInt(contactoID));
    return (
        <div className={`mensaje ${mensaje.autor}`} key={id}>
            <div className='burbuja'>
                <div className='info_persona'>
                    <div className='contacto_persona'>{mensaje.persona}</div>
                    <div className='texto'>{mensaje.text}</div>
                </div>
                    <div className='datos_mensaje'>
                        <div className="day-hour">
                            <div className='day fonts'>{mensaje.day}</div>
                            <div className='hour fonts'>{mensaje.hour}</div>
                        </div>
                        <div className={author + "state-box"}>
                            <span>{ValidacionVisto(estado)}</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

const ValidacionVisto = (estado) => {
    if(estado === 'visto'){
        const state = <i className="bi bi-check2-all state"></i>
        return state
    }
    else if (estado === 'no recibido'){
        const state = <i className="bi bi-check2 state-negative"></i>
        return state
    }
}
