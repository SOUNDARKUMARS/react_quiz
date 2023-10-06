import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/' className='title'>Quistionify</Link>
        <hr className='diveder_line'/>
    </div>
  )
}

export default Header