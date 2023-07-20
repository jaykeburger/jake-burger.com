import React from 'react';
import '../../styles/socialmediastyle.css';
import '../../styles/testtitle.css';
import Window from './Window'
  
const TestTitle = () => {
  return (
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
      <div style={{position:'absolute', padding:'100px'}}>
      <Window/>
      </div>
    </div>
  );
};
  
export default TestTitle;