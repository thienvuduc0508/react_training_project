import React, { Component } from 'react'
import BurgerBuilder from './containers/BurgerBuilder'
import Layout from './containers/Layouts/Layout' 

export default class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Layout>
         <BurgerBuilder />
        </Layout>
      </React.Fragment>
    )
  }
}

