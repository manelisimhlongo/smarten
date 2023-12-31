//import React, { useState } from "react";
import React from 'react';
import './navbar.css';
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import basket from '../../assets/basket.png';
//import circle from '../../assets/basket_circle.png';

//TODO -- put circle on top the basket, remove the menu icon to only show when required, change fonts 

/*const Menu = () => {
    <div className="navbar-links_container">

        <p><a href="#products"> Products</a> </p>
        <p><a href="#apps"> Apps & Games</a> </p>
        <p><a href="#features"> Features</a> </p>
        <p><a href="#support"> Support</a> </p>
    </div>
}*/

const Navbar = () => {
  /*  const divStyle = {
        backgroundColor: 'var(--1, lightgray)',
        backgroundSize: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };*/
   // const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className='navbar-logo'>
                    <img src={logo} alt="logo" />
                </div>

                <div className="navbar-text">
                    <p> board</p>
                </div>
            </div>

            <div className="navbar-links">



                <div className="navbar-links_container">
                    <p><a href="#products"> Products</a> </p>
                    <p><a href="#apps"> Apps & Games</a> </p>
                    <p><a href="#features"> Features</a> </p>
                    <p><a href="#support"> Support</a> </p>
                </div>
            </div>
            <div className="nvabar-links_logo">
                <img src={basket} alt="basket" />
            </div>

        </div>
    );
}

export default Navbar

/**
 *  <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (

                    <div className="gpt3__navbar-menu_container-links">
                        <Menu />
                    </div>

                )}
            </div>
 */