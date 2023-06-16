import './App.css';
import './Title'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from "./components/shared/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"


function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
        </Routes>
      </Navbar>
  </BrowserRouter>
  );
}

export default App;
