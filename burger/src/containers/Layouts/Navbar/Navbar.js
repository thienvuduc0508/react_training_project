import React from 'react'
import './Navbar.css'
 const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-logo">Logo</div>
                <div className="navbar-item">
                    <li>Burger Builder</li>
                    <li>Checkout</li>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Navbar;