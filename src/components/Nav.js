import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <NavLink to='/' className='navbutton'>Home</NavLink>
      <NavLink to='/about' className='navbutton'>About</NavLink>
      <NavLink to='/projects' className='navbutton'>Projects</NavLink>
      <NavLink to='music' className='navbutton'>Music</NavLink>
      <NavLink to='blog' className='lastnavbutton'>Blog</NavLink>
    </div>

  )

}

export default Nav
