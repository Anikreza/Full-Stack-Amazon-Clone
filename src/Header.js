import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { BrowserRouter as Router,Switch, Link, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider'
import { auth } from "./firebase";
import { MdLocationOn } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';


const Header = () => {

    const [{basket, user}, dispatch]= useStateValue()
  
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    
    return (
        <div className='header'>
           <Link to='/'>  
             <img className='header-logo' src={'http://pngimg.com/uploads/amazon/amazon_PNG11.png'}/>
            </Link>

            <div className='deliverto'>
            <MdLocationOn size='23px' style={{ color:'white', float:'left', marginTop:'15px' }}/>  
              <a> <span>
              <p1>Deliver to </p1>   
              </span>
              <p >Bangladesh</p>            
              </a>
            </div>

             <div className='header-src'>
                 <select className='select'>
                   <option> All</option>  
                   <option> Computers</option>  
                   <option> Sports</option>  
                   <option> Business</option>  
                   <option> Fashion</option>  
                 </select> 
                 <input className='header-src-input' type='text'/>
                 <SearchIcon className='header-src-icon'/>
             </div>
                  
                  <div className='country-flag'>       
                     <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg"/>          
                  </div>
                  <MdArrowDropDown color='white'/>
                  

              <div className='header-nav'>
              <Link to={!user && '/login'}>
                  <div onClick={handleAuthenticaton}  className='header-option'>
                     <span className="header-option-lineone">Hello {!user ? ',' : user.email}</span>
                     <span className="header-option-linetwo">{user ? 'Sign Out' : 'Sign In'}</span>
                     
                  </div>
                  </Link>  
                  <div className='header-option'>
                      <span className='header-option-lineone'>
                         Returns
                       </span>   
                       <span className='header-option-linetwo'>
                         & Orders 
                       </span> 
                  </div>

                <Link to='/checkout'>
                  <div >
                      <div className='header-option-basket'>
                       <FiShoppingCart size='25px'/>
                       <span className='heade-option-linetwo header-basketcount'>
                        {basket.length}
                       </span>
                       </div>
                       <p className='cart'>Cart</p>
                  </div>
                  </Link>
              </div>

        </div>

    )
}

export default Header
