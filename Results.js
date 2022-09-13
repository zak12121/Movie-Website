import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import './Results.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Search from '../components/Search';
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";
import Movie from './Movie';
import Nav from '../components/Nav';


const Results = () => {
    const [movies, setMovies]=useState();
    const [pageNum,setPageNum]=useState(1);
    const [loading, setLoading] =useState();
    let navigate=useNavigate();
    const name = localStorage.getItem("name")
  
    
    

    function onSearch(event){
        setMovies()
        
        event.preventDefault();
        console.log(event.target.value)
        
        setTimeout(()=>{
            getMovies(pageNum)

        }, 100)
        

    }
    function nextPage(){
        setMovies()
        
        setTimeout(()=>{
            getMovies(pageNum+1)
            setPageNum(pageNum+1)

        }, 100)
        

    }
    function previousPage(event){
        setMovies()
        
        event.preventDefault();
        console.log(event.target.value)
        
        setTimeout(()=>{
            if (pageNum-1  < 1){
                setPageNum(1)
                getMovies(pageNum)
            } else {
                getMovies(pageNum-1)
                setPageNum(pageNum-1)

            }
            

        }, 100)
        

    }

    async function getMovies(number){
        setMovies();
        let val =number;
        setLoading(false)
        
        if (!number || number < 0){
            val =1;   
        }
        const Movies = await fetch(`http://www.omdbapi.com/?apikey=4124ddf1&s=${name}&page=${val}`);
        const MoviesData = await Movies.json();
        const outMovies=MoviesData.Search;
        localStorage.setItem("id", JSON.stringify(MoviesData.Search));

        
        setMovies(outMovies)
        setLoading(false)
        
    }

    function filterMovies(event){
        const filtername = event.target.value;
 
        const Data = JSON.parse(localStorage.getItem("id"));
        
        
        if (filtername==='Year_Asc') {
            for (let i=0; i< Data.length; ++i ) {
            
            Data.sort((a,b) => a.Year - b.Year);
                
            
            }
        } else if (filtername==='Year_Desc') {

            for (let i=0; i< Data.length; ++i ) {
            
            Data.sort((a,b) => b.Year - a.Year);     
            
            }
            

        }
        setMovies(Data)

    }
    

    useEffect(()=>{
        setTimeout(()=>{
            getMovies();
        },100)
        
    },[])
    

    return (
        <div>
            <Nav/>
            <Search/>
            <div className="movies__header">
                  <select name="" id="filter" onChange={(event)=>filterMovies(event)}>
                    <option value="" disabled selected>Sort</option>
                    <option value="Year_Asc">Year (Ascending)</option>
                    <option value="Year_Desc">Year (Descending)</option>
                  </select>
            </div>
        
            <div className='results'>
                    
            {!movies ? new Array(10).fill(0).map((_,index)=>(
                <>
            <div className='skeleton' key ={index}>
                <div className="result__wrapper--skeleton"></div>
            </div>
            </>
            )) : <>{movies.map((movie)=>(
                
                <div className='result__wrapper result__info' >
                    
                    <div className='result' key={movie.imdbID}>
                        <div className='result__poster--wrapper'>
                            <Link to={`${movie.imdbID}`}>
                            <div className='play__btn--wrapper'>
                                <PlayCircleOutlineIcon className='play__btn'/>
                            </div>
                            
                                <img src={movie.Poster} 
                                alt='' className='result__poster--img'/>
                            </Link>
                        </div>
                        <div className='result__poster--info'>
                            <p className='title'>{movie.Title}</p>
                            <div className='details'>
                                <p className='year'>{movie.Year}</p>
                                <span className='type__box'>{movie.Type}</span>
                            </div>
                        </div>
                    </div>
                </div>
                

                ))}</>
            }
                
            
            </div>
            <div className='pages'>
                <div className='page__btn--wrapper'>
                    <button onClick={previousPage} className='page__btn'>Previous</button>
                </div>
                <p className='page__text'>page</p>
                <input type="number" 
                value={pageNum} 
                className='pages__input'
                min={1}
                placeholder={pageNum}
                onChange={(event)=> setPageNum(event.target.value)}
                onKeyPress={(event)=>{
                    if (event.key==='Enter'){
                        onSearch(event);                        
                    }
                }}
                />
                <div className='page__btn--wrapper'>
                    <button onClick={nextPage} className='page__btn'>Next</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Results;
