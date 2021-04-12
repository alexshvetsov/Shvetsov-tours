import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.scss'
import { useSelector, useDispatch } from 'react-redux';



const Sidebar = ({ history }) => {
    const dispatch = useDispatch()
    const [activeLink, setActiveLink] = useState('')

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin

    const sidebar = useSelector(state => state.sidebar);
    const { expend } = sidebar

    //useEffect that changes the active sidebar dependes on the url
    useEffect(() => {

        switch (history.location.pathname) {
            case '/hotels/new':
                setActiveLink('new')
                break;
            case '/hotels/followed':
                if (userInfo) {
                    setActiveLink('followed')
                }

                break;
            case '/Contact':
                setActiveLink('contact')
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

                        <span>Hotels</span>
                    </NavLink>
                </li>
            {  userInfo &&  <li className={`side-nav__item ${activeLink === 'followed' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/hotels/followed" className="side-nav__link" onClick={() => {
                        if (userInfo) { setActiveLink('followed') }
                        else { setActiveLink('home') }
                    }}>

                        <span>Followed</span>
                    </NavLink>
                </li>}
                <li className={`side-nav__item ${activeLink === 'new' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/hotels/new" className="side-nav__link" onClick={() => setActiveLink('new')}>

                        <span>become a seller</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink === 'contact' ? 'side-nav__item--active' : ''}`}>
                    <NavLink to="/Contact" className="side-nav__link" onClick={() => setActiveLink('contact')}>

                        <span>Contact Me</span>
                    </NavLink>
                </li>
            </ul>

            <div className="legal">
                <i className="far fa-copyright"></i>  {history.location.pathname.includes('hotel/') ? `All rights reserved to Trillo 2017 and Alex Shvetsov` : ' All rights reserved to Alex Shvetsov'}
            </div>
        </nav>

    )
}

export default Sidebar
