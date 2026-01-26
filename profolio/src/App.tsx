import { Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import About from './components/About'
import Projects from './components/Projects'


export default function App() {

  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col items-center relative">
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>         
    </div>
  )
}


