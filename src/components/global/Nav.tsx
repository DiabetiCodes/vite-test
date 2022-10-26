import React from 'react'

function Nav() {
  return (
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-md lg:flex-grow'>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Home
        </a>
        <a href="../pages/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          About
        </a>
        <a href="../pages/blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Blog
        </a>
        <a href="../pages/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Nav