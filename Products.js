import React from "react";
import './Products.css';
import { UseStateValue } from "./StateProvider";

function Products({ id, title, price, image, rating }) {
    const [state, dispatch] = UseStateValue();
    const AddToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        })
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>
            </div>
            <img alt='' src={image} />
            <button onClick={AddToBasket}>Add to Basket</button>

        </div>
    );
}

export default Products;
