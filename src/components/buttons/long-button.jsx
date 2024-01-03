import React from 'react';
import './buttons.css';
import colorbutton from '../../assets/colorful-long-button.png';

const LongColorButton = ({ onClick, text }) => {
  return (
    <div>
      <div className="head-text">
        <img src={colorbutton} alt="color" />
        <div class='text-on-image'>
          <div className="button-text"> {text} </div>
        </div>
      </div>
    </div>
  );
};

export default LongColorButton;