import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 
        <Link to="https://type1.digital/" className="hover:underline"> Type 1 Digital </Link>
        - All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
          </li>
          <li>
              <Link to="../pages/About" className="mr-4 hover:underline md:mr-6">About</Link>
          </li>
          <li>
              <Link to="../pages/Blog" className="mr-4 hover:underline md:mr-6">Blog</Link>
          </li>
          <li>
              <Link to="../pages/Contact" className="hover:underline">Contact</Link>
          </li>
      </ul>
    </footer>
  )
}

export default Footer