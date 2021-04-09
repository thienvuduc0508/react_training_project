import React, { Component } from 'react'
import Product from '../components/Product/Product'
import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      products: [
        {id: 1, name: 'SamSung', count: 0},
        {id: 2, name: 'Xiaomi', count: 0},
        {id: 3, name: 'Iphone', count: 0},
        {id: 4, name: 'Huawei', count: 0},
      ]
    }
  }
  increaProduct = (name) => {
    let newProd = this.state.products.map( prod => {
      if(prod.name === name){
        prod.count++
      }
      return prod;
    })
    this.setState({products : newProd})
  }

  render() {

    return (
      <div className="App">
        <h1>List Product</h1>
        {this.state.products.map( (product) => {
          return (
            <Product key={product.id} name={product.name} count={product.count} increament = {this.increaProduct}/>
          )
        })}
      </div>
    )
  }
}
