import React, { Component } from 'react'
import Burger from './../components/Burgers/Burger'
import Order from './../components/Orders/Orders'
export default class BurgerBuilder extends Component {
    render() {
        return (
            <div>
                <Burger />
                <Order />
            </div>
        )
    }
}
