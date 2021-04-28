import React from 'react';
import './register.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

 const Register = (props) =>  {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirm_password: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
      .min(2, 'Full Name too short!')
      .max(10, 'Maximun 15 characters!')
      .required('Full Name is required!'),
      email: Yup.string()
      .email('Invalid Email')
      .required('Email is required!'),
      password: Yup.string()
      .min(6, 'Password length at least 6 characters long!'),
      confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Password is not match!').required('Required!')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  
    return (      
      <div className='Register-form'>
          <h2>Create Account</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' value={formik.values.fullName} onChange={formik.handleChange} />
              {formik.errors.fullName && formik.touched.fullName && <p>{formik.errors.fullName}</p>  }
            </div>
            <div className='form-control'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange} />
              {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>  }
            </div>             
            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
              {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>  } 
            </div> 
            <div className='form-control'>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type='password' name='confirm_password' value={formik.values.confirm_password} onChange={formik.handleChange} />
              {formik.errors.confirm_password && formik.touched.confirm_password && <p>{formik.errors.confirm_password}</p>  }            
            </div> 
            <div className='submit'>
              <button type='submit'>Submit</button>
            </div>
          </form>
      </div>
    );
  }
export default Register
