import React from 'react';
import './Button.scss';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="Button">
      {children}
    </button>
  );
};

export default Button;
