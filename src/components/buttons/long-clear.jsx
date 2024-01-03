import React from 'react';
import './buttons.css';
import clearbutton from '../../assets/long-clear.png';

const LongClearButton = ({ onClick, text }) => {
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

export default LongClearButton;