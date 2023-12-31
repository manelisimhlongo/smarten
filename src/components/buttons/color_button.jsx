import React from 'react';

const ColorButton = ({ children, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default ColorButton;