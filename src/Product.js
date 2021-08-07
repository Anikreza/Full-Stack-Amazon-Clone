import React, {useState, useEffect} from 'react'
import './product.css'
import {useStateValue} from './StateProvider'
import { AiFillStar } from 'react-icons/ai';


const Product = ({id,title,image,price,rating}) => {

    const [{ basket }, dispatch] = useStateValue();
    const [seed, setSeed]=useState("")

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

  useEffect(() => {
    setSeed(Math.floor(Math.random() *4));        
}, []);

    return (
      <div className='product'>

             <div className='column'>
                    <div className='contenta'>

                    <img src={image} />

               <div className='info-container'>
                    <p className='product-price '>
                    <small> $</small>
                    <strong>{price}</strong>
                    </p>

                    <p className='product-info'>{title}</p>
                    

                <div className='product-rating'>
                    {Array(seed+1).fill().map((_,i)=> (
                        <p> <AiFillStar color='#cd9042' size='20px'/></p>
                    ))}
                  
               
                </div>
                <button onClick={addToBasket}> Add To Cart</button> 
                </div>
             </div>
       

            
        </div>
        </div>
    )
}

export default Product 
