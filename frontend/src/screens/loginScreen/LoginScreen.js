import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions.js';

import './loginScreen.scss'

const LoginScreen = ({  history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {  userInfo } = userLogin;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    }, [history, userInfo])

    return (
        <div className='login-screen'> 
            <form className='form' onSubmit={submitHandler}> 
                <h2 className='form__heading'>Login</h2>
                <div className='form__input-area'>
                    <input onChange={(e)=>setEmail(e.target.value)}  value={email} className='form__input' type='email' placeholder='Email' />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>

                <div className='form__input-area'>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='form__input' type='passowrd' placeholder='Email' />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__buttons'>
                    <button className='form__btn' onClick={submitHandler}>Submit</button>
                    <button className='form__btn' onClick={(e)=>{e.preventDefault(); history.push('/register')}}>Sign-Up</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen
