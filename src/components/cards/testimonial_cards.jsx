import React from "react";
import './cards.css';
import stars from '../../assets/stars.svg';

const TestimonialCard = ({ img, name, text, subtext }) => {
    return (
        <div className="testimonial-card">
            <div className="card-column">

                <img src={stars} alt="stars"/>
                <div className="testimonial-card-text">
                    {text}
                </div>
                <div className="testimonial-card-bar"></div>
                <div className="card-row">
                    <div className="space-25"></div>
                    <div className="avatar-img"> <img src={img} alt="" /> </div>
                    <div className="small-space-width"></div>
                    <div className="card-column">
                        <div className="sub-text">{name}</div>
                        <div className="small-space"></div>
                        <div className="sub-sub-text">{subtext}</div>
                    </div>
                    <div className="verified">
                        Verified
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TestimonialCard;