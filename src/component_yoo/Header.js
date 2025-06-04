import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1 id='logo'><Link to={'/'}><img src='/img_yoo/logo.png'/></Link></h1>
      <ul className='nav'>
        <li><Link to={'/'}>YOO YOUNGKUK</Link></li>
        <li><Link to={'/archive'}>ARCHIVES</Link></li>
        <li><Link to={'/'}>FOUNDATION</Link></li>
      </ul>
    </header>
  )
}

export default Header
