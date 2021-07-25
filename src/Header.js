import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { BrowserRouter as Router,Switch, Link, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider'
import { auth } from "./firebase";

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
             <div className='header-src'>
                 <input className='header-src-input' type='text'/>
                 <SearchIcon className='header-src-icon'/>
             </div>
                  
              <div className='header-nav'>
              <Link to={!user && '/login'}>
                  <div onClick={handleAuthenticaton}  className='header-option'>
                     <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                     <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                     
                  </div>
                  </Link>  
                  <div className='header-option'>
                      <span className='header-option-lineone'>
                         Returns
                       </span>   
                       <span className='header-option-linetwo'>
                          Orders 
                       </span> 
                  </div>
                  <div className='header-option'>
                      <span className='header-option-lineone'>
                         Your
                       </span>   
                       <span className='header-option-linetwo'>
                           Prime
                       </span> 
                  </div>
                <Link to='/checkout'>
                  <div className='header-option-basket'>
                       <ShoppingBasketIcon/>
                       <span className='heade-option-linetwo header-basketcount'>
                           {basket.length}
                       </span>
                  </div>
                  </Link>
              </div>

        </div>

    )
}

export default Header
