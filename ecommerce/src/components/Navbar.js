import React from 'react'
import logo from '../images/logo.svg'
import './Navbar.css'
import cart from '../images/icon-cart.svg'
import profile from '../images/image-avatar.png'

export default function Navbar() {
    return (
        <div className='container'>
            <div className='row navbar pt-4 pb-2'>
                <div className='col-2'>
                    <img src={logo} className   ="logo" alt='logo' />
                </div>
                <div className='col-8'>
                    <ul className='list-box'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='col-2'>
                    <img src={cart} className="cart ms-5" alt='cart-icon' />
                    <img src={profile} className="profile w-25 float-end" alt='profile' />
                </div>
            </div>
            <hr />
        </div>
    )
}
