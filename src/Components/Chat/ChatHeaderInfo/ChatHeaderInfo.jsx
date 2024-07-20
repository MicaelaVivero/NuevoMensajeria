import React from 'react'
import './ChatHeaderInfo.css'

export const ChatHeaderInfo = () => {
  return (
    <div className='info_header'>
        <div className='info_contacto'>
            <div className='arrow'><i className="bi bi-arrow-left"></i></div>
            <div className='img_contacto'><img src="./assets/chica.jpg" alt="" /></div>
            <div className='contacto'>Pepe</div>
        </div>
        <div className='secundary_icons'>
            <div><i className="bi bi-camera-video"></i></div>
            <div><i className="bi bi-telephone"></i></div>
            <div><i className="bi bi-three-dots-vertical"></i></div>
        </div>
    </div>
  )
}
