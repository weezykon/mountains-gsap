import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <div className='container'>
                <div className='nav-columns'>
                    <div className='nav-column'>
                        <div className='nav-label'>Menu</div>
                        <ul className='nav-links'>
                            <li>
                                <NavLink to='/cases'>
                                    Cases
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/approach'>
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/services'>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-column'>
                        <div className='nav-label'>Contact</div>
                        <div className='nav-infos'>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Email</li>
                                <li>
                                    <NavLink to='/contact'>
                                        Get in touch with Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/audit'>
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Head Quarters</li>
                                <li>Route View</li>
                                <li>234 VGC, Lagos Island</li>
                                <li>Nigeria</li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Phone</li>
                                <li>234-80080090090</li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

