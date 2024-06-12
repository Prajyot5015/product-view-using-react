import React from 'react'
import './ProductCard.css'

function ProductCard({ id, name, rating, mrp, price, description, img } ) {
  return (
    <div className='product-card'>
        <h1> {name} </h1>
    </div>
  )
}

export default ProductCard