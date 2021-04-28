import React from 'react';
import classes from './contact.module.scss';
import {withRouter} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../../axios'
const Contact = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            street: '',
            email: '',
            zipcode: '',
            delivery: 'fastest'
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, 'Name too short!').max(15, 'Name too long!').required('Name is required!'),
            street: Yup.string().min(5, 'Street adress need exactly!').max(50, 'Street adress need exactly!').required('Street is required!'),
            email: Yup.string().email('Invalid email!').required('Email is required!'),
            zipcode: Yup.string()
            .required('Zip Code is required!')
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits')
        }),
        onSubmit: contact => {
            const data = {
                burgerElements: props.burgerElements,
                totalPrice: props.price
            }
            axios.post('/orders.json', {contact, data}).then((res)=> {
                    alert('order success')
                }).catch(err =>{
                    console.log(err);
                });
            
        }
    })
    
    return (
        <div className={classes.contactForm}>
            <form className={classes.formContact} onSubmit={formik.handleSubmit}>
                <h3>Contact Form</h3>
                <div className={classes.formControl}>
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Your name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && formik.touched.name && <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.name}</p>}
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Street</label>
                <input type="text" name='street' placeholder='Your Street' value={formik.values.street} onChange={formik.handleChange} />
                {formik.errors.street && formik.touched.street && <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.street}</p>}
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Email</label>
                <input type="text" name='email' placeholder='Your Email' value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email && <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.email}</p>}
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Zip Code</label>
                <input type="text" name='zipcode' placeholder='Your zip code'  value={formik.values.zipcode} onChange={formik.handleChange} />
                {formik.errors.zipcode && formik.touched.zipcode && <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.zipcode}</p>}
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Delivery Method</label>
                <select name='delivery' value={formik.values.delivery} onChange={formik.handleChange}>
                    <option value="fastest">Fastest</option>
                    <option value="normal">Normal</option>
                </select>
                <div className={classes.btnButton}>
                    <button className={classes.btnCancel} onClick={() => {props.history.goBack()}}>Cancel</button>
                    <button type='submit' className={classes.btnComplete}>Complete</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Contact)
