import React from 'react';
import './styles/App.css';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
  
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/resume' Component={Resume} />
    </Routes>
  </Router>
  );
}
  
export default App;