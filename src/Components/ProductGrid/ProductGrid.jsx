import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
const ProductGrid = ({products}) =>  {
    let items = products.map(prod => {
        return <ProductCard key={prod.id} product={prod} />
    })
  return (
    <div className='product_grid'>
        {items}
    </div>
  )
}

export default ProductGrid