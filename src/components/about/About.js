import React from 'react';
import '../../styles/about.css';
import CodeCoogs from '../../components/about/CodeCoogs';
import Map from '../../components/about/Travel';
  
const About = () => {
  return (
    <div className='about-parent'>
        <br></br>
        <br></br>
        <br></br>
        <h1 >ABOUT ME</h1>
        <div className='about-codecoogs'>
            <CodeCoogs/>
        </div>
        <div className='about-traveling'>
            <Map/>
        </div>
        <div className='about-other'> 
            <h1>Other</h1>
        </div>
    </div>
  );
};
  
export default About;