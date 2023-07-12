import React from 'react';
import '../styles/about.css';
import CodeCoogs from '../components/about/CodeCoogs';
import Map from '../components/about/Travel';
  
const About = () => {
  return (
    <div>
      <CodeCoogs/>
      <Map/>
      <h1>Travel</h1>
      <h1>Other</h1>
    </div>
  );
};
  
export default About;