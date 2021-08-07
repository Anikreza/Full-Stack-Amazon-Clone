import React from 'react'
import './nav.css';
import { BsList } from 'react-icons/bs';


const Nav = () => {
    return (
        <div className='navbar'>
            <ul className='navul'>
               <a href='#'><BsList size='17px' color='white'/> <span> All </span></a> 
                <a href='#'>Today's Deals</a>
                <a href='#'>Customer Service</a>
                <a href='#'>Gift Cards</a>
                <a href='#'>Registry</a>
                <a href='#'>Sell</a>
            </ul>
        </div>
    )
}

export default Nav
