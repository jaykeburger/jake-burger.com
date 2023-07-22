import React from 'react';
import '../../styles/window.scss';
import Typewriter from "typewriter-effect";

const Window = () => {
  return (
    <div>
        <div class="window-container">
            <div class="window-header">
                <div class="close-tab">X</div>
                <div class="close-tab2">-</div>
            </div>
            <div class="window-body">
        <h1 className='title'>
            <img src={require('../../assets/palmtree.png')}/>
            <i>Jake Burger</i>
            <img style={{transform:'scaleX(-1)'}} src={require('../../assets/palmtree.png')}/>
            </h1>
            </div>
        </div>
    </div>
  );
};
  
export default Window;