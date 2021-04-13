import React from 'react'
import './Navbar.css'
import logo from './../../../assets/images/logo.png'
 const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbarLogo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar-item">
                    <li>Burger Builder</li>
                    <li>Checkout</li>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Navbar;