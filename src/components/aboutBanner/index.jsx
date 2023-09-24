import aboutBanner from './aboutBanner.svg'
import './style.scss'

export default function AboutBanner() {
  return (
    <div className='about__banner'>
      <img src={aboutBanner} alt='' className='about__banner__img' />
    </div>
  )
}
