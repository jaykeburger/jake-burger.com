import React from 'react';
import githublogo from '../../assets/github.png'
import linkedinlogo from '../../assets/linkedin-logo.png'
import cocologo from '../../assets/cocoidea1.png'
import '../../styles/socialmediastyle.css';
  
const SocialMediaBar = () => {
  return (
    <div>
      <a class="linkedin"  target='blank' href="https://www.linkedin.com/in/jake-d-burger/">
        <span>
        </span>
      </a>
      <a class="github" target='blank' href="https://github.com/jaykeburger">
        <span>
        </span>
      </a>
      <a class="codecoogs" target='blank' href="https://www.codecoogs.com/">
        <span>
        </span>
      </a>
    </div>
  );
};
  
export default SocialMediaBar;