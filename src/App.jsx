import React from 'react';
//import './App.css';
//import Navbar from './components/Navbar';
import { useRef } from 'react';
import Home from './pages/home/Home';
import Upload from './pages/upload/Upload';
import Table from './pages/table/TablePage';
import Uploader from './components/uploader/Uploader'
import {BrowserRouter, Routes, Route } from 'react-router-dom';


/*
<Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Upload' element={<Upload />} />
                <Route path='/TablePage' element={<Table />} />
      
            </Routes>
        </Router>
*/

const TestComponent = () => {
  return (
    <>x</>
  )
}
/*
<Route exact path='/' element={<>TestComponent</>} />
                <Route path='/upload' element={<>TestComponent</>} />
                <Route path='/tablepage' element={<>TestComponent</>} />
*/
function App() {
  return (
    
    <div>
      <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/tablepage' element={<Table />} />
              
                
      
            </Routes>
        </BrowserRouter>

        
      
    </div>
    
  );
}
export default App;