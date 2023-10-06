import React from 'react'

import ProductThumbnail from '../../components/productThumbnail'
import Loader from '../../components/loader'
import HomeBanner from '../../components/homeBanner'
import PageNotFound from '../pageNotFound'

import { useState, useEffect } from 'react'

import './style.scss'

export default function Home() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data)
        } else {
          setIsError(true)
        }
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <PageNotFound />
  }

  return (
    <div className='home'>
      <HomeBanner />
      <section className='home__products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <ProductThumbnail product={product} />
            </article>
          )
        })}
      </section>
    </div>
  )
}
