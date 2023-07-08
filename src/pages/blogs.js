import React from 'react';
import '../styles/blogs.css';
import cocologo from '../assets/photos/IMG_6316.jpg'
  
const About = () => {
  return (
<div class="flex-container">
  <div className='item'>
      <img className='blog-image' src={cocologo}/>
      <p>Guatemala Blog</p>
  </div>
  <div className='item'>2</div>
  <div className='item'>3</div>  
  <div className='item'>4</div>
  <div className='item'>5</div>
</div>
  );
};
  
export default About;