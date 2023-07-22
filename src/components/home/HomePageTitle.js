import React from 'react';
import '../../styles/home.css';
import Window from '../shared/Window';


const HomePageTitle = () => {
  return (
    <div>
      <div style={{position:'relative', padding:'50px'}}>
      <div style={{position:'absolute', padding:''}}>
      <Window/>
      </div>
      <div style={{position:'absolute', padding:'20px'}}>
      <Window/>
      </div>
      <div style={{position:'absolute', padding:'40px'}}>
      <Window/>
      </div>
      <div style={{position:'absolute', padding:'60px'}}>
      <Window/>
      </div>
      <div style={{position:'absolute', padding:'80px'}}>
      <Window/>
      </div>
    </div>
    </div>
  );
};
  
export default HomePageTitle;