import React from 'react';
import './Home.css'
import Nav from '../components/Nav';
import LogoImg from '../assets/MovieLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import BackgroundImg from '../assets/cinema.jpg';
import Search from '../components/Search';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';





const Home = () => {
    let navigate=useNavigate();
   
    return (
        <div>
        <Nav/>
        <div className='home'>
            <div className='homePage__img--container'>
                <img src={BackgroundImg} alt="" className='homePage__img' />
                
            </div>
            <div className='search'>
                <div className='search__title-wrapper'>
                    <h1 className='search__title'>Pick a movie!<br/> Any Movie! </h1>
                </div>
                
                    <Search />
   
                <div className='view__fullSite'>
                    <Link to="/home">
                        <Button className='fullSite__btn'>View Full Site</Button>
                    </Link>
                </div>
            </div>
        </div>
        
        </div>
            
    );
}

export default Home;
