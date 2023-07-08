
import React from 'react';
import '../styles/gallery.css';
import PhotoCarousel from '../components/PhotoCarousel';
  
const Gallery = () => {
  return (
    <div>
        <h1>Photos</h1>
        <div className='carousel'>
            <PhotoCarousel/>    
        </div>
    </div>
    
  );
};
  
export default Gallery;