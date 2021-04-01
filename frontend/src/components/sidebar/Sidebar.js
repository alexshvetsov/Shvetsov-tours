import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.scss'
import { useSelector, useDispatch } from 'react-redux';



const Sidebar = ({ history }) => {
    const dispatch = useDispatch()
    const [activeLink, setActiveLink] = useState('home')

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin

    const sidebar = useSelector(state => state.sidebar);
    const { expend } = sidebar

    //useEffect that changes the active sidebar dependes on the url
    useEffect(() => {

        switch (history.location.pathname) {
            case '/hotels/new':
                setActiveLink('home3')
                break;
            case '/hotels/followed':
                setActiveLink('home2')

                break;
            case '/Contact':
                setActiveLink('home4')
                break;
            default:
                setActiveLink('home')

                break;
        }

    }, [dispatch, history])
    return (
        <nav className="sidebar" >
            <ul className={`side-nav ${expend ? 'expend-nav' : ''}`}>
                <li className={`side-nav__item ${activeLink === 'home' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/" className="side-nav__link" onClick={() => setActiveLink('home')}>

                        <span>Hotel</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink === 'home2' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/hotels/followed" className="side-nav__link" onClick={() => {
                        if (userInfo) { setActiveLink('home2') }
                        else { setActiveLink('home') }
                    }}>

                        <span>Followed</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink === 'home3' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/hotels/new" className="side-nav__link" onClick={() => setActiveLink('home3')}>

                        <span>become a seller</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink === 'home4' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/Contact" className="side-nav__link" onClick={() => setActiveLink('home4')}>

                        <span>Contact Me</span>
                    </NavLink>
                </li>
            </ul>

            <div className="legal">
                &copy; 2017 by trillo. All rights reserved.
                    </div>
        </nav>

    )
}

export default Sidebar
