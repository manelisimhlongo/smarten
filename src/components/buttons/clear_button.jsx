
import React from 'react';

import clearbutton from '../../assets/clear_button.svg';

const ClearButton = ({ children, onClick }) => {
    return (

        <button onClick={onClick}>
            <img src={clearbutton} alt="clear" />
            {children}
        </button>
    );
};

export default ClearButton;