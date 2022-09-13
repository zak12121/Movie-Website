import Home from './Pages/Home.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav.js';
import Results from './Pages/Results.js';
import Footer from './components/Footer.js';
import Movie from './Pages/Movie.js';

function App() {
  
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Results/>}/>
        <Route path="home/:imdbId" element ={<Movie/> }/>
      </Routes>
      
      
    </Router>

  );
}

export default App;
