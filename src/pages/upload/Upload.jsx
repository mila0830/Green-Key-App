import React, { useState } from "react";
import Uploader from "../../components/uploader/Uploader"
import StartButton from "../../components/button/start/Start";
import Industry from "../../components/button/industry/Industry";
import InputButton from "../../components/button/input/Input";
import axios from "axios";

function Upload() {
  
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [esg_report, selectedFile] = useState(null);
  
  const handleStartClick = async (e) => {
    e.preventDefault();
    // Example API endpoint (replace with your actual endpoint)
    //is this correct? I think I should adjust this but not sure with what
    const apiUrl = "http://localhost:8000/input"
    console.log("hey")
    try {
      const formData = new FormData();
      formData.append("company", company);
      formData.append("industry", industry);
      formData.append("esg_report", selectedFile); // Assuming the file field is named esg_report
      
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle the response as needed
      console.log("API Response:", response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request setup error:", error.message);
      }
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
            <Uploader 
            esg_report ={esg_report}
            />
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
