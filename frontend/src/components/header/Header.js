import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import SearchBox from '../searchbox/SearchBox'
import './header.scss'
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { EXPEND_SIDE_NAV } from '../../constants/sidebarConstants.js';


const Header = () => {

    const myRef = React.createRef()
    var header = '';

    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    const dispatch = useDispatch()


    const sidebar = useSelector(state => state.sidebar);
    const { expend } = sidebar

    const toggleExpend = () => {
        dispatch({ type: EXPEND_SIDE_NAV, payload: !expend })
    }

    const myFunction = () => {

        if (window.pageYOffset > myRef.current.offsetTop) {
            header = 'sticky'
        }
    }
    window.onscroll = function () { myFunction() };



    useEffect(() => {
        // console.log(myRef ? myRef.current : 'f');

    }, [myRef])


    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <header className={`header ${header}`} ref={myRef}>
            <div className='left-side'>
                <img src='/images/stours.jpg' alt="trillo logo" className="logo" />
                <button className="menu-toggle" onClick={toggleExpend}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </button>
            </div>

            <Route render={({ history }) => <SearchBox history={history} />} />
            <nav className="user-nav">

                <div className="user-nav__sign-in">
                    <i className='fas fa-user '></i>
                    {userInfo ? <p>{userInfo.name}</p> : <NavLink to="/login" className="user-nav__login" activeClassName="link__active">Sign In</NavLink>}
                </div>
                {userInfo && <button className='user-nav__logout' onClick={(e) => logoutHandler(e)}>Logout</button>}
            </nav>
        </header>
    )
}

export default Header
