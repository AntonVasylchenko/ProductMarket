import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "../ProductGrid/productGrid.css"
import { useProduct } from '../../Hooks/useProd';
const ProductGrid = ({ products, addToCart }) => {
  const [serch, setSerch] = useState("");
  const [value, setValue] = useState("Sort by")
  const options = [
    { name: "Price", type: "price" },
    { name: "Rating", type: "rating" },
  ]

  const sortedAndSerchedPosts = useProduct(products, value, serch)

  let items = sortedAndSerchedPosts.map(prod => {
    return <ProductCard addToCart={addToCart} key={prod.id} product={prod} />
  });

  let result = options.map((el, index) => {
    return <option key={index} value={el.type}>{el.name}</option>
  })
  return (
    <div className='product_grid'>
      <div className='product_grid-filter'>
        <input type="text" placeholder='Serch by Titel produt' value={serch} onChange={e => { setSerch(e.target.value) }} />
        <select value={value} onChange={event => setValue(event.target.value)}>
          {result}
        </select>
      </div>
      {items}
    </div>
  )
}

export default ProductGrid