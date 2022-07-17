import React from 'react';
import './SuperButton.css';

const SuperButton = ({ text, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default SuperButton;
