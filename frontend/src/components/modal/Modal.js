import React from 'react'
import './modal.scss'

const Modal = ({text,show,setShow}) => {
    return (
        <div className='modal' onClick={()=>setShow(!show)}>
            <div className='modal__text'>{text}</div>
            <div className='modal__background'></div>
        </div>
    )
}

export default Modal