import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import AddStudent from './components/Addstudent';
import About from './components/About';
import Footer from './components/footer';


function App() {

  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Students' element={<Students />} />
          <Route path='/AddStudent' element={<AddStudent />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
