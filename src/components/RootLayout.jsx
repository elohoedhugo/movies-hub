import React, {useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from "../assets/logo-light-transparent.png"
import "../App.css"
import { BiCameraMovie } from "react-icons/bi";
import { LuTv } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { MovieContext } from './MovieContext.jsx';

const RootLayout = () => {

  const {search, setSearch, searchMovies} = useContext(MovieContext)
  return (
    <div>

      <header>
        <div className='logodiv'> <img src={logo}/></div>
        <nav>
         <div className='navlink'><BiCameraMovie className='react-icon' /><NavLink to="/">Movies</NavLink></div>
         <div className='navlink'><LuTv className='react-icon' /><NavLink>TV shows</NavLink></div>
         <div className='navlink'><FaPlus className='react-icon' /><NavLink to="recommendations">Recommendations</NavLink></div>
         <div className='inputdiv'><input placeholder='🔍     search for movies' type='text' 
         value={search} onChange={(e)=> setSearch(e.target.value)}/></div>
         <button className='searchbutton' onClick={searchMovies}>Search</button>
         <div className='navlink'><NavLink>My Account</NavLink></div>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout