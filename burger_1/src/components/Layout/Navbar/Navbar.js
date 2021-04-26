import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './navbar.module.scss'


const Navbar = (props) => {
    return (
        <>
        <div className={classes.navbar}>
            <div className={classes.navbarLogo}>
                <img src={require('./../../../assets/img/logo.png').default} alt="logo"/>
            </div>
            <div className={classes.navbarItem}>
                <NavLink className={classes.navLink} activeClassName="selected" to='/'>Burger Builder</NavLink>
                <NavLink className={classes.navLink} activeClassName="selected" to='/checkout'>Checkout</NavLink>
            </div>
        </div>
        </>
    )
}

export default Navbar
