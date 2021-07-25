import React, {useState, useEffect} from 'react'
import './home.css'
import Product from './Product'
import a from './a.jpg'
import b from './b.png'

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
                <img className='home-image' 
                src={'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'}/> 
            </div>

            <div className='row'>
                 {api.map(api=>(

                    <Product 
                        id={api.id}
                        title={api.title}
                        price={api.price}
                        image={api.image}
                        rating={5}  
                    />
                 ))}
  
                  
            </div>

        </div>
    )
}

export default Home
