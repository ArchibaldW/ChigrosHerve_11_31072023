import homeBanner from './homeBanner.svg'
import './style.scss'

export default function HomeBanner() {
  return (
    <div className='home__banner'>
      <div className='home__banner__figure'>
        <img src={homeBanner} alt='' className='home__banner__img' />
      </div>
      <h1 className='home__banner__title'>
        <span>Chez vous, </span>
        <span>partout et ailleurs</span>
      </h1>
    </div>
  )
}
