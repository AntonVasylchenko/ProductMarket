import React, { useState } from 'react'
import "./productCard.css"
import { getPriceOrigin } from '../../Utils/getPrice';
import { getRating } from '../../Utils/getReting';
import Rating from '../../UI/Rating/Rating';
import Modal from '../../UI/Modal/Modal';


const ProductCard = ({ product }) => {
    getRating(product.rating)
    let [price, comparePrice] = getPriceOrigin(product.price, product.discountPercentage);

    const [visible, setVisible] = useState(false)
    return (
        <div className='productCard'>
            <div className="productCard_img">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className='productCard_info'>
                <h2 className='productCard-title'>{product.title}</h2>
                <div className='productCard-rating'><Rating rating={getRating(product.rating)} /></div>
                <div className='productCard-tags'>
                    <span>{product.brand}</span>
                    <span>{product.category}</span>
                </div>
                {
                    comparePrice === 0
                        ?
                        <div className='productCard-price'>
                            <span className='mainPrice'>{price}$</span>
                        </div>
                        :
                        <div className='productCard-price'>
                            <span className='mainPrice'>{price}$</span>
                            <span className="comparePrice">{comparePrice}$</span>
                        </div>
                }
                <p className='productCard-desc'>{product.description}</p>
                <button onClick={() => { setVisible(true) }}>More</button>
                {visible && <Modal visible={visible} setVisible={setVisible}>{product.title}</Modal>}
            </div>
        </div>
    )
}

export default ProductCard