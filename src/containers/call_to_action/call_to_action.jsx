import React from "react";
import './call_to_action.css';
import person from '../../assets/call_to_action.png';
import clearbutton from '../../assets/clear_button.svg';
import { NormalBanner } from "../../components";
import { useState } from "react";

const Action = () => {


    const [showColor, setColor] = useState(false);
    const [showClear, setClear] = useState(false);

    const colorClick = () => {
        console.log('Clear Button on Banner Page was clicked');
    }
    const clearClick = () => {
        console.log('Color Button on Banner Page was clicked');
    }

    return (

        
        <main className="cta-background">
            <div className="c-column">

             
                <section className="cta-row">

                    <div className="cta-container">
                        <div className="cta-row">
                            <div className="cta-column">
                                <div className="img-overlay">
                                    <div className="cta-image">

                                        <img src={person} alt="person"></img>
                                    </div>
                                </div>

                            </div>

                          


                            <div className="cta-column">
                           
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


                </section>
            
                <NormalBanner />
            </div>

        </main>
    );
}

export default Action;

