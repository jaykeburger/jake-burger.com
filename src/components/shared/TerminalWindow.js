import React from 'react';
import '../../styles/windowstyles/terminalwindow.scss';
import Typewriter from "typewriter-effect";

const TerminalWindow = () => {
  return (
    <div>
        <div class="1terminal-window-container">
            <div class="1terminal-window-header">
                <div class="1terminal-close-tab">X</div>
                <div class="1terminal-close-tab2">-</div>
            </div>
            <div class="1terminal-window-body">
                <ol><li><p className='keyword'>var</p><p className='var-name'>Who_I_am</p><p className='operator'>=</p><p className='quotations'>"</p>
                <p className='quotations'><i>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 150
                }}
            onInit={(typewriter) => {
                typewriter
                .typeString("software developer")
                .pause(30000)
                .deleteAll()
                .typeString("adventurer")
                .pause(30000)
                .deleteAll()
                .typeString("university student")
                .pause(30000)
                .deleteAll()
                .typeString("leader")
                .pause(30000)
                .deleteAll()
                .typeString("designer")
                .pause(30000)
                .deleteAll()
                .start();
            }}
            />
        </i></p><p className='quotations'>"</p><p className='operator'>;</p></li>
        <li><p className='keyword'>var</p><p className='var-name'>What_I_Do</p><p className='operator'>=</p></li></ol>
            </div>
        </div>
    </div>
  );
};
  
export default TerminalWindow;