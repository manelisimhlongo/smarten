import React from "react";
import './cards.css';
import stars from '../../assets/stars.svg';
//import tick from '../../assets/tick.svg';
import verification from '../../assets/verification.svg';
import bar1 from '../../assets/testimonial-bar1.png';
import bar2 from '../../assets/testimonial-bar2.png';

const TestimonialCard = ({ img, name, text, subtext }) => {
    return (
        <div className="testimonial-card">
            <div className="row">
                <img src={bar1} alt="" />
                <div className="space-25"></div>
                <img src={bar2} alt="" />
            </div>

            <div className="card-column">
                <div className="star-container">

                    <img src={stars} alt="stars" />
                </div>
                <div className="row">

                    <div className="testimonial-card-text">
                        {text}
                    </div>
                </div>
                <div className="space-18"></div>
                <div className="row">
                    <div className="testimonial-card-bar"></div>
                </div>

                <div className="space-18"></div>


                <div className="row">
                    <div className="space-35"></div>
                    <div className="avatar-img"> <img src={img} alt="" /> </div>
                    <div className="small-space-width"></div>
                    <div className="card-column">
                        <div className="sub-text">{name}</div>
                        <div className="small-space"></div>
                        <div className="sub-sub-text">{subtext}</div>
                    </div>

                    <div className="row">
                        <div className="container">

                            <img src={verification} alt="verification" >


                            </img>
                        </div>
                        <div className="verified">
                            Verified
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default TestimonialCard;