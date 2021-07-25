import React from 'react'
import './subtotal.css'
import { useHistory } from 'react-router'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer'


const Subtotal = () => {

  const history=useHistory();
  const [{basket}, dispatch]= useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
