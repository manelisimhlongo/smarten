import React from "react";
import './banner.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';
import { Navbar, NormalBanner } from '../../components';
import img1 from '../../assets/200+.png';
import img2 from '../../assets/300+.png';
import img3 from '../../assets/500+.png';
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
                    <div className="space-180w"></div>
                    <div className="space-180w"></div>
                    <div className="space-180w"></div>
                    <div className="space-180w"></div>
                    <div className="space-15w"></div>
                    <div className="space-15w"></div>
                    <div className="space-15w"></div>
                </div>
                <div className="banner-heading-text">new world</div>
            </div>
            <div className="banner-row">
                <div className="banner-secondary-content">
                    <div className="banner-container-text">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.  </div>

                </div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
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


                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>

            </div>

            <div className="space-10h"></div>
            <div className="space-10h"></div>
            <div className="space-10h"></div>

            <div className="banner-row">
                <div className="space-31w"></div>
                <div className="space-31w"></div>

                <div className="space-31w"></div>
                <div className="banner-columns">
                    <div className="info-container">
                        <img src={img2} alt="300+" />
                        <div className="banner-extra-subtext">Unique Style</div>
                    </div>
                </div>
                <div className="space-31w"></div>
                <div className="banner-columns">
                    <div className="info-container">
                        <img src={img1} alt="200+" />
                        <div className="banner-extra-subtext">Projects Finished</div>
                    </div>
                </div>

                <div className="space-31w"></div>
                <div className="banner-columns">
                    <div className="info-container">
                        <img src={img3} alt="500+" />
                        <div className="banner-extra-subtext">Happy Customers</div>
                    </div>

                </div>

                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
                <div className="space-180w"></div>
            </div>

            <div className="space-10h"></div>

            <div className="space-10h"></div>



            <div className="banner-bar">
                <div className="banner-row">
                    <div className="banner-text-overlay">
                        <NormalBanner />
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Banner;