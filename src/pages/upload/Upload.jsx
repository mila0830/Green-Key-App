import React, { useState } from "react";
import Uploader from "../../components/uploader/Uploader"
import StartButton from "../../components/button/start/Start";
import Industry from "../../components/button/industry/Industry";
import InputButton from "../../components/button/input/Input";
import axios from "axios";

function Upload() {
  
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  
  const handleStartClick = async (e) => {
    e.preventDefault();
    // Example API endpoint (replace with your actual endpoint)
    const apiUrl = "http://localhost:8000/input/"
    console.log("hey")
    try {
      // Data to be sent in the API request
      const requestData = {
        company: company,
        industry: industry,
        // Add other data as needed
      };

      // Sending a POST request using axios
      const response = await axios.post(apiUrl);

      // Handle the response as needed
      console.log("API Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("API Request Error:", error);
    }
  };


  return (

    <div className="upload">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Upload</h1>
            <p>
              Upload a file here to get started
            </p>
          </div>
          <div class="col-lg-7">
            <Uploader />
          </div>
          <div class="col-lg-8">
            <StartButton handleStartClick={handleStartClick} />
          </div>

          <div class="col-lg-9">
          <InputButton
            company={company}
            setCompany={setCompany}
          
          />
          </div>

          <div class="col-lg-10">
          <Industry
            industry={industry}
            setIndustry={setIndustry}
          
          />
          </div>

          
          
        </div>
      </div>
    </div>
    
  );
  
}

export default Upload;
