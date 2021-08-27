import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { UseStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function checkout() {
    const [{ basket, user }] = UseStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='img_ad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kF4rZTFBrcxdyuYXS1On7-XBkHycyCwCOA&usqp=CAU   ' alt='ad' />
                <div >
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* <CheckoutProduct/> */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default checkout;

