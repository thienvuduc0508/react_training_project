import React, { useState, useEffect } from 'react'
import BurgerCheckout from '../../components/CheckoutData/BurgerCheckout'
import axios from '../../axios'
const Checkout = (props) => {
    const [elements, setElements] = useState({
        salad: 1,
        bacon: 1,
        meat: 1,
        cheese: 1
    });
    useEffect(() => {
        axios.get('/burgerElements.json')
                .then(res => {setElements(res.data);
                    console.log(res.data);
                });
        },[])
    return (
        <div>
            <BurgerCheckout burgerElements={elements} />
        </div>
    )
}

export default Checkout
