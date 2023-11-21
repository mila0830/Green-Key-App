import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import "./Home.css"

function sayHello() {
  alert('You clicked me!');
}


function Home() {
  const navigate = useNavigate();
  
  
  
    return (
      
      
      <div className="home">
        <div class="container">
          <h1 class="title">Green Key</h1>
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
            
              <button onClick={() => {navigate('/upload')}}>Get Started</button>
            </div>
            <div class="col-lg-5">
      
            </div>
          </div>
        </div>
      </div>
    );
  

  
}

export default Home;


