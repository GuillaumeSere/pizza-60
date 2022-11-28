import React from 'react';
import {useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';

const Checkout = ({ subtotal }) => {

    const dispatch = useDispatch();

    const tokenHander = (token) => {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                currency='EUR'
                stripeKey= "pk_test_51M96V0Ftxyuiedyvt5zg8mOrPGtQLrdtLuKaYC4bupyNYvuZwDGGQnVulYyL8ddxoTdplHKeUfQVdYOkrVsq2yAT00r0u7ouln"
            >
                <button className='btn'>Payer</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout;
