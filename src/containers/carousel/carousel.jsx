import React from "react";
import './carousel.css';
import clearbutton from '../../assets/clear_button.svg';
import colorbutton from '../../assets/color_button.svg';
import carouselItem from '../../assets/carousel-1.svg';
import carouselItem2 from '../../assets/carousel-2.svg';
import carouselItem3 from '../../assets/carousel-3.svg';
import carouselItem4 from '../../assets/carousel-4.svg';
import carouselItem5 from '../../assets/carousel-5.svg';
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


            <div className="custom-row">


                <div className="column">

                    <div className="rev-image"></div>
                </div>

                <div className="main-image"></div>
                <div className="main-image-overlay">
                    <img src={mainImg} alt="mainImg" />
                </div>

                <div className="carousel-row">
                    <div className="img-overlay-left">
                        <div className="container-mainImage-exterioritems">
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



                    <div className="img-overlay-topleft">
                        <div className="container-mainImage-interioritems">
                            <img src={carouselItem} alt="item" />
                        </div>
                    </div>







                    <div className="img-overlay-topright">
                        <div className="container-mainImage-interioritems">
                            <img src={carouselItem} alt="item" />
                        </div>
                    </div>

                    <div className="img-overlay-right">
                        <div className="container-mainImage-exterioritems">
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
                            <img src={carouselItem5} alt="item" />
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

/*     

           */