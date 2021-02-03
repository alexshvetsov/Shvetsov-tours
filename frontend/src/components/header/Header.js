import React, { useEffect } from 'react'
import SearchBox from '../searchbox/SearchBox'
import './header.scss'
import { NavLink } from 'react-router-dom';


const Header = () => {

    const myRef = React.createRef()
    var header = '';
   

    const myFunction = () => {
    
        if (window.pageYOffset > myRef.current.offsetTop) {
            console.log(myRef.current.classList.add('sticky'));
            header = 'sticky'
        } else {
            console.log('else');
            console.log(myRef.current.classList.remove('sticky'));
        }
    }
    window.onscroll = function () { myFunction() };



    useEffect(() => {
        console.log(myRef ? myRef.current : 'f');

    }, [myRef])



    return (
        <header className={`header ${ header}`} ref={myRef}>
            <img src='/images/logo.png' alt="trillo logo" className="logo" />
            <SearchBox />
            <nav className="user-nav">

                <div className="user-nav">
                    <i className='fas fa-user '></i>
                    <NavLink to="/login" className="user-nav__login" activeClassName="link__active">Sign In</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
