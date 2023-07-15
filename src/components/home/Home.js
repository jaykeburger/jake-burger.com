import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import HomePageTitle from './HomePageTitle';
import '../../styles/home.css'

const Home = () => {
  return (
    <div>
      <div id='/' style={{height:'90vh', backgroundColor:'red'}}>
        <br></br>
        <br></br>
        <br></br>
        <p style={{color:'red', textAlign:'center'}}>Please note: site is still being constructed</p>
        <br></br>
        <HomePageTitle/>
        <br></br>
        <SocialMediaBar/>
      </div>
    </div>
    
  );
};
  
export default Home;