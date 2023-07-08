import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/gallery.css';
import pic1 from '../assets/photos/IMG_6316.jpg'
import pic2 from '../assets/photos/IMG_6317.jpg'
import pic3 from '../assets/photos/IMG_6318.jpg'
import pic4 from '../assets/photos/IMG_6319.jpg'
import pic5 from '../assets/photos/IMG_6320.jpg'

const images = [
  {
    original: pic1,
    thumbnail: pic1,
  },
  {
    original: pic2,
    thumbnail: pic2,
  },
  {
    original: pic3,
    thumbnail: pic3,
  },
  {
    original: pic4,
    thumbnail: pic4,
  },
  {
    original: pic5,
    thumbnail: pic5,
  },
];

class PhotoCarousel extends React.Component {
  render() {
    return  <div className='carousel'><ImageGallery items={images} /></div>;
  }
}
export default PhotoCarousel;