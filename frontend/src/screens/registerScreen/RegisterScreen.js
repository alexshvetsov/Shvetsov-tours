import React, { useState, useEffect } from 'react';
import { register } from '../../actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux';

import './registerScreen.scss'

const RegisterScreen = ({ history }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [coniformPassword, setConiformPassword] = useState('');
    const [passowrdError, setPasswordError] = useState(false);

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const {  error,userInfo } = userRegister;


    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== coniformPassword) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            dispatch(register(name, email, password))
        }
    };

    const submitHandlerAsGuest = (e) => {
        e.preventDefault();
        const randomGuestNumber =(Math.random() * 100) + 1
           setTimeout(()=> dispatch(register('guest', randomGuestNumber+'guest@gmail.com', 111)),1000)
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }

    }, [history, userInfo])




    return (
        <div className='register-screen'>
            <form className='register-screen__form'>
                <h2 className='register-screen__form-heading'>Sigh Up</h2>
                {error ==='exists'?
                <p className='register-screen__error'>* Email already taken</p>:
                 error? <p className='register-screen__error'>* All fileds are required</p>:
                 passowrdError? <p className='register-screen__error'>* Password does not match</p>:null}
            
                <div className='register-screen__form-input-area'>
                    <input className='register-screen__form-input' type='text' placeholder='Name'
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <span className='register-screen__form-icon-span'>
                        <i className='fas fa-user register-screen__form-icon'></i>
                    </span>
                </div>
                <div className='register-screen__form-input-area'>
                    <input className='register-screen__form-input' type='email' placeholder='Email'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className='register-screen__form-icon-span'>
                        <i className='fas fa-envelope register-screen__form-icon'></i>
                    </span>
                </div>

                <div className='register-screen__form-input-area'>
                    <input className='register-screen__form-input' type='password' placeholder='Passowrd'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className='register-screen__form-icon-span'>
                        <i className='fas fa-lock register-screen__form-icon'></i>
                    </span>
                </div>
                <div className='register-screen__form-input-area'>
                    <input className='register-screen__form-input' type='password' placeholder='Confirm Passowrd'
                        value={coniformPassword} onChange={(e) => setConiformPassword(e.target.value)} />
                    <span className='register-screen__form-icon-span'>
                        <i className='fas fa-lock register-screen__form-icon'></i>
                    </span>
                </div>
                <div className='register-screen__form-buttons'>
                    <button className='register-screen__form-btn' onClick={submitHandler}>Sign-Up</button>
                    <button className='register-screen__btn register-screen__form-btn' onClick={submitHandlerAsGuest}>
                        <span className="register-screen__btn-visable">Guest</span>
                        <span className="register-screen__btn-invisible">continue</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
