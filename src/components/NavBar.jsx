import React, { useState } from 'react'
import '../styles/NavBar.css'
import Logo from "../assets/svg/logo.svg"
import { Link } from 'react-router-dom'
import { BiCart, BiHeart, BiMenu, BiSearch, BiUser } from 'react-icons/bi'
import { FaHamburger } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import VisitorCount from './VisitorCount'

const NavBar = () => {
    const [dropDown, setDropDown] = useState(false)
  return (
    <>
        <nav className="nav-section">
            <div className="nav-logo">
                <VisitorCount />
                <img src={Logo} alt="logo"/>
                <p>Snowell Electric</p>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/shop-location'>Shop Location</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="nav-other">
                <BiHeart size='25'/>
                <BiCart size='25'/>
                <BiUser size='25'/>
                {
                    dropDown ?
                    <div>
                        <CgClose size='25' className='dropdown-trigger' onClick={()=> setDropDown(!dropDown)}/>
                        <div className='dropdown-menu'>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/shop-location'>Shop Location</Link></li>
                                <li><Link to='/contact'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <BiMenu size='25' className='dropdown-trigger' onClick={()=> setDropDown(!dropDown)}/>
                }
                
                
            </div>
        </nav>
    </>
  )
}

export default NavBar 