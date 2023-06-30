import React from 'react';
import githublogo from '../assets/github.png'
import linkedinlogo from '../assets/linkedin.png'
import cocologo from '../assets/coco.png'
  
const SocialMediaBar = () => {
  return (
    <div class="row" 
        style={{
            display:'flex',
            justifyContent: 'Center',
            alignItems: 'Center'}}
        >
        <div class="col" style={{flex:'1'}}>
            <a href="https://github.com/jaykeburger"><img src={githublogo} style={{ width: "10%", height: "10%" }} alt="loading..."/></a>
        </div>
        <div class="col" style={{flex:'1'}}>
            <a href="https://www.codecoogs.com/"><img src={cocologo} style={{ width: "5%", height: "5%" }} alt="loading..."/></a>
        </div>
        <div class="col" style={{flex:'1'}}>
            <a href="https://www.linkedin.com/in/jake-d-burger/"><img src={linkedinlogo} style={{ width: "5%", height: "5%" }} alt="loading..."/></a>
        </div>
    </div>
  );
};
  
export default SocialMediaBar;