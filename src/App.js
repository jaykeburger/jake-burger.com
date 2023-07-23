import React from 'react';
import './styles/pagestyles/App.css';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import About from './components/about/About.js';
import Gallery from './pages/gallery';
import Blogs from './pages/blogs';
import Resume from './components/resume/Resume';
import BasicExample from './components/shared/Navbar';
  
function App() {
  return (
    <Router>
    <BasicExample />
    <Routes>
      <Route path='/' Component={Main} />
      <Route path='/#about' Component={Main} />
      <Route path='/#resume' Component={Main} />
      <Route path='/gallery' Component={Gallery} />
      <Route path='/blogs' Component={Blogs} />
    </Routes>
  </Router>
  );
}
  
export default App;
