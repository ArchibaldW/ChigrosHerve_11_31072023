import footerLogo from './footerLogo.svg'
import './style.scss'

export default function Footer() {
    return (
      <div className='footer'>
        <img src={footerLogo} alt='' className='footer__img' />
        <div>2020 Kasa. All rights reserved</div>
      </div>
    )
  }