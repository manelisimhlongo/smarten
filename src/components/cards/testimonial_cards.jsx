import React from "react";
import './cards.css';
import stars from '../../assets/stars.svg';
import tick from '../../assets/tick.svg';
import verification from '../../assets/verification.svg';
import bar1 from '../../assets/testimonial-bar1.png';
import bar2 from '../../assets/testimonial-bar2.png';

const TestimonialCard = ({ img, name, text, subtext }) => {
    return (
        <div className="testimonial-card">




            <div className="overlay-0">
                <div className="row">
                    <img src={bar1} alt="" />
                    <div className="space-35w"></div>
                    <img src={bar2} alt="" />
                </div>
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
                <div className="space-18h"></div>
                <div className="row">
                    <div className="testimonial-card-bar"></div>
                </div>

                <div className="space-18h"></div>


                <div className="card-row">
                    <div className="space-35w"></div>
                    <div className="avatar-img"> <img src={img} alt="img" /> </div>
                    <div className="space-10w"></div>

                    <div className="space-25w"></div>
                    <div className="card-column">
                        <div className="sub-text">{name}</div>
                        <div className="space-8h"></div>
                        <div className="sub-sub-text">{subtext}</div>
                    </div>
                    <div className="space-35w"></div>
                    <div className="space-35w"></div>
                    <div className="space-35w"></div>
                    <div className="space-35w"></div>
                    <div className="space-35w"></div>


                    <img src={verification} alt="verification" />
                    <div className="overlay-tick">
                    <img src={tick} alt="tick" />
                    </div>


                    <div className="card-column">
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