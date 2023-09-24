import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carousel from '../../components/carousel'

import './style.scss';

export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    function fectchData() {
      fetch(process.env.PUBLIC_URL + '/data/products.json')
        .then((res) => res.json())
        .then((data) =>
          setProduct(data.find((product) => product.id === productId))
        )
    }

    fectchData()
  }, [productId])
  return (
    <div className='single__product'>
      <Carousel />
      <div className='single__product__header'>
        <div className='single__product__main'>
          <div className='single__product__title'>{product.title}</div>
          <div className='single__product__location'>{product.location}</div>
        </div>
        <div className='single__product__host'>
          <div className='single__product__host__name'>{product.host.name}</div>
          <img className='single__product__host__picture' src={product.host.picture} alt={product.host.name}/>
        </div>
      </div>
    </div>
  )
}
