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
        <div style={{border:'', margin:'0rem'}}>
        <h1>ABOUT</h1>
        <div className='about-codecoogs' style={{border:'solid', margin:'2rem'}}>
            <CodeCoogs/>
        </div>
        <div className='about-traveling'style={{border:'solid', margin:'2rem'}}>
            <Map/>
        </div>
        <div className='about-other' style={{border:'solid', margin:'2rem'}}> 
            <h1>Other</h1>
        </div>
        </div>
    </div>
  );
};
  
export default About;