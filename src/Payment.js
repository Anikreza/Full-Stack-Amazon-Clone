import React, { useState, useEffect } from 'react'
import CheckoutItem from './CheckoutItem'
import './payment.css'
import {useStateValue} from './StateProvider'
import { Link, useHistory} from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer'
import axios from 'axios';

const Payment = () => {

    const history=useHistory();
    const stripe=useStripe();
    const elements=useElements();
    const [{basket, user}, dispatch]= useStateValue()
    const [error, setError]=useState(null);
    const [processing, setProcessing]=useState("");
    const [succeeded, setSucceeded]=useState(false);
    const [disabled, setDisabled]=useState(true);
    const [ClientSecret, setClientSecret]=useState(true);

    useEffect(() => {
        const getClientSecret= async () =>{
           const response =await axios({
               method:'post',
               url: `/payments/create?total=${getBasketTotal(basket)*100}`
           });
           setClientSecret(response.data.ClientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('the secret is:',ClientSecret);

    const handleSubmit= async (e)=>{
            e.preventDefault();
            setProcessing(true);

            const payload=await stripe.confirmCardPayment(ClientSecret,{payment_method:
                {
                card:elements.getElement(CardElement)
                }
        }).then(({paymentIntent})=>{

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        
        history.replace('/orders')
    }).catch(error => console.log('the error is:',error));
    }
    const handleChange=(e)=>{
            setDisabled(e.empty);
            setError(e.error? e.error.message:" ")
    }

    return (
        <div className='payment'>

             <h1>Checkout (<Link to= '/checkout'>{basket?.length} items</Link>)</h1>

            <div className='payment-container'>
                 <div className='payment-section'>
                     <div className='payment-title'>
                         <h3>Delivery address </h3>
                     </div>
                     <div className='payment-address'>
                         <p>{user?.email}</p>
                         <p> 123 North Goran</p>
                         <p>Khilgaon, Dhaka</p>
                     </div>
                 </div>

                 <div className='payment-section'>
                     <div className='payment-title'>
                         <h3>Review items and delivery</h3>
                     </div>
                     <div className='items-to-pay'>
                           {basket.map(b=>(
                               <CheckoutItem
                               id={b.id}
                               title={b.title}
                               price={b.price}
                               image={b.image}
                               rating={5}
                               />
                           ))}
                     </div>
                 </div>

                 <div className='payment-section'>
                     <div className='payment-title'>
                         <h3>Payment Method</h3>
                     </div>
                     <div className='payment-details'>
                             <form>
                                 <CardElement onChange={handleChange}/> 

                                 <div className='payment-price-container'>
                                 <CurrencyFormat
                                        renderText={(value) => (
                                        <>
                                            <p>
                                            {/* Part of the homework */}
                                            Subtotal ({basket.length}): <strong>{value}</strong>
                                            </p>
                                            <small className="subtotal__gift">
                                            <input type="checkbox" /> This order contains a gift
                                            </small>
                                        </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} // Part of the homework
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}> 
                                         <span>{processing ?<p>Processing</p>: 'Buy Now'}
                                         </span>
                                    </button>

                                 </div>
                                 {error && <div>{error}</div>}
                             </form> 
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Payment
