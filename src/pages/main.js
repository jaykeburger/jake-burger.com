import React from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Resume from '../components/resume/Resume';
import '../styles/pagestyles/home.css';

const Main = () => {
  return (
    <div>
      <div id='/'>
        <Home/>
      </div>
      <div id='about' className='give-more-space'>
        <About/>
      </div>
      <div id='resume' className='give-more-space'>
        <Resume/>
      </div>
    </div>
    
  );
};
  
export default Main;