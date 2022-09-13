import React from 'react';
import './Nav.css'
import LogoImg from '../assets/MovieLogo.png'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    
    return (
        <div className='nav'>
            <div className='nav__img--container'>
                <Link to="/">
                    <img src={LogoImg} alt='' className='nav__img'/>
                </Link>
            </div>
            <div className='nav__link--list'>
                <ul className='nav__links'>
                    <Link to="/home">
                    <li className='nav__link--home link__hover-effect'>Home</li>
                    </Link>
                    <li className='nav__link link__hover-effect'>Movies</li>
                    <li className='nav__link link__hover-effect'>TV Shows</li>  
                </ul>
            </div>
        </div>
    );
}

export default Nav;
