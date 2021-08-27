import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { UseStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [{ basket, user }, dispatch] = UseStateValue();
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>Checkout(<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Dlivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>abc karachi</p>
                        <p>karachi, Pakistan</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
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

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment_Method</h3>
                    </div>
                    <div classNmae='payment_details'>
                        <form>
                            <CardElement />
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment;