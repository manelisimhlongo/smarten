
import React from "react";

const FilterCard = ({ img, subtext, subsubtext}) => {
    return (
        <div className="filter-card">
            <div className="card-column">
                <div className="image-container"></div>
                <div className="heading-text">Core Philosophies</div>
                <div className="card-row">
                    <div className="avatar-img">{img}</div>
                    <div className="card-column">
                        <div className="sub-text">{subtext}</div>
                        <div className="sub-sub-text">{subsubtext}</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default FilterCard;