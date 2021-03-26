import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createHotelAction } from '../../actions/whatsappActions.js'
import './contactUs.scss'
import Modal from '../../components/modal/Modal.js';



const ContactUs = () => {

    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();

    const postMessage = async (e) => {
        e.preventDefault();
        dispatch(createHotelAction(message))
        setShowModal(true)
        setTimeout(() => { setShowModal(false) }, 3000)
    };


    return (
        <div>
            {(showModal) && <Modal show={showModal} setShow={setShowModal} text='message Submitted' />}
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
            <button onClick={postMessage}>Send</button>
        </div>
    )
}

export default ContactUs
