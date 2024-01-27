//import React, { useState } from "react";
import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import basket from '../../assets/basket.png';

//TODO -- put circle on top the basket, remove the menu icon to only show when required, change fonts 


const Navbar = () => {
  
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className='navbar-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='space'></div>
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



            <div className="basket-container">

                <img src={basket} alt="basket" />
                <div className="last-container"></div>



            </div>






        </div>
    );
}

export default Navbar

