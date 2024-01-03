//import React, { useState } from "react";
import React from 'react';
import './navbar.css';
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.png';
import circle from '../../assets/basket_circle.png';

//TODO -- put circle on top the basket, remove the menu icon to only show when required, change fonts 


const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className='navbar-logo'>
                    <img src={logo} alt="logo" />
                </div>

                <div className="navbar-logo-text">
                    <p> board</p>
                </div>
            </div>

            <div className="navbar-links">
                <div className="navbar-links_container">

                    <p> Products </p>
                    <p>Apps & Games</p>
                    <p> Features</p>
                    <p> Support </p>
                </div>
            </div>
            <div className="nvabar-links_logo">
                <div className='row'>
                    <img src={basket} alt="basket" />
                    <div className='navbar-circle'>
                        <img src={circle} alt="circle" />
                    </div>
                </div>

            </div>



        </div>
    );
}

export default Navbar

