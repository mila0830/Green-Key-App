import React, { useState } from "react";
import "./Industry.css"; // Import the CSS file



const Industry = ({industry, setIndustry}) => {
  
  const handleSelectChange = (e) => {
    setIndustry(e.target.value);
  };

  return (
    <div className="industry-button-container">
      <select value={industry} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">airlines</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      
      <p>Stored Option: {industry}</p>
    </div>
  );
};

export default Industry;
