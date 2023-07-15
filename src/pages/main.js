import React from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Resume from '../components/resume/Resume';
import '../styles/home.css';

const Main = () => {
  return (
    <div>
      <div id='/' style={{height:'90vh', backgroundColor:'red'}}>
        <Home/>
      </div>
      <div id='about' style={{height:'100vh', backgroundColor:'green'}}>
        <About/>
      </div>
      <div id='resume' style={{height:'100vh', backgroundColor:'blue'}}>
        <Resume/>
      </div>
    </div>
    
  );
};
  
export default Main;