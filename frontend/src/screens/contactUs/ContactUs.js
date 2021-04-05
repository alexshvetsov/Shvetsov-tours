import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createHotelAction } from '../../actions/whatsappActions.js'
import './contactUs.scss'
import Modal from '../../components/modal/Modal.js';


//פונקציונליות להראות אררורז עם סטהראהאררור ואז אם זה ריק זה מראה
const ContactUs = () => {

    const [showModal, setShowModal] = useState(false)
    const [showErrors, setShowErrors] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();

    const postMessage = async (e) => {
        e.preventDefault();
        if(name.length===0 ||email.length===0 ||message.length===0){
            setShowErrors(true)
            return
        }
        dispatch(createHotelAction({name,email,message}))
        setShowModal(true)
        setShowErrors(false)

        setTimeout(() => { setShowModal(false) }, 3000)
    };


    return (
        <div className='contact-us'>
            {(showModal) && <Modal show={showModal}
             setShow={setShowModal} text='message Submitted' />}
            <form className='contact-us__form'>
                <h1 className='contact-us__heading'>
                Contact Us
                </h1> 
                <div className="contact-us__input-area">
                <label htmlFor="name" className="contact-us__label">Name :{(showErrors && name.length===0) && <p className="contact-us__error">&nbsp; *</p>} </label>
                <input placeholder='write your name here' type="text" 
                name='name' className="contact-us__input" 
                onChange={(e) => setName(e.target.value)} value={name}
                required/>
                </div>
                <div className="contact-us__input-area">
                <label htmlFor="email" className="contact-us__label">Email :{(showErrors && name.length===0) && <p className="contact-us__error">&nbsp; *</p>}</label>
                <input placeholder='Let us know how to keep in touch'
                 type="email" name='email' className="contact-us__input" 
                 onChange={(e) => setEmail(e.target.value)} value={email}
                 required/>
                </div>
                <div className="contact-us__input-area">
                <label htmlFor="message" className="contact-us__label">Message :{(showErrors && name.length===0) && <p className="contact-us__error">&nbsp; *</p>}</label>
                <input placeholder='What would you like to tell us' 
                type="text" name='message' className="contact-us__input"
                onChange={(e) => setMessage(e.target.value)} value={message}
                required/>
                </div>
                <div className="contact-us__btn-area">
                <button  onClick={postMessage}
                className='contact-us__button'>
                    Send Message
                </button>
                    </div>
                    <div className="contact-us__deatails">
            <i className="fas fa-envelope"></i> 
             <p> Contact me at: alexsh14@gmail.com</p>
            </div>
            </form>
          
            

        </div>
    )
}

export default ContactUs
