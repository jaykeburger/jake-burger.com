import React from 'react';
import '../styles/blogs.css';
import cocologo from '../assets/photos/IMG_6316.jpg'
  
const About = () => {
  return (
<div class="blog-container">
  <div className='blog-item'>
      <img className='blog-image' src={cocologo}/>
      <p>Work Blog</p>
  </div>
  <div className='blog-item'>2</div>
  <div className='blog-item'>3</div>  
  <div className='blog-item'>4</div>
  <div className='blog-item'>5</div>
</div>
  );
};
  
export default About;