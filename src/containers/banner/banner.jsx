import React from "react";
import './banner.css';
import background from '../../assets/dashboard_image.png';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';


const myStyle = {
    backgroundImage: `url(${background}) lightgray -91.869px 41.66px / 102.737% 92.356% no-repeat`,
    mixBlendMode: 'color-dodge'
};




const Banner = () => {


    return (
        <div style={{ myStyle }}>
            <div className="banner-section">

                <div className="banner-heading-text">let your mind</div>
                <div className="banner-heading-gradient-text">explore</div>
                <div className="banner-heading-text">new world</div>


                <div className="banner-container-text">Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.  </div>
                <div className="banner-buttons">
                    <img src={clearbutton} alt="clear" />
                    <img src={colorbutton} alt="color" />
                </div>



                <div className="banner-columns">
                    <div className="banner-extra-text">300+</div>
                    <div className="banner-extra-subtext">Unique Style</div>

                </div>

                <div className="banner-columns">
                    <div className="banner-extra-text-gradient">200+</div>
                    <div className="banner-extra-subtext">Projects Finished</div>

                </div>

                <div className="banner-columns">
                    <div className="banner-extra-text">500+</div>

                    <div className="banner-extra-subtext">Happy Customers</div>

                </div>

                <div className="banner-bar">
                    <a>Game Spanning</a>
                    <a>Action - Packed</a>
                    <a>Mind Bending</a>

                    <a>collection og games</a>
                </div>
            </div>
        </div>






    );
}

export default Banner;