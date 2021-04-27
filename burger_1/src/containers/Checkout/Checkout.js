import React, { useState, useEffect } from "react";
import BurgerCheckout from "../../components/CheckoutData/BurgerCheckout";
import Contact from "../../components/CheckoutData/ContactForm/Contact";

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const data = new URLSearchParams(props.location.search);
    console.log(data);
    let ingredients = {};
    for (let param of data.entries()) {
      // ['salad', '0'],['','']...
      ingredients[param[0]] = +param[1];
    }
    setIngredients(ingredients);
    setTotalPrice(props.location.state.totalPrice);
  }, []);
  return (
    <>
      <div>
        <BurgerCheckout burgerElements={ingredients} price={totalPrice} />
        <Contact />
      </div>
    </>
  );
};

export default Checkout;
