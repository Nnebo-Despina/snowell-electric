import React from 'react'
import '../styles/Footer.css'
import Logo from '../assets/svg/Logo.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <section className="footer-section">
            <div className="footer-upside">
                <img src={Logo} alt="" />
                <div className="footer-socials">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/shop-location'>Shop Location</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul> 
                </div>
            </div>
            <div className="footer-downside">
                <p>&copy; 2025 Aptech Students Designs - All Rights Reserved</p>
            </div>
        </section>
    </>
  )
}

export default Footer