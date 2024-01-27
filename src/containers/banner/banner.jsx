import React from "react";
import './banner.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';
import { Navbar, NormalBanner } from '../../components';
import img1 from '../../assets/200+.png';
import img2 from '../../assets/300+.png';
import img3 from '../../assets/500+.png';
import { useState } from "react";

const Banner = () => {

    const [showColor, setColor] = useState(false);
    const [showClear, setClear] = useState(false);

    const colorClick = () => {
        console.log('Clear Button on Banner Page was clicked');
    }
    const clearClick = () => {
        console.log('Color Button on Banner Page was clicked');
    }

    return (

        <main className="banner-section">
            <div className="page-img"></div>
            <div className="banner-blur"></div>
            <Navbar />
            <div className="banner-heading-content">
                <div className="banner-heading-text">let your </div>
                <div className="banner-row">

                    <div className="banner-heading-text">mind </div>
                    <div className="space"></div>
                    <div className="banner-heading-gradient-text">explore</div>

                </div>
                <div className="banner-heading-text">new world</div>
            </div>
            <div className="p-banner-row">
                <div className="banner-secondary-content">
                    <div className="banner-container-text">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.  </div>

                </div>

            </div>


            <div className="button-banner-row">
                <div className="button-container">
                    <img src={colorbutton} alt="color-button" onClick={colorClick} style={{ opacity: showColor ? 0.5 : 1 }} onMouseEnter={() => setColor(true)}
                        onMouseLeave={() => setColor(false)} />
                    <div class='text-overlay'>
                        <div className="button-text" > Buy now </div>
                    </div>
                </div>

                <div className="button-container">
                    <img src={clearbutton} alt="clear-button" onClick={clearClick} style={{ opacity: showClear ? 0.5 : 1 }} onMouseEnter={() => setClear(true)}
                        onMouseLeave={() => setClear(false)} />
                    <div class='text-overlay'>
                        <div className="button-text-gradient" > play now </div>
                    </div>
                </div>




            </div>



            <div className="items-banner-row">


            
                <div className="banner-columns">
                    <div className="info-container">
                        <img src={img2} alt="300+" />
                        <div className="banner-extra-subtext">Unique Style</div>
                    </div>
                </div>

                <div className="banner-columns">
                    <div className="info-container">
                        <img src={img1} alt="200+" />
                        <div className="banner-extra-subtext">Projects Finished</div>
                    </div>
                </div>

                
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




            <div className="banner-bar">
                <div className="banner-row">
                    <div className="banner-text-overlay">
                        <NormalBanner />
                    </div>
                </div>
            </div>
        </main>


    );
}

export default Banner;