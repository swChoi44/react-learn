import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1><Link to={"/"}>Logo</Link></h1>
      <ul>
        <li><Link to={"/about"}>About</Link></li>
      </ul>
    </header>
  )
}

export default Header
