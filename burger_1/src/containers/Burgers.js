import React, { useState } from 'react'
import Board from '../components/Board/Board'
import Burger from '../components/Burger/Burger'
import Modal from '../components/Modal/Modal';
import Content from '../components/Modal/Content/Content'

const Burgers = () => {
const [burgerElements, setBurgerElement] = useState({
    salad: 1,
    cheese: 1,
    bacon: 1,
    meat: 1
});
const [totalPrice, setTotalPrice] = useState(5);
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
    setBurgerElement(newBurgerElements);
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
    setBurgerElement(newBurgerElements);
    setTotalPrice(newTotalPrice);
}
    return (
        <>
            <Burger burgerElements={burgerElements} />
            <Board totalPrice={totalPrice} showModal={showModal} addBurgerElement={addElementToBurger} removeBurgerElement={removeElementFromBurger}/>
            <Modal show={purchase} close={closeModal}>
                <Content burgerElements={burgerElements} totalPrice={totalPrice}/>
            </Modal>
        </>
    )
}

export default Burgers
