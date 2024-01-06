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
                <div className="c-column">
                    <div className="rev-image"></div>
                </div>

                <div className="carousel-container2">
                    <div className="main-img-container">
                        <div className="carousel-row">
                            <div className="main-image">

                                <div className="c-row">
                                    {/*above the carousel --right */}
                                    <div className="img-overlay-aboveright">

                                        <div className="container-mainImage-interioritems">
                                            <div className="row">
                                                <img src={carouselItem12} alt="item" />
                                                <img src={carouselItem12} alt="item" />
                                                <img src={carouselItem12} alt="item" />
                                                <img src={carouselItem12} alt="item" />
                                                <img src={carouselItem12} alt="item" />
                                            </div>
                                        </div>

                                    </div>

                                    {/*above the carousel --left */}
                                    <div className="img-overlay-aboveleft">

                                        <div className="container-mainImage-interioritems">
                                            <div className="row">
                                                <img src={carouselItem13} alt="item" />
                                                <img src={carouselItem13} alt="item" />
                                                <img src={carouselItem13} alt="item" />
                                                <img src={carouselItem13} alt="item" />
                                                <img src={carouselItem13} alt="item" />
                                            </div>
                                        </div>

                                    </div>

                                    {/*line in the center --right */}
                                    <div className="img-overlay-topright-center">
                                        <img src={carouselItem7} alt="item" />
                                    </div>

                                    {/* top center line*/}
                                    <div className="main-image-topcenter-overlay">
                                        <div className="container-mainImage-interioritems">
                                            <img src={carouselItem11} alt="item" />
                                        </div>
                                    </div>

                                    {/* center circle above img*/}
                                    <div className="img-overlay-centercircle">
                                        <img src={carouselItem14} alt="item" />
                                    </div>

                                    {/* center circle above img*/}
                                    <div className="img-overlay-centercircle2">
                                        <img src={carouselItem17} alt="item" />
                                    </div>

                                    {/*line in the center --left */}
                                    <div className="img-overlay-topleft-center">
                                        <img src={carouselItem2} alt="item" />
                                    </div>

                                    {/*top left item*/}
                                    <div className="img-overlay-topleft">
                                        <div className="container-mainImage-interioritems">
                                            <img src={carouselItem} alt="item" />
                                        </div>
                                    </div>

                                    {/*line in the bottom --left */}
                                    <div className="img-overlay-bottomleft">
                                        <img src={carouselItem15} alt="item" />
                                    </div>

                                    {/* line in the bottom left corner*/}
                                    <div className="img-overlay-leftcorner">
                                        <img src={carouselItem3} alt="item" />
                                    </div>



                                    {/* line in the bottom right corner*/}
                                    <div className="img-overlay-rightcorner">
                                        <img src={carouselItem8} alt="item" />

                                    </div>

                                    {/*top right item */}
                                    <div className="img-overlay-topright">
                                        <img src={carouselItem} alt="item" />
                                    </div>


                                    {/*line in the bottom --right */}
                                    <div className="img-overlay-bottomright">
                                        <img src={carouselItem16} alt="item" />
                                    </div>

                                    {/* bottom row of slashes*/}
                                   

                                        <div className="img-overlay-bottom-center">


                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />

                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem9} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />
                                            <div className="space-width"></div>
                                            <img src={carouselItem10} alt="item" />





                               
                                    </div>



                                    <div className="c-column">

                                        {/*left exterior overlay */}
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
                                                <img src={carouselItem4} alt="item" />
                                            </div>

                                        </div>


                                        <img src={mainImg} alt="mainImg" />



                                        {/*bottom container with text */}
                                        <div className="main-image-bottom-overlay">

                                            <img src={carouselItem6} alt="" />
                                            <div className="text-overlay">

                                                <div className="center-text">
                                                    sneak peeks
                                                </div>
                                            </div>
                                        </div>





                                        {/*right hand column banner */}
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
                                                <img src={carouselItem5} alt="item" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
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