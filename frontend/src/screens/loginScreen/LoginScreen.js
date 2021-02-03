import React from 'react';
import './loginScreen.scss'

const LoginScreen = ({history}) => {



    return (
        <div className='login-screen'>
            <form className='form'>
                <h2 className='form__heading'>Login</h2>
                <div className='form__input-area'>
                    <input className='form__input' type='email' placeholder='Email' />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>

                <div className='form__input-area'>
                    <input className='form__input' type='passowrd' placeholder='Email' />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__buttons'>
                    <button className='form__btn' onClick={(e)=>e.preventDefault()}>Submit</button>
                    <button className='form__btn' onClick={(e)=>{e.preventDefault(); history.push('/register')}}>Sign-Up</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen
