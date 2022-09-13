import React from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Search = () => {
    const [searchId, setSearchId]=useState();
    let navigate=useNavigate();

    function onSearch(){
        onSearchChange(searchId)
    }

    function onSearchChange(event){
        event.preventDefault()
        const name=event.target.value
        localStorage.setItem("name",name)

    }


    return (
    <form className='search__input--wrapper'>
        <div className='search__input'>
            <Link to="/home">
                <SearchIcon className="search__input--icon" onClick={() => onSearch()}/>
            </Link>
            <input className='input' onChange={(event)=> setSearchId(event)}
                onKeyPress={(event)=>{
                    if (event.key==='Enter'){
                        onSearch();
                        navigate("/home")              
                    }
            }}></input>
        </div>
    </form>       
                
        
    );
}

export default Search;
