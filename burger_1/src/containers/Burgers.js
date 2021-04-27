import React, { useEffect, useState } from 'react'
import Board from '../components/Board/Board'
import Burger from '../components/Burger/Burger'
import Modal from '../components/Modal/Modal';
import Content from '../components/Modal/Content/Content';
import axios from '../axios';
import Spinner from '../components/Spinner/Spinner';
import qs from 'querystring'
const Burgers = (props) => {
    
 const TOTALPRICE_DEFAULT = 5;
const [burgerElements, setBurgerElements] = useState(null);
const [totalPrice, setTotalPrice] = useState(TOTALPRICE_DEFAULT);
const [purchase, setPurchase] = useState(false);
const [loading, setLoading] = useState(false);

const burgerElementPrice={
    salad: 0.5,
    cheese: 0.6,
    bacon: 1.2,
    meat: 1.5
};

useEffect(() => {
axios.get('/burgerElements.json')
        .then(res => {setBurgerElements(res.data);
        });
},[])

const showModal= () => {
    setPurchase(true)
}
const closeModal= () =>{
    setPurchase(false)
}
const continueOrder = () => {
    // setLoading(true);
    // const data = {
    //     burgerElements, totalPrice
    // }
    // axios.post('/orders.json', data).then((res)=> {
    //     setLoading(false);
    //     setPurchase(false);        
    //     console.log(res)
    // }).catch(err =>{
    //     setLoading(false);
    //     setPurchase(false);
    //     console.log(err);
    // });
    
    props.history.push({
        pathname: '/checkout',
        search: qs.stringify({
            ...burgerElements,
            //  total: totalPrice,
        }),
        state: {totalPrice: totalPrice}
    });
}
const addElementToBurger = (type) => {
    const qty = burgerElements[type];
    const newQty = qty + 1;
    const newBurgerElements = {
        ...burgerElements
    }
    newBurgerElements[type] = newQty;
    const oldTotalPrice = totalPrice;
    const priceAdded = burgerElementPrice[type];
    const newTotalPrice = oldTotalPrice+priceAdded;
    setBurgerElements(newBurgerElements);
    setTotalPrice(newTotalPrice);
}
const removeElementFromBurger = (type) => {
    const qty = burgerElements[type];
    if(qty <= 0){
        return;
    }
    const newQty = qty - 1;
    const newBurgerElements = {
        ...burgerElements
    }
    newBurgerElements[type] = newQty;
    const oldTotalPrice = totalPrice;
    const priceRemoved = burgerElementPrice[type];
    const newTotalPrice = oldTotalPrice - priceRemoved;
    setBurgerElements(newBurgerElements);
    setTotalPrice(newTotalPrice);
}
let burgers = <Spinner />;
let contentOrder = null;
if(burgerElements){
    burgers = (
       <>
       <Burger burgerElements={burgerElements} />
       <Board totalPrice={totalPrice} showModal={showModal} addBurgerElement={addElementToBurger} removeBurgerElement={removeElementFromBurger}/>
       </>
   );
   contentOrder = <Content burgerElements={burgerElements} totalPrice={totalPrice} cancelClick={closeModal} continueClick={continueOrder} />;
}
// if (loading) {
//     contentOrder = <Spinner />
// }
    return (
        <>
            {burgers}
            <Modal show={purchase} close={closeModal}>
               {contentOrder}
            </Modal>
        </>
    )
}
export default Burgers
