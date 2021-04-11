import React,{useState} from 'react'
import './modal.scss'

const Modal = ({ text, show, setShow }) => {
    const [transition, setTransition] = useState('')
    return (
        <div className='modal' onClick={() => {setShow(!show);  setTransition('')}}>
            <div className={`modal__body  ${transition} ${setTimeout(()=>(setTransition('transform-transition')),10)}`}>
                <div className="modal__text">{text}</div>
                <button className='modal__btn' onClick={() => {setShow(!show);  setTransition('')}}>Close</button>
            </div>
            <div className='modal__background'></div>

        </div>
    )
}

export default Modal