import React from 'react'
import './product.css'
import {useStateValue} from './StateProvider'


const Product = ({id,title,image,price,rating}) => {

    const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

    return (
      <div className='product'>

             <div className='column'>
                    <div className='contenta'>
                    <p className='product-info'>{title}</p>
                    <img width='100%' height='300px' src={image} />
                <p className='product-price '>
                    <small> $</small>
                    <strong>{price}</strong>
                </p>

                <div className='product-rating'>
                    {Array(rating).fill().map((_,i)=> (
                          <p> 🌟</p>
                    ))}
                  
                </div>
               
                <button onClick={addToBasket}> Add To Basket</button> 
             </div>
       

            
        </div>
        </div>
    )
}

export default Product 
