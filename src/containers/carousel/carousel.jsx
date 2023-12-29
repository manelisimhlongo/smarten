import React from "react";
import './carousel.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';

const Carousel = () => {
    return (
        <div className="carousel-background">
            <div className="space-height"></div>
            <div className="carousel-row">
                <div className="carousel-heading-content">
                    <div className="carousel-row">

                        <div className="carousel-heading">choose your</div>
                    </div>
                    <div className="carousel-row-text">

                        <div className="carousel-heading-gradient">favourite </div>
                        <div className="space"></div>
                        <div className="carousel-heading"> games</div>
                    </div>
                </div>
            </div>


            <div className="carousel-row">
                <div className="carousel-container">

                    <div className="carousel-container-text">
                        Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.

                    </div>
                </div>
            </div>


            <div className="carousel-row">
                <div className="rev-image">

                </div>
                <div className="main-image">

                </div>
                <div className="forward-image">

                </div>
            </div>




            <div className="carousel-row">
                <div className="head-text">
                    <img src={colorbutton} alt="color" />
                    <div class='text-on-image'>
                        <div className="button-text"> view all </div>
                    </div>
                </div>

                <div className="head-text">
                    <img src={clearbutton} alt="clear" />
                    <div class='text-on-image'>
                        <div className="button-text-gradient"> play now </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Carousel;