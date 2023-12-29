import React from "react";
import './call_to_action.css';
import clearbutton from '../../assets/clear_button.svg';
import person from '../../assets/call_to_action.png';

const Action = () => {
    return (
        <div className="cta-background">
            <div className="cta-container">

                <div className="cta-row">
                   
                    <div className="cta-column">
                        <div className="cta-heading-container">
                            <div className="cta-heading">discover the</div>
                            <div className="cta-row">
                                <div className="cta-heading-gradient">virtual </div>
                                <div className="cta-heading">reality </div>
                            </div>
                            <div className="cta-heading">gaming </div>
                        </div>

                        <div className="cta-subheading-container">
                            <div className="cta-subheading">
                                A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immersive nature of gaming.
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


            </div>
            <div className="cta-banner">

            </div>

        </div>
    );
}

export default Action;