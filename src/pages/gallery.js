
import React from 'react';
import '../styles/pagestyles/gallery.css';
import PhotoCarousel from '../components/gallery/PhotoCarousel';
  
const Gallery = () => {
  return (
    <div>
      <br></br>
        <div className='carousel'>
            <PhotoCarousel/>    
        </div>
    </div>
    
  );
};
  
export default Gallery;