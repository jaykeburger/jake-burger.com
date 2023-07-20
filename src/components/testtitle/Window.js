import React from 'react';
import '../../styles/socialmediastyle.css';
import '../../styles/window.css';
  
const Window = () => {
  return (
    <div>
        <div class="window-container">
            <div class="window-header">
                Jake Burger
                <div style={{display:'inline-block', color:'black'}} class="close-tab">X</div>
            </div>
            <div class="window-body">
            </div>
        </div>
    </div>
  );
};
  
export default Window;