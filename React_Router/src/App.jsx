import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>React Router</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:id?" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
