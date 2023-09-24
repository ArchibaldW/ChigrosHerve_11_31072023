import React from 'react'
import { NavLink } from 'react-router-dom'

//Style
import Logo from './logo.svg'
import './style.scss'
import ROUTES from '../../pages/router/routes'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to={ROUTES.home}>
        <img src={Logo} alt='Logo' className='navbar__img' />
      </NavLink>
      <div>
        <NavLink className='navbar__link' to={ROUTES.home}>
          Accueil
        </NavLink>
        <NavLink className='navbar__link' to={ROUTES.about}>
          À Propos
        </NavLink>
      </div>
    </nav>
  )
}
