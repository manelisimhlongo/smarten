import React from "react";
import './footer.css';
import star from '../../assets/star.svg';
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <div className="footer-bg">


            <div className="banner-bar-row">

                <div className="banner-bar-text">Game Spanning</div>

                <img src={star} alt="star" />
                <div className="banner-bar-text">Action - Packed</div>
                <img src={star} alt="star" />
                <div className="banner-bar-text">Mind Bending</div>
                <img src={star} alt="star" />
                <div className="banner-bar-text">collection og games</div>
            </div>

            <div className="content">
                <div className="row">
                    <div className="column">
                        <div className="row">
                            <img src={logo} alt="logo" />
                            <div className="logo-text">board</div>
                        </div>

                        <div className="footer-container">
                            <div className="footer-text">
                                A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .
                            </div>
                        </div>
                        <div className="space-height"></div>
                        <div className="copyright">
                            © Copyright 2023, All Rights Reserved by board
                        </div>
                    </div>

                    <div className="column">
                        <div className="footer-heading"> company</div>
                        <div className="footer-text"> products </div>
                        <div className="footer-text"> apps & games </div>
                        <div className="footer-text"> features </div>
                    </div>
                    <div className="column">
                        <div className="footer-heading"> help </div>
                        <div className="footer-text"> support </div>
                        <div className="footer-text"> about </div>
                        <div className="footer-text"> contact us </div>
                    </div>
                    <div className="column">
                        <div className="footer-heading"> resources </div>
                        <div className="footer-text"> youtube playlist </div>
                        <div className="footer-text"> how to - blog </div>
                        <div className="footer-text"> terms and conditions </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Footer;