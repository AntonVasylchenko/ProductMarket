import React, { useState } from 'react'
import "./productCard.css"
import { getPriceOrigin } from '../../Utils/getPrice';
import { getRating } from '../../Utils/getReting';
import Rating from '../../UI/Rating/Rating';
import Modal from '../../UI/Modal/Modal';
import Slaider from '../Slaider/Slaider';
import Button from '../../UI/Button/Button';
import { NavLink } from 'react-router-dom';



const ProductCard = ({ product, addToCart }) => {
    getRating(product.rating)
    let [price, comparePrice] = getPriceOrigin(product.price, product.discountPercentage);

    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);



    const added = (id) => {
        addToCart(id);
        setShow(!show)
    }
    return (
        <div className='productCard'>
            <div className="productCard_img">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <Button onClick={() => { setVisible(true) }} >More Photo</Button>
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
                {visible && <Modal visible={visible} setVisible={setVisible}><Slaider slides={product.images} /></Modal>}
            </div>
            <Button onClick={() => { added(product.id) }}>Add to Cart</Button>
            {show && <Modal visible={show} setVisible={setShow}>Product added successfully <br /> <NavLink className="goToCart" to="/cart"> Go to cart</NavLink> </Modal>}

        </div>
    )
}

export default ProductCard