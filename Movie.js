import React,{useState,useEffect} from 'react';
import './Movie.css';
import { useParams } from "react-router";

import Footer from '../components/Footer';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Search from '../components/Search';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";




const Movie = () => {
    const {imdbId}=useParams();
    const [movie, setMovie]=useState();
    const [pageNum,setPageNum]=useState();
    const [loading, setLoading] =useState();

    const [movies, setMovies]=useState();
    const name = localStorage.getItem("name");
    


    async function getMovie(){
        const Movie = await fetch(`http://www.omdbapi.com/?apikey=4124ddf1&i=${imdbId}`);
        const MovieData = await Movie.json();
        setMovie(MovieData)
        
        
    }
    async function getMovies(){
        const Movies = await fetch(`http://www.omdbapi.com/?apikey=4124ddf1&s=${name}`);
        const MoviesData = await Movies.json();
        const moviesArr=MoviesData.Search;
        setMovies(moviesArr.slice(0,7))
        
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            getMovie();
            getMovies();
        },100)
        
    },[])
    const selectedMovie=movie;
    const suggestedMovies=movies;
   
    
    return (
        <div>
            <div id="selected__movie--wrapper">
                <div className='selected__movie'>
                    {selectedMovie? <>
                        <div className='movie__card'>
                            <Link to="/home">
                                <ArrowBackIcon className='arrow__back'/>
                            </Link>
                            <div className='movie'>
                            <div className="movie__selected">
                                <figure className="movie__selected--figure">
                                    <img src={selectedMovie.Poster}
                                    alt="" className="movie__selected--img" />
                                </figure>
                                <div className="movie__selected--description">
                                    <h2 className="movie__selected--title">
                                    {selectedMovie.Title}
                                    </h2>
                                    <div className="movie__sumary">
                                        <p className="movie__summary--para">
                                            {selectedMovie.Plot}
                                            <br/>
                                            <br/>
                                            Runtime:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selectedMovie.Runtime}
                                        </p>
                                        <br/>
                                        <p className="movie__summary--para">
                                        Director:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {selectedMovie.Director}
                                        <br/>
                                        Actors: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {selectedMovie.Actors}
                                        <br/>
                                        Genre: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {selectedMovie.Genre}
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div>        
                        <div className='suggested'>
                                <div className='suggest__movie--title__wrapper'>
                                    <h2 className='suggest__movie--title'>You May Also Like</h2>
                                </div>
                            <div className='suggested__movies'>
                                <div className='suggested__movie'>    
                                    {suggestedMovies ? <>{suggestedMovies.filter(movie => movie.imdbID !== imdbId).map((movie)=>(
                                        <a href={`/home/${movie.imdbID}`}>
                                        <figure className='suggested__movie--img__wrapper' >
                                            <img src={movie.Poster} alt="" className='suggested__movie--img' />
                                        </figure>
                                        </a>
                                    ))}</> : <></>}                                     
                                </div>
                            </div>    
                        </div> 
                    </div>
                    </>:
                    <>
                <div class="center">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
                </>
                }     
                </div>      
            </div> 
            <Footer/>
        </div>  
    );
}

export default Movie;
    // fix:

    // 1. page numbering
    // 2. loading states between pages