import React from "react";
import './carousel.css';

const Carousel = () => {
    return (
        <div className="carousel-background">
            <div className="carousel-heading-content">
                <div className="carousel-row">

                    <div className="carousel-heading">choose your</div>
                </div>
                <div className="carousel-row">

                    <div className="carousel-heading-gradient">favourite</div>

                    <div className="carousel-heading">games</div>
                </div>
            </div>


            <div className="carousel-container">

                <div className="carousel-container-text">
                    Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.

                </div>
            </div>

            <div className="carousel-row"></div>
            <div className="rev-image">

            </div>
            <div className="main-image">

            </div>
            <div className="forward-image">

            </div>



            <div className="carousel-buttons">
                <div className="color-button">               </div>
                <div className="clear-button"></div>
            </div>
        </div>
    );
}

export default Carousel;