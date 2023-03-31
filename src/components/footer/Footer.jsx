import React from 'react'
import './footer.css'
import {TiSocialLinkedin} from 'react-icons/ti'

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>NICOLAS SANCHES VARELA</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='www.linkedin.com/in/nsanchesvarela'><TiSocialLinkedin /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; NsanV. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
