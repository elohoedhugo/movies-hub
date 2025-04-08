import React, {useContext, useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from "../assets/logo-light-transparent.png"
import "../App.css"
import { BiCameraMovie } from "react-icons/bi";
import { LuTv } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { MovieContext } from './MovieContext.jsx';
import { CgMenuGridO } from "react-icons/cg";

const RootLayout = () => {

  const {search, setSearch, searchMovies} = useContext(MovieContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
     setIsOpen(prev=>!prev)
  }
  return (
    <div>

      <header>
        <div className='logodiv'> <img src={logo}/></div>
        <nav>
         <div className='navlink'><BiCameraMovie className='react-icon' /><NavLink to="/">Movies</NavLink></div>
         <div className='navlink'><LuTv className='react-icon' /><NavLink>TV shows</NavLink></div>
         <div className='navlink' id='recommendations'><FaPlus className='react-icon' /><NavLink to="recommendations">Recommendations</NavLink></div>
         <input placeholder='🔍     search for movies' type='text' 
         value={search} onChange={(e)=> setSearch(e.target.value)}/>
         <button className='searchbutton' onClick={searchMovies}>Search</button>
         <div className='navlink'><NavLink>My Account</NavLink></div>
         
        </nav>
        <div className='menu-button-div'>
        <button className='menu' onClick={toggleMenu}><CgMenuGridO className='menu-icon'/></button>

        {isOpen && (
          <div className='menu-container'>
           <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Recommendations</li>
            <li>Account</li>
           </ul>

          </div>
        )}
        </div>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout