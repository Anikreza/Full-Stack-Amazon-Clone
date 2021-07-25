import React from 'react'
import './checkoutItem.css'
import {useStateValue} from './StateProvider'

const CheckoutItem = ({id, image,title,price,rating}) => {
  
    const [{basket}, dispatch]= useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
  
    return (
        <div className='checkoutItem'>
        
            <img className='checkoutItem-image' src={image}/>
        
                <div className='checkoutItem-info'>
                      <p className='checkoutItem-title'>{title}</p>
                      <p className='checkoutItem-price'>
                          <small> $</small>
                          <strong>{price}</strong>     
                     </p> 
                     <div className='checkoutItem-rating'>
                             {Array(rating).fill().map((_,i)=> (
                                   <p> 🌟</p>
                             ))}
                     </div>
                     <button onClick={removeFromBasket}>Remove from basket</button>
                </div> 
        
        </div>
    )
}

export default CheckoutItem
