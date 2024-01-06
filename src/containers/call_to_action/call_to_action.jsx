import React from "react";
import './call_to_action.css';
import person from '../../assets/call_to_action.png';
import clearbutton from '../../assets/clear_button.svg';
import { NormalBanner } from "../../components";

const Action = () => {
    /*const handleClick = () => {
        console.log('Button was clicked!');
    };*/
    return (
        <div className="cta-background">
            <div className="cta-column">

                <div className="space-20h"></div>
                <div className="space-20w"></div>
                <div className="cta-row">

                    <div className="cta-container">
                        <div className="cta-row">
                            <div className="cta-column">
                                <div className="img-overlay">
                                    <div className="cta-image">

                                        <img src={person} alt="person"></img>
                                    </div>
                                </div>

                            </div>
                            <div className="space-20w"></div>
                            <div className="space-20w"></div>
                            <div className="space-20w"></div>


                            <div className="cta-column">
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="cta-heading-container">
                                    <div className="cta-heading">discover the</div>
                                    <div className="cta-row-heading">
                                        <div className="cta-heading-gradient">virtual </div>
                                        <div className="space-10w"></div>
                                        <div className="cta-heading">reality </div>
                                    </div>
                                    <div className="cta-heading">gaming </div>
                                </div>

                                <div className="cta-subheading-container">
                                    <div className="cta-subheading">
                                        A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
                                    </div>
                                </div>
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="space-10h"></div>
                                <div className="row-button">
                                    <div className="button-container">
                                        <img src={clearbutton} alt="clearbutton" />
                                        <div className="overlay-buttontext">
                                            Play now
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>



                    </div>


                </div>
                <div className="space-20h"></div>
                <NormalBanner />
            </div>



        </div>
    );
}

export default Action;

