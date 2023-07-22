import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import HomePageTitle from './HomePageTitle';
import '../../styles/home.css'
import { Tooltip } from 'react-tooltip'
import TerminalWindow from '../shared/TerminalWindow';

const Home = () => {
  return (
    <div>
      <div id='/' className='home-container'>
        <div className='title-container' style={{justifyContent:'left'}}>
          <HomePageTitle />
        </div>
        <div className='social-media-container' style={{justifyContent:'left'}}>
          <SocialMediaBar/>
        </div>
        <div className='terminal-container'>
          <TerminalWindow/>
        </div>
      </div>
    </div>
    
  );
};
  
export default Home;