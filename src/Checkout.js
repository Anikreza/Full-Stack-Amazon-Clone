import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckoutItem from './CheckoutItem'
import { ListItemAvatar } from '@material-ui/core'

const Checkout = () => {

    const [{basket, user}, dispatch]= useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img className='checkout-ad'
                src= 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
                <div>
                     <h3 className='checkout-title'> Hello, {user.email} </h3>
                     <h2 className='checkout-title'>
                           This is Your Shopping Basket   
                     </h2> 

                     {basket.map(product=>(
                         <CheckoutItem
                         id={product.id}
                         title={product.title}
                         image={product.image}
                         price={product.price}
                         rating={product.rating}
                         />
                         ))} 

                     
                </div>
            </div>

            <div className='checkout-right'>
                   <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
