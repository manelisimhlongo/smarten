import React from "react";
import './banner.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';
import { Navbar, NormalBanner } from '../../components';
const Banner = () => {


    return (
        <div className="banner-section">
            <div className="page-img"></div>
            <div className="banner-blur"></div>
            <Navbar />
            <div className="banner-heading-content">
                <div className="banner-heading-text">let your </div>
                <div className="banner-row">

                    <div className="banner-heading-text">mind </div>
                    <div className="space"></div>
                    <div className="banner-heading-gradient-text">explore</div>
                    <div className="space-180"></div>
                    <div className="space-180"></div>
                    <div className="space-180"></div>
                    <div className="space-180"></div>
                </div>
                <div className="banner-heading-text">new world</div>
            </div>
            <div className="banner-row">
                <div className="banner-secondary-content">
                    <div className="banner-container-text">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.  </div>

                </div>
                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>
            </div>


            <div className="banner-row">
                <div className="button-container">
                    <img src={colorbutton} alt="color" />
                    <div class='text-overlay'>
                        <div className="button-text"> Buy now </div>
                    </div>
                </div>

                <div className="button-container">
                    <img src={clearbutton} alt="clear" />
                    <div class='text-overlay'>
                        <div className="button-text-gradient"> play now </div>
                    </div>
                </div>


                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>

            </div>

            <div className="space-10h"></div>
            <div className="space-10h"></div>
            <div className="space-10h"></div>

            <div className="banner-row">
                <div className="banner-columns">
                    <div className="info-container">
                        <div className="banner-extra-text">300+</div>
                        <div className="banner-extra-subtext">Unique Style</div>
                    </div>
                </div>
                <div className="space-31"></div>
                <div className="banner-columns">
                    <div className="info-container">
                        <div className="banner-extra-text-gradient">200+</div>
                        <div className="banner-extra-subtext">Projects Finished</div>
                    </div>
                </div>

                <div className="space-31"></div>
                <div className="banner-columns">
                    <div className="info-container">
                        <div className="banner-extra-text">500+</div>
                        <div className="banner-extra-subtext">Happy Customers</div>
                    </div>

                </div>

                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>
                <div className="space-180"></div>
            </div>

            <div className="space-10h"></div>

            <div className="space-10h"></div>



            <div className="banner-bar">
                <div className="row">

                    <div className="column">
                        <div className="space-10h"></div>
                        <div className="space-10h"></div>
                        <NormalBanner />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;