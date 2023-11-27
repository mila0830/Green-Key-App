import React from "react";
import "./Start.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const StartButton = ({handleStartClick}) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to the '/table' page when the button is clicked
    navigate('/tablepage');
  };
  return (
    <button className="start-button" onClick={handleStartClick} >
      Start
    </button>
  );
};

export default StartButton;