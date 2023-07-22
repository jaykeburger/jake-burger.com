import React from 'react';
import '../../styles/socialmediastyle.css';
import '../../styles/window.scss';
import Typewriter from "typewriter-effect";

const TerminalWindow = () => {
  return (
    <div>
        <div class="window-container">
            <div class="window-header">
                <div class="close-tab">X</div>
                <div class="close-tab2">-</div>
            </div>
            <div class="window-body">
        <h1 className='subtitle'><i>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 150
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("software developer")
                .pause(20000)
                .deleteAll()
                .typeString("adventurer")
                .pause(20000)
                .deleteAll()
                .typeString("university student")
                .pause(20000)
                .deleteAll()
                .typeString("leader")
                .pause(20000)
                .deleteAll()
                .typeString("designer")
                .pause(20000)
                .deleteAll()
                .start();
            }}
            />
        </i></h1>
            </div>
        </div>
    </div>
  );
};
  
export default TerminalWindow;