
import React from "react";
import './cards.css';
import colorbutton from '../../assets/colorful-long-button.png';

const FilterCard = ({ img, mainImg, subtext, subsubtext }) => {
    return (
        <div className="filter-card">
            <div className="card-column">
                <div className="space-20h"></div>
                <div className="card-row-img">
                    <div className="image-container">
                        <img src={mainImg} alt="mainImage" />
                    </div>
                </div>
                <div className="space-30h"></div>
                <div className="card-row">
                    <div className="space-25w"></div>
                    <div className="heading-text">Core Philosophies</div>
                </div>
                <div className="space-18h"></div>
                <div className="card-row">
                    <div className="space-25w"></div>
                    <div className="avatar-img"> <img src={img} alt="" /> </div>
                    <div className="space-10w"></div>
                    <div className="card-column">
                        <div className="sub-text">{subtext}</div>
                        <div className="space-8h"></div>
                        <div className="sub-sub-text">{subsubtext}</div>
                    </div>
                </div>
                <div className="space-20h"></div>
                <div className="centered-row">
                    <div className="button-container">
                        <img src={colorbutton} alt="color" />

                        <div className="overlay"> Live Demo </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterCard;