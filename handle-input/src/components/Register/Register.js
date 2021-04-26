import React, { Component } from 'react';
import {isEmail, isEmpty} from 'validator';
import './register.css'

export default class Register extends Component {

    constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: 'Full Name must be required!',
        email: 'Email is not valid!',
        password: 'Password must be 6 characters long!',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'fullName': 
        errors.fullName = isEmpty(value) ? 'Full Name must be requied!' : '';
        break;
      case 'email': 
        errors.email = isEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = value.length < 6 ? 'Password must be 6 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({
        [name]: value,
        errors
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).map(val => val.length > 0 && (valid = false));
        return valid;
      }
     validateForm(this.state.errors) ? alert('Form is Valid') : alert('Form is Invalid');
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='Register-form'>
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='form-control'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            </div>
              {errors.fullName.length > 0 && 
                <div className='error'>{errors.fullName}</div>}
            <div className='form-control'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange}  />
            </div>
              {errors.email.length > 0 && 
                <div className='error'>{errors.email}</div>}
            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>
              {errors.password.length > 0 && 
                <div className='error'>{errors.password}</div>}
            <div className='submit'>
              <button type='submit'>Submit</button>
            </div>
          </form>
      </div>
    );
  }
}
