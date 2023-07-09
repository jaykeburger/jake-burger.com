import React from 'react';
import '../styles/resume.css';
import coco from '../assets/photos/IMG_6317.jpg'

const Resume = () => {

  return (
<div>
  <br></br>
  <br></br>
<section class="accordion">
  <input type="checkbox" name="collapse1" id="handle1"/>
  <h2 class="handle">
    <label for="handle1">Education</label>
  </h2>
  <div class="content">
    <p><strong>Overall Impression:</strong> A deep reddish-copper, moderately strong, malty, complex Trappist ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry.</p>
    <p><strong>History:</strong> Originated at monasteries in the Middle Ages, and was revived in the mid-1800s after the Napoleonic era.</p>
  </div>
</section>
<section class="accordion">
  <input type="checkbox" name="collapse2" id="handle2"/>
  <h2 class="handle">
    <label for="handle2">Work Experience</label>
  </h2>
  <div class="content">
    <p><strong>Overall Impression:</strong> A pale, somewhat spicy, dry, strong Trappist ale with a pleasant rounded malt flavor and firm bitterness. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol level.</p>
    <p><strong>History:</strong> Originally popularized by the Trappist monastery at Westmalle.</p>
  </div>
</section>
<section class="accordion">
  <input type="checkbox" name="collapse3" id="handle3"/>
  <h2 class="handle">
    <label for="handle3">Skills</label>
  </h2>
  <div class="content">
    <p><strong>Overall Impression:</strong> A pale, somewhat spicy, dry, strong Trappist ale with a pleasant rounded malt flavor and firm bitterness. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol level.</p>
    <p><strong>History:</strong> Originally popularized by the Trappist monastery at Westmalle.</p>
  </div>
</section>
<section>
  <button>Resume</button>
</section>
</div>
  );
};
  
export default Resume;