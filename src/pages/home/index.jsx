import React from 'react'

import ProductThumbnail from '../../components/productThumbnail'
import HomeBanner from '../../components/homeBanner'

import { useState, useEffect } from 'react'

import './style.scss'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    function fectchData() {
      fetch(process.env.PUBLIC_URL + '/data/products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }

    fectchData()
  }, [])

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
