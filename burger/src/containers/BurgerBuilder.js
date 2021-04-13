import React, { Component } from 'react'
import BoardMenu from '../components/BoardMenu/BoardMenu'
import Burger from './../components/Burgers/Burger'
export default class BurgerBuilder extends Component {
    constructor(props){
        super(props)
            this.state = {
                ingredients : {
                    salad: 1,
                    cheese: 1,
                    bacon: 1,
                    meat: 1
                },
                totalPrice: 5

            }
            
    }
    ingredientPrice = {
        salad: 1,
        cheese: 1.5,
        bacon: 2,
        meat: 2
    }
    addIngredient = (type) => {
        const qty = this.state.ingredients[type]
        const updatedQty = qty + 1
        const updatedIngre = {
            ...this.state.ingredients
        }
        updatedIngre[type] = updatedQty
        const priceAdded = this.ingredientPrice[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAdded
        this.setState({
            ingredients: updatedIngre,
            totalPrice: newPrice
        })
        

    }
    lessIngredient = (type) => {
        const qty = this.state.ingredients[type];
        if (qty <= 0) {
          return;
        }
        const updatedQty = qty - 1
        const updatedIngre = {
          ...this.state.ingredients
        };
        updatedIngre[type] = updatedQty
        const priceDecrease = this.ingredientPrice[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDecrease
        this.setState({
          ingredients: updatedIngre,
          totalPrice: newPrice
        })
    }
    render() {
        return (
            <div>
                <Burger ingredients = {this.state.ingredients} />
                <BoardMenu addIngredient={this.addIngredient} 
                lessIngredients={this.lessIngredient}
                price={this.state.totalPrice}
                />
            </div>
        )
    }
}
