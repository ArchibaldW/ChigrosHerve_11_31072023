import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default function SingleProductThumbnail({ product }) {
  return (
    <Link className='product__link' to={`/products/${product.id}`}>
      <div className='product__thumbnail'>
        <div className='product__thumbnail__figure'>
          <img src={product.cover} alt='' className='product__thumbnail__img' />
        </div>
        <h2 className='product__thumbnail__title'>{product.title}</h2>
      </div>
    </Link>
  )
}
