import React, {createContext, useState} from "react";
import {TMDB_API_KEY} from "../config"

const SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie"

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

   const searchMovies = async() =>{
  
  if(!search) return 
  
  try { 
    
    const response = await fetch(`${SEARCH_API_URL}?api_key=${TMDB_API_KEY}&query=${search}`)

  const data = await response.json()

  setMovies(data.results)
  console.log(data.results)
}

catch(error){
  console.error("Error fetching data:", error)
}
}

return (
  <MovieContext.Provider value = {{movies, setMovies, search, setSearch, searchMovies}}>
    {children}
  </MovieContext.Provider>
)
}

export default MovieProvider