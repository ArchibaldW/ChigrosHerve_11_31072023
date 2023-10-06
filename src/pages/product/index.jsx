import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carousel from '../../components/carousel'
import Rating from '../../components/rating'
import Loader from '../../components/loader'
import Dropdown from '../../components/dropdown'
import TagsContainer from '../../containers/tagsContainer'

import './style.scss'
import PageNotFound from '../pageNotFound'

export default function Product() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const newProduct = data.find((product) => product.id === productId)
        if (newProduct) {
          setProduct(newProduct)
        } else {
          setIsError(true)
        }
        setIsLoading(false)
      })
  }, [productId])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <PageNotFound />
  }

  return (
    <div className='single__product'>
      {product && (
        <div>
          <Carousel pictures={product.pictures} />
          <div className='single__product__container'>
            <div className='single__product__container__left'>
              <div className='single__product__main'>
                <div className='single__product__title'>{product.title}</div>
                <div className='single__product__location'>
                  {product.location}
                </div>
              </div>
              <TagsContainer tags={product.tags} />
            </div>
            <div className='single__product__container__right'>
              <div className='single__product__host'>
                <div className='single__product__host__name'>
                  {product.host.name}
                </div>
                <img
                  className='single__product__host__picture'
                  src={product.host.picture}
                  alt={product.host.name}
                />
              </div>
              <Rating rating={product.rating} />
            </div>
          </div>
          <div className='single__product__dropdowns'>
            <Dropdown
              title='Description'
            >
              {product.description}
            </Dropdown>
            <Dropdown
              title='Équipements'
            >
              <ul>
                {product.equipments.map((equipment, index) => {
                  return <li key={index}>{equipment}</li>
                })}
              </ul>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  )
}
