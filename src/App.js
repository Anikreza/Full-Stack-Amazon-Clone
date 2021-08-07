import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import LogIn from './LogIn';
import { auth } from './firebase';
import {useStateValue} from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Nav from './Nav';

const promise=loadStripe('pk_test_51JH8hgKuYEIBE7kKs7KwTDX8QUs3o6mp66PHmOz6pQ8homlC7twycXphY40CuASPVIPwF8Hch7KE26REb91HNzDP00RmtVWRVR')

function App() {

  const [{}, dispatch]= useStateValue()

  useEffect(() => {
     auth.onAuthStateChanged(authUser=>{
       console.log('user is:', authUser);

       if(authUser){
          //user signed in
          dispatch({
            type:"SET_USER",
            user:authUser
          })
       }
       else{
          //user signed out 
          dispatch({
            type:"SET_USER",
            user:null
          })
       }
     })
  }, [])



  return (
    <Router>
    <div className="app">
       
            <Header/>  
            <Nav/>  
         <Switch>

         <Route path='/login'> 
          <LogIn/>  
          </Route> 

         <Route path='/checkout'>
          <Checkout/>   
          </Route>  

          <Route path='/payment'>   
            <Elements stripe={promise}>
               <Payment/>
            </Elements>   
          </Route>  

          <Route path='/'>     
          <Home/>    
          </Route>  

          </Switch>
    </div>
    </Router>
  );
}

export default App;
