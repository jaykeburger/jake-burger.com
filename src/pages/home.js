
import React from 'react';
import SocialMediaBar from '../components/homepage/SocialMediaBar';
import HomePageTitle from '../components/homepage/HomePageTitle';
import '../styles/home.css';
import Gallery from './gallery.js';
  
const Home = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <p style={{color:'red', textAlign:'center'}}>Please note: site is still being constructed (dont roast me yet pls)</p>
      <br></br>
      <HomePageTitle/>
      <br></br>
      <SocialMediaBar/>
      <br></br>
    </div>
    
  );
};
  
export default Home;