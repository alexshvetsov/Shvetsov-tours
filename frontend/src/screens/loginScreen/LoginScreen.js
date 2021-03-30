import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions.js';

import './loginScreen.scss'

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { error, userInfo } = userLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    return (
        <div className='login-screen'>
            <form className='login-screen__form' onSubmit={submitHandler}>
                <h2 className='login-screen__form-heading'>Login</h2>
                {error && <p className='login-screen__error'>* Email or Password are incorrect</p>}
                <div className='login-screen__form-input-area'>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='login-screen__form-input' type='email' placeholder='Email' />
                    <span className='login-screen__form-icon-span'>
                        <i className='fas fa-user login-screen__form-icon'></i>
                    </span>
                </div>

                <div className='login-screen__form-input-area'>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='login-screen__form-input' type='password' placeholder='Password' />
                    <span className='login-screen__form-icon-span'>
                        <i className='fas fa-lock login-screen__form-icon'></i>
                    </span>
                </div>
                <div className='login-screen__form-buttons'>
                    <button className='login-screen__form-btn' onClick={submitHandler}>Submit</button>
                    <button className='login-screen__form-btn' onClick={(e) => { e.preventDefault(); history.push('/register') }}>Sign-Up</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen
