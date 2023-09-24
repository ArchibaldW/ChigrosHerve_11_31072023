
import ROUTES from '../../pages/router/routes'
import { NavLink } from 'react-router-dom'

import './style.scss'

export default function PageNotFound() {
  return (
    <div className='error__page'>
      <div className='error__page__title'>404</div>
      <div className='error__page__content'>
        Oups! La page que vous demandez n'existe pas
      </div>
      <NavLink className='error__page__home__link' to={ROUTES.home}>
        Retourner sur la page d'acceuil
      </NavLink>
    </div>
  )
}
