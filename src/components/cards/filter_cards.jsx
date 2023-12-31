
import React from "react";
import './cards.css';
import ColorButton from "../buttons/color_button";

const FilterCard = ({ img, mainImg, subtext, subsubtext }) => {
    return (
        <div className="filter-card">
            <div className="card-column">
   
                    <div className="image-container">
                        <img src={mainImg} alt="mainImage" />
                    </div>
           

                <div className="heading-text">Core Philosophies</div>
                <div className="card-row">
                    <div className="avatar-img">{img}</div>
                    <div className="card-column">
                        <div className="sub-text">{subtext}</div>
                        <div className="sub-sub-text">{subsubtext}</div>
                    </div>
                </div>
                <ColorButton text={'Live Demo'} />

            </div>
        </div>
    );
}

export default FilterCard;