import React, { useMemo, useRef, useState } from 'react'
import { uniqueObjects } from '../../Utils/uniqueObjects'

import "./cardgrid.css"
import Button from '../../UI/Button/Button';
import { addQuantity } from '../../Utils/addQuantity';
import { getTotalPrice } from '../../Utils/getTotalPrice';
import Modal from '../../UI/Modal/Modal';
import { NavLink } from 'react-router-dom';


const CardGrid = ({ product }) => {
    const [count, setCount] = useState(1)
    const [items, setItems] = useState(uniqueObjects(product));
    const [visible, setVisible] = useState(false)
    const plus = (id) => {
        setItems(addQuantity(id, items, true))
    }
    const minus = (id) => {
        setItems(addQuantity(id, items, false))
    }
    let total = useRef();

    useMemo(() => {
        total.current = getTotalPrice(items)
    }, [items])


    let markUp =
        items.length > 0
            ? items.map(el => {
                return <div key={el.id} className='cart-item'>
                    <div className='car-item-img'>
                        <img src={el.thumbnail} alt={el.title} />
                    </div>
                    <h2>{el.title}</h2>
                    <div className='car-item-imgs'>
                        {el.images.map((elem, index) => <img key={index} src={elem} alt={el.title} />)}
                    </div>
                    <div className='car-item-info'>
                        <p>Avalible: <span>{el.stock}</span></p>
                        <p>Price 1x: <span>{el.price}.00$</span></p>
                    </div>
                    <div className='cart-quantity'>
                        {el.quantity <= 1 ?
                            <Button disabled onClick={() => minus(el.id)} >-</Button>
                            :
                            <Button onClick={() => minus(el.id)}>-</Button>
                        }
                        {el.quantity ?
                            <input type="number" value={el.quantity} onChange={e => setCount(e.target.value)} />
                            :
                            <input type="number" value={count} onChange={e => setCount(e.target.value)} />
                        }
                        <Button onClick={() => plus(el.id)}>+</Button>
                    </div>
                    {el.total ?
                        <div className='cart-total'>
                            Total: {el.total}.00$
                        </div> :
                        <div className='cart-total'>
                            Total: {count * el.price}.00$
                        </div>
                    }

                </div>
            })
            : <h1>Cart is empty
                <NavLink to="/all">Back to Shop</NavLink>

            </h1>
    return (
        <>

            <div className="product_grid">
                {items.length > 0 &&
                    <div className='product_grid_nav'>
                        {visible && <Modal visible={visible} setVisible={setVisible}>Congratulations, the amount of your purchase is:{total.current}.00$ </Modal>}

                        <Button onClick={() => { setVisible(true) }}>Buy
                        </Button>
                        <span>Total Price in Cart: {total.current}.00$</span>
                    </div>
                }

                {markUp}
            </div>
        </>

    )
}

export default CardGrid