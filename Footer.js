import React from 'react';
import './Footer.css';
import LogoImg from '../assets/MovieLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            
                <div className='footer__img--wrapper'>
                    <img src={LogoImg} alt="" className='footer__img'/>
                </div>
                <div className='footer__text--wrapper'>
                    <p className='footer__text'>MovieScript is a Free Movies information 
                    site with zero ads. We let you gather more information about movies 
                    online without having to register or paying, 
                    with over 10000 movies and TV-Series. You 
                    cannot download or 
                    watch movies from MovieScript.</p>
                </div>
                <div className='footer__links--wrapper'>
                    <div className='footer__links--list'>
                        <ul className='footer__links'>
                            <Link to="/home">
                            <li className='footer__link'>Home</li>
                            </Link>
                            <li className='footer__link'><a href="#">Top</a></li>
                            <li className='footer__link no-cursor'>Contact</li>
                            <li className='footer__link no-cursor'>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            
        </footer>
    );
}

export default Footer;
