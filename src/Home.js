import React, {useState, useEffect} from 'react'
import './home.css'
import Product from './Product'
import a from './a.jpg'
import b from './b.png'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Home = () => {

    const url='https://fakestoreapi.com/products';

    const [api, setApi] = useState([""]);
  
     
     useEffect(() => {
       getApi()
     }, [])
 
     const getApi = async()=>{
       const response=await fetch(url);
       const fetchedData= await response.json();
       setApi(fetchedData);
       console.log(fetchedData);
    }

    return (
        <div className='home'>
            <div className='home-container'>
            <a href='#'><ImageSlider slides={SliderData}/> </a>;
            </div>

            <div className='row'>
                 {api.map(api=>(

                    <Product 
                        id={api.id}
                        title={api.title}
                        price={api.price}
                        image={api.image}
                         
                    />
                 ))}

                  
            </div>

        </div>
    )
}

export default Home
