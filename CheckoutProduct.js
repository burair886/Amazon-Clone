import React from 'react'
import "./CheckoutProduct.css"
import { UseStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = UseStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
        })
    }
    return (
        <div className='checkoutProduct'>
            <p>{id}</p>
            <img src={image} alt="image" className='CheckoutProduct_image' />
            <div className='CheckoutProduct_info'>
                <p className='CheckoutProduct_title'> {title}</p>
                <p className='CheckoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='CheckoutProduct_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;