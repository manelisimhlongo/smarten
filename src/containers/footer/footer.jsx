import React from "react";
import './footer.css';
import logo from '../../assets/logo.png'
import { NormalBanner } from "../../components";


const Footer = () => {
    return (
        <div className="footer-bg">

            <div className="footer-container">
                <div className="row">
                    <div className="footer-overlay">
                        <div className="banner-bar-row">
                            <NormalBanner />
                        </div>
                    </div>
                </div>
            </div>



            <div className="content">
                <div className="row">


                    <div className="container-heading">
                        <div className="column">
                            <div className="space-height"></div>

                            <div className="container-logo">
                                <div className="row">
                                    <div className="logo-img">

                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="logo-text">board</div>
                                </div>
                            </div>



                            <div className="footer-container">
                                <div className="footer-text">
                                    A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .
                                </div>
                            </div>
                            <div className="copyright">
                                © Copyright 2023, All Rights Reserved by board
                            </div>
                        </div>
                    </div>
                    <div className="space-width"></div>
                    <div className="space-width"></div>
                    <div className="space-width"></div>

                    <div className="container">
                        <div className="column">

                            <div className="space-height"></div>
                            <div className="footer-heading"> company</div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> products </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> apps & games </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> features </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="column">
                            <div className="space-height"></div>
                            <div className="footer-heading"> help </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> support </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> about </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> contact us </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="column">
                            <div className="space-height"></div>
                            <div className="footer-heading"> resources </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> youtube playlist </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> how to - blog </div>
                            <div className="spacing"></div>
                            <div className="footer-text-options"> terms and conditions </div>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
}

export default Footer;

/**
 *     <div className="banner-bar-row">

             

            </div>
 */