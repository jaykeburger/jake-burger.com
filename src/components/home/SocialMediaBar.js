import React from 'react';
import githublogo from '../../assets/github.png'
import linkedinlogo from '../../assets/linkedin-logo.png'
import cocologo from '../../assets/cocoidea1.png'
import '../../styles/socialmediastyle.css';
  
const SocialMediaBar = () => {
  return (
    <div class='container'>
              <div class="element2">
            <a target='blank' href="https://www.linkedin.com/in/jake-d-burger/"><img src={linkedinlogo} alt="loading..."/></a>
        </div>
        <div class="element1">
            <a target='blank' href="https://github.com/jaykeburger"><img src={githublogo}  alt="loading..."/></a>
        </div>
        <div class="element3">
            <a target='blank' href="https://www.codecoogs.com/"><img src={cocologo} alt="loading..." /></a>
        </div>
    </div>
  );
};
  
export default SocialMediaBar;