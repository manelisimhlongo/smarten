import React from 'react';
import './buttons.css';
import colorbutton from '../../assets/color_button.svg';

const ColorButton = ({ onClick, text }) => {
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

export default ColorButton;