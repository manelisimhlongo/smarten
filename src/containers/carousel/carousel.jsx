import React from "react";
import './carousel.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';
import carouselItem from '../../assets/carousel-1.svg';
import carouselItem2 from '../../assets/carousel-2.svg';
import carouselItem3 from '../../assets/carousel-3.svg';
import carouselItem4 from '../../assets/carousel-4.svg';
import carouselItem5 from '../../assets/carousel-5.svg';
import carouselItem6 from '../../assets/carousel-6.png';
import carouselItem7 from '../../assets/carousel-7.svg';
import carouselItem8 from '../../assets/carousel-8.svg';
import carouselItem9 from '../../assets/carousel-9.svg';
import carouselItem10 from '../../assets/carousel-10.svg';
import carouselItem11 from '../../assets/carousel-11.png';
import carouselItem12 from '../../assets/carousel-12.svg';
import carouselItem13 from '../../assets/carousel-13.svg';
import carouselItem14 from '../../assets/carousel-14.svg';
import carouselItem15 from '../../assets/carousel-15.png';
import carouselItem16 from '../../assets/carousel-16.svg';
import carouselItem17 from '../../assets/carousel-17.svg';
import carouselItem18 from '../../assets/carousel-18.svg';
import carouselItem19 from '../../assets/carousel-19.png';
import mainImg from '../../assets/game_couresel_1.jpeg';

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

            <div className="space-height"></div>

            <div className="custom-row">
                <div className="column">
                    <div className="rev-image"></div>
                </div>

                <div className="carousel-row">
                    <div className="main-image">

                        <div className="main-img-container">
                            {/* left column banner*/}
                            <div className="img-overlay-left">
                                <div className="column">
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                    <img src={carouselItem4} alt="item" />
                                </div>


                            </div>
                            <img src={mainImg} alt="mainImg" />

                        </div>



                    </div>
                </div>






                <div className="column">
                    <div className="forward-image"></div>
                </div>
            </div>












            <div className="space-height"></div>
            <div className="carousel-row">
                <div className="button-container">
                    <img src={colorbutton} alt="color" />
                    <div class='text-overlay'>
                        <div className="button-text"> view all </div>
                    </div>
                </div>

                <div className="button-container">
                    <img src={clearbutton} alt="clear" />
                    <div class='text-overlay'>
                        <div className="button-text-gradient"> play now </div>
                    </div>
                </div>
            </div>
            <div className="space-height"></div>
        </div>
    );
}

export default Carousel;