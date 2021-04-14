import React from 'react'
import Ingredients from './Ingredients/Ingredients'
import classes from './Burger.module.css'
import PropTypes from 'prop-types'


const Burger = (props) => {
         let ingredients = Object.keys(props.ingredients) // ["salad", "cheese", "bacon", "meet"]
         .map((igkey) => {
                        return [...Array(props.ingredients[igkey])]          // [Arr(1), Arr(2),Arr(1),Arr(2)]
                    .map((_,i) => {
                        return <Ingredients key={igkey + i} type={igkey}/>
                    })
                })
                .reduce((arr, el) => {
                    return arr.concat(el)
                }, []);
                console.log(ingredients);

                if (ingredients.length === 0) {
                    ingredients = <p>Please start adding ingredients!!</p>
                  }
                  return (
                    <div className={classes.Burger}>
                      <Ingredients type="breadTop" />
                      {ingredients}
                      <Ingredients type="breadBottom" />
                    </div>
                  )
}
Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
}

export default Burger

