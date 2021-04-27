import React from 'react';
import classes from './contact.module.scss';
import {withRouter} from 'react-router-dom'; 
const Contact = (props) => {
    return (
        <div className={classes.contactForm}>
            <form className={classes.formContact}>
                <h3>Contact Form</h3>
                <div className={classes.formControl}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Your name' />
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Street</label>
                <input type="text" placeholder='Your Street' />
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Your Email' />
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Zip Code</label>
                <input type="text" placeholder='Your zip code'  />
                </div>
                <div className={classes.formControl}>
                <label htmlFor="">Delivery Method</label>
                <select>
                    <option value="">Fastest</option>
                    <option value="">Normal</option>
                </select>
                <div className={classes.btnButton}>
                    <button className={classes.btnCancel} onClick={()=> props.history.goBack()}>Cancel</button>
                    <button className={classes.btnComplete}>Complete</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Contact)
