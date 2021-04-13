import React, { Component } from 'react'
import BoardMenu from '../components/BoardMenu/BoardMenu'
import Burger from './../components/Burgers/Burger'
export default class BurgerBuilder extends Component {
    constructor(props){
        super(props)
            this.state = {
                ingredients : {
                    salad: 1,
                    cheese: 2,
                    bacon: 1,
                    meat: 2
                }

            }
            
    }
    render() {
        return (
            <div>
                <Burger ingredients = {this.state.ingredients} />
                <BoardMenu />
            </div>
        )
    }
}
