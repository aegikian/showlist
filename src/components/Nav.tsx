import React from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'

export const Nav = () => {
  return (
    <div className='nav_container'>
      <nav className='nav'>
        <Link className='link_nav' to={'/'} >Главная</Link>
        <Link className='link_nav' to={'/'} >О нас</Link>
        <Link className='link_nav' to={'/'} >Контакты</Link>
        <Link className='link_nav' to={'/showrooms'} >Шоурумы</Link>
      </nav>
    </div>
  )
}
