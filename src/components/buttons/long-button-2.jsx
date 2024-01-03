
import React from 'react';

import clearbutton from '../../assets/long-button-2.png';

const ClearButton2 = ({ text, onClick }) => {
    return (
        <div>
            <div className="head-text">
                <img src={clearbutton} alt="color" />
                <div class='text-on-image'>
                    <div className="button-text"> {text} </div>
                </div>
            </div>
        </div>

    );
};

export default ClearButton2;