


import React from "react";
import './banner.css';
import star from "../../assets/star.svg";

const SlantedBanner = () => {
    return (
        <div className="banner-row">
            <div className="banner-bar-text">Game Spanning</div>

            <img src={star} alt="star" />
            <div className="banner-bar-text">Action - Packed</div>
            <img src={star} alt="star" />
            <div className="banner-bar-text">Mind Bending</div>
            <img src={star} alt="star" />
            <div className="banner-bar-text">collection og games</div>
        </div>
    );
}

export default SlantedBanner;