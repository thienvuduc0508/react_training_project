import React from 'react'
import Ingredients from './Ingredients/Ingredients'
import classes from './Burger.module.css'
const Burger = (props) => {
         let ingredients = Object.keys(props.ingredients) // ["salad", "cheese", "bacon", "meet"]
                    .map((igkey) => {
                        return [...Array(props.ingredients[igkey])]
                    .map((_,i) => {
                        return <Ingredients key={igkey + i} type={igkey}/>
                    })
                })
                if (Ingredients.length === 0) {
                    Ingredients = <p>Please start adding ingredients</p>
                  }
                  return (
                    <div className={classes.Burger}>
                      <Ingredients type="breadTop" />
                      {ingredients}
                      <Ingredients type="breadBottom" />
                    </div>
                  )
}

export default Burger

