import React from 'react'
import './Navbar.css'
import Name from './Name'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Name />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
