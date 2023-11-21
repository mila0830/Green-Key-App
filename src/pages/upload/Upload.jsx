import React from "react";
import Uploader from "../../components/uploader/Uploader"

function Upload() {
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
        </div>
      </div>
    </div>
    
  );
  
}

export default Upload;
