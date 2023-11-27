// components/Button.js
import React, { useState } from 'react';
import './Input.css';

const InputButton = ({company, setCompany}) => {

  

  return (
    <div className="input-button-container">
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Company Name"
      />
      
      <p>Stored String: {company}</p>
    </div>
  );
};

export default InputButton;
