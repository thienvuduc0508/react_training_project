import React, { useState } from 'react';
import './register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        isAgree: false,
        gender: '',
        username: '',
        email: '',
        phone: '',
        role: 'user',   
    });
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='Register-form'>
            <h1>Register User</h1>
            <form>
            <div className='form-control'>
                <label> Username </label>
                <input type="text" name="username" onChange={handleChange} />
            </div>
            <div className='form-control'>
                <label> Email </label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type="number" name="phone" onChange={handleChange} />
            </div>
            <div className='form-select'>
                <label>Role</label>
                <select onChange={handleChange} value={formData.role} name='role'>
                    <option value="admin" >Admin</option>
                    <option value="user" >User</option>
                </select>
            </div>
            <div className='form-radio'>
                <label>Gender</label>
                <span>Male</span>
                <input type="radio" name="gender" value='male' onChange={handleChange} checked={formData.gender==='male'}/>
                <span>Female</span>
                <input type="radio" name="gender" value='female' onChange={handleChange} checked={formData.gender==='female'} />
            </div>
            <div className='form-control'>
                Password:
                 <input type="Password"  name="password" onChange={handleChange} />
            </div>
              <div className='form-control'>
                Re-type password:
                <input type="Password"  name="repassword" onChange={handleChange} />
              </div>
              <div className='form-checkbox'>
                  <input type="checkbox" name="isAgree" id='agree' onChange={handleChange} checked={formData.isAgree}/>
                  <label htmlFor='agree'>I gree to the Terms of User</label>
              </div>
              <div className='btnSubmit'>
                <input type="button" value="Submit" onSubmit={handleSubmit}/>
              </div>
            </form>
        </div>
    )
}

export default Register
