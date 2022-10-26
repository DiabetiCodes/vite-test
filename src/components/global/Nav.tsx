import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-md lg:flex-grow'>
        <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Home
        </NavLink>
        <NavLink to="../pages/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          About
        </NavLink>
        <NavLink to="../pages/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Blog
        </NavLink>
        <NavLink to="../pages/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Nav