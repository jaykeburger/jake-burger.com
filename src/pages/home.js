
import React from 'react';
import HomePageLogo from '../components/HomePageLogo';
import SocialMediaBar from '../components/SocialMediaBar';
import HomePageTitle from '../components/HomePageTitle';
import '../styles/home.css';
  
const Home = () => {
  return (
    <div class="home-style">
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