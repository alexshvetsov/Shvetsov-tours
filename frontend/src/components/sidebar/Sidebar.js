import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.scss'
import { useSelector } from 'react-redux';



const Sidebar = () => {

    const [activeLink,setActiveLink]=useState('home')

    const sidebar = useSelector(state => state.sidebar);
    const { expend } = sidebar



    return (
        <nav className="sidebar" > 
            <ul className={`side-nav ${expend ? 'expend-nav':''}`}>
                <li className={`side-nav__item ${activeLink==='home'?'side-nav__item--active':''}`}>
                    <NavLink to="/" className="side-nav__link" onClick={()=>setActiveLink('home')}>

                        <span>Hotel</span>
                    </NavLink> 
                </li>
                <li className={`side-nav__item ${activeLink==='home2'?'side-nav__item--active':''}`}>
                    <NavLink to="/hotels/followed" className="side-nav__link" onClick={()=>setActiveLink('home2')}>

                        <span>Followed</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink==='home3'?'side-nav__item--active':''}`}>
                    <NavLink to="/hotels/new" className="side-nav__link" onClick={()=>setActiveLink('home3')}>

                        <span>become a seller</span>
                    </NavLink>
                </li>
                <li className={`side-nav__item ${activeLink==='home4'?'side-nav__item--active':''}`}>
                    <NavLink to="/Contact" className="side-nav__link" onClick={()=>setActiveLink('home4')}>

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
