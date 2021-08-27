import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";


function Subtotal() {
    const [{ basket }] = UseStateValue();
    const history = useHistory();
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p className='subtotal_p'>
                        Subtotal ( {basket?.length} items ) : <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type="checkbox" />This order contain a gift
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')} >Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;