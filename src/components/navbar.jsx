import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
return (
    <header className='header'>
            <NavLink to='/' end activeClassName='active' className=" w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'> BA </p> 
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                    <NavLink to='/about' end className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
            </nav>
            <nav className='flex text-lg gap-7 font-medium'>
                    <NavLink to='/projects' end className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Projects</NavLink>
            </nav>
    </header>
)
}

export default navbar