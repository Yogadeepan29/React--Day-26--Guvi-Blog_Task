import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Trending from './Components/Pages/Trending';
import AiMl from './Components/Pages/AiMl';
import Blockchain from './Components/Pages/Blockchain';
import CloudComputing from './Components/Pages/CloudComputing';
import CyberSecurity from './Components/Pages/CyberSecurity';
import DataScience from './Components/Pages/DataScience';
import DevOps from './Components/Pages/DevOps';
import DigitalMarketing from './Components/Pages/DigitalMarketing';
import FSD from './Components/Pages/FSD';
import SoftwareTesting from './Components/Pages/SoftwareTesting';
import UiUx from './Components/Pages/UiUx';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <main id="home" className="container mt-5 pt-5" >
          <div className="row">
              <div className="col-md-3  ">
                <Sidebar />
              </div>
              <div className="col-md-9 pt-5">
                <Routes>
                    <Route path='/' element={<Trending />} />
                    <Route path='/ai-ml' element={<AiMl/>}/>
                    <Route path='/blockchain' element={<Blockchain/>}/>
                    <Route path='/cloudcomputing' element={<CloudComputing/>}/>
                    <Route path='/cybersecurity' element={<CyberSecurity/>}/>
                    <Route path='/datascience' element={<DataScience/>}/>
                    <Route path='/devops' element={<DevOps/>}/>
                    <Route path='/digitalmarketing' element={<DigitalMarketing/>}/>
                    <Route path="/fsd" element={<FSD/>} />
                    <Route path='/software-automation-testing' element={<SoftwareTesting/>}/>
                    <Route path='/ui-ux' element={<UiUx/>}/>
                </Routes>
              </div>
          </div>
        </main>
      <Footer/>
    </BrowserRouter>  
    </>
  );
};

export default App;