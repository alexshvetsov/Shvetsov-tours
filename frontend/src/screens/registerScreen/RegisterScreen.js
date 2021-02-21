import React, { useState, useEffect } from 'react';
import { register } from '../../actions/userActions.js';
import { useDispatch, useSelector } from 'react-redux';

import './registerScreen.scss'

const RegisterScreen = ({ history }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [coniformPassword, setConiformPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const { error, loading, userInfo } = userRegister;


    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== coniformPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    };

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
      
    }, [history, userInfo])




    return (
        <div className='register-screen'>
            <form className='form' >
                <h2 className='form__heading'>Sigh Up</h2>
                <div className='form__input-area'>
                    <input className='form__input' type='text' placeholder='Name'
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>
                <div className='form__input-area'>
                    <input className='form__input' type='email' placeholder='Email'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>

                <div className='form__input-area'>
                    <input className='form__input' type='passowrd' placeholder='Passowrd'
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__input-area'>
                    <input className='form__input' type='passowrd' placeholder='Confirm Passowrd'
                        value={coniformPassword} onChange={(e) => setConiformPassword(e.target.value)} />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__buttons'>
                    <button className='form__btn' onClick={submitHandler}>Sign-Up</button>
                    <button className='btn form__btn' onClick={(e) => e.preventDefault()}>
                        <span className="btn__visable">Guset</span>
                        <span className="btn__invisible">continue</span>
                    </button>
                </div>
            </form>


        </div>
    )
}

export default RegisterScreen
