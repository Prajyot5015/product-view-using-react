import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data'

function ProductView() {
    const { id } = useParams()

    const selectProduct = products.find((productObject) => productObject.id === id)
    
    const {
        name,
        rating,
        mrp,
        price,
        description,
        img
    } = selectProduct

    return (
   <>
        <div>
            <div>
                <img src={img} alt="img" />
            </div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
   </>
  )
}

export default ProductView