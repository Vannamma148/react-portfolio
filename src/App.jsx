import './App.css'

import Home from './components/Home'
import Nav from './components/Nav'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skill from './components/Skill';
import { Project } from './components/Project';

function App() {


  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
