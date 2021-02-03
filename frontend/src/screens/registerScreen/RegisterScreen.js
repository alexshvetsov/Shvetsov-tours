import React from 'react'
import './registerScreen.scss'

const RegisterScreen = () => {



    return (
        <div className='register-screen'> 
            <form className='form'>
                <h2 className='form__heading'>Sigh Up</h2>
                <div className='form__input-area'>
                    <input className='form__input' type='text' placeholder='Name' />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>
                <div className='form__input-area'>
                    <input className='form__input' type='email' placeholder='Email' />
                    <span className='form__icon-span'>
                        <i className='fas fa-user form__icon'></i>
                    </span>
                </div>

                <div className='form__input-area'>
                    <input className='form__input' type='passowrd' placeholder='Passowrd' />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__input-area'>
                    <input className='form__input' type='passowrd' placeholder='Confirm Passowrd' />
                    <span className='form__icon-span'>
                        <i className='fas fa-lock form__icon'></i>
                    </span>
                </div>
                <div className='form__buttons'>
                    <button className='form__btn' onClick={(e)=>e.preventDefault()}>Sign-Up</button>
                    <button className='btn form__btn' onClick={(e)=>e.preventDefault()}>
                    <span className="btn__visable">Guset</span>
                       <span className="btn__invisible">continue</span>
                       </button>
                </div>
            </form>
            
            
        </div>
    )
}

export default RegisterScreen
