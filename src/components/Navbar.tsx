import React from 'react'
import reactSvg from '../assets/react.svg'
import './Navbar.css'
const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='nav-center'>
      <div className="nav-heading">
      <img src={reactSvg} alt="logo"/>
        <span><button className='btn'>menu</button></span>
      </div>
       
        <ul className='nav-links'>
        <li className='nav-link'>Home</li>
        <li className='nav-link'>Recipe</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Contact</li>
       
    </ul>

    </div>
    
   </nav>
  )
}

export default Navbar