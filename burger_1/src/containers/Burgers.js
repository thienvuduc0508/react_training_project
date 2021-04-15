import React, { useState } from 'react'
import Board from '../components/Board/Board'
import Burger from '../components/Burger/Burger'
import Modal from '../components/Modal/Modal';
import Content from '../components/Modal/Content/Content'

const Burgers = () => {
    
 const TOTALPRICE_DEFAULT = 5;
 const NUMBER_DEFAULT = 0;   
const [burgerElements, setBurgerElements] = useState({
    salad: NUMBER_DEFAULT,
    cheese: NUMBER_DEFAULT,
    bacon: NUMBER_DEFAULT,
    meat: NUMBER_DEFAULT
});
const [totalPrice, setTotalPrice] = useState(TOTALPRICE_DEFAULT);
const [purchase, setPurchase] = useState(false)

const burgerElementPrice={
    salad: 0.5,
    cheese: 0.6,
    bacon: 1.2,
    meat: 1.5
};
const showModal= () => {
    setPurchase(true)
}
const closeModal= () =>{
    setPurchase(false)
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
    return (
        <>
            <Burger burgerElements={burgerElements} />
            <Board totalPrice={totalPrice} showModal={showModal} addBurgerElement={addElementToBurger} removeBurgerElement={removeElementFromBurger}/>
            <Modal show={purchase} close={closeModal}>
                <Content burgerElements={burgerElements} totalPrice={totalPrice} btnClick={closeModal}/>
            </Modal>
        </>
    )
}
export default Burgers
