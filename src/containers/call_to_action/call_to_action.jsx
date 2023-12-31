import React from "react";
import './call_to_action.css';
import clearbutton from '../../assets/clear_button.svg';
import person from '../../assets/call_to_action.png';
import ClearButton from '../../components/buttons/clear_button';
import ColorButton from '../../components/buttons/color_button';
import star from '../../assets/star.svg';

const Action = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
    };
    return (
        <div className="cta-background">
            <div className="ct-column">
                <div className="cta-container">

                    <div className="cta-row">
                        <div className="cta-column">
                            <div className="cta-image">

                                <img src={person} alt="person"></img>
                            </div>
                            <div className="space-height"></div>
                        </div>

                        <div className="cta-column">

                            <div className="cta-heading-container">
                                <div className="cta-heading">discover the</div>
                                <div className="cta-row-heading">
                                    <div className="cta-heading-gradient">virtual </div>
                                    <div className="space-width"></div>
                                    <div className="cta-heading">reality </div>
                                </div>
                                <div className="cta-heading">gaming </div>
                            </div>

                            <div className="cta-subheading-container">
                                <div className="cta-subheading">
                                    A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
                                </div>
                            </div>
                            <div className="space-height"></div>
                            <ClearButton text={'Play Now'} />
                        </div>

                    </div>

                </div>
                <div className="space-height"></div>
                <div className="banner-bar-row">

                    <div className="banner-bar-text">Game Spanning</div>

                    <img src={star} alt="star" />
                    <div className="banner-bar-text">Action - Packed</div>
                    <img src={star} alt="star" />
                    <div className="banner-bar-text">Mind Bending</div>
                    <img src={star} alt="star" />
                    <div className="banner-bar-text">collection og games</div>
                </div>
            </div>



        </div>
    );
}

export default Action;