import React, { useEffect, useContext } from 'react'
import {TMDB_API_KEY} from "../config"
import { MovieContext } from './MovieContext.jsx'

const MovieFinder = () => {

  const {movies, setMovies} = useContext(MovieContext)
  const TMDB_BASE_URL =  "https://api.themoviedb.org/3/trending/movie/week"
 
  const getMovies = async() => {
     try{
      const response = await fetch(`${TMDB_BASE_URL}?api_key=${TMDB_API_KEY}`)

      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
     }

     catch(error){
       console.error("Error fetching movies:", error)
     }
  }
   
  useEffect(()=>{
    getMovies()
 },[])
  
  
   
 
  
  return (
    <div>
    <div className='body'>
      <h1>🔥 Currently trending.....</h1>
      <div className='movie-grid'>
        {movies?.map((movie)=>(
          <div key={movie.id}className='movie'>
            <div><img className='movie-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/></div>
             <h2>{movie.title}</h2> 
             {movie.adult === false? 
             <div className='triangle'></div> : ""}
             <p>Rating: {Math.round(movie.vote_average*10)/10}</p>
          </div>
         
        ))}
      </div>
      </div>
      </div>
  )
}

export default MovieFinder