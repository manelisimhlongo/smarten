
import React from "react";
import './cards.css';
import ColorButton from "../buttons/color_button";

const FilterCard = ({ img, mainImg, subtext, subsubtext }) => {
    return (
        <div className="filter-card">
            <div className="card-column">
                <div className="space-20"></div>
                <div className="card-row-img">
                    <div className="image-container">
                        <img src={mainImg} alt="mainImage" />
                    </div>
                </div>

                <div className="space-30"></div>
                <div className="card-row">
                    <div className="space-25"></div>
                    <div className="heading-text">Core Philosophies</div>
                </div>

                <div className="space-18"></div>
                <div className="card-row">
                    <div className="space-25"></div>
                    <div className="avatar-img"> <img src={img} alt="" /> </div>
                    <div className="small-space-width"></div>
                    <div className="card-column">
                        <div className="sub-text">{subtext}</div>
                        <div className="small-space"></div>
                        <div className="sub-sub-text">{subsubtext}</div>
                    </div>
                </div>
                <div className="space-20"></div>
                <div className="row">
                    <ColorButton text={'Live Demo'} />
                </div>

            </div>
        </div>
    );
}

export default FilterCard;