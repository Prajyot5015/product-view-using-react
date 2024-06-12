import React from 'react'
import './ProductCard.css'

function ProductCard({ id, name, rating, mrp, price, description, img } ) {
  return (
    <div className='product-card'>
        <img src={img} alt='img' className='product-img'/>
        <h2 className='product-name'> {name} </h2>
        <del className='mrp'> {mrp} </del> 
        <span className='price'> {price} </span>
        <button type="button" className='btn'>More</button>
    </div>
  )
}

export default ProductCard