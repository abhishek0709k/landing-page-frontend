import React from 'react';
import './Button.css';

export const Button = ({ type = 'primary', children, disabled }) => {
  return (<button className={`btn ${type}`} disabled={disabled}>{children}</button>)
};