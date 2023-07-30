import React from 'react';
import '../../styles/pagestyles/about.css';
import CodeCoogs from '../../components/about/CodeCoogs';
import Map from '../../components/about/Travel';
import AboutWindow from './AboutWindow';
  
const About = () => {
  return (
    <div className='about-parent'>
        <br></br>
        <br></br>
        <div>
          <AboutWindow/>
        </div>
        <br></br>
    </div>
  );
};
  
export default About;