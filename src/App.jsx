import { Routes, Route } from 'react-router-dom'
import Starfield from './components/Starfield'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Studies from './components/Studies'
import PixelArt from './components/PixelArt'
import Contact from './components/Contact'
import StudyPage from './pages/StudyPage'

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#050A14] text-white">
      <Starfield />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Studies />
        <PixelArt />
        <Contact />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/study/:slug" element={<StudyPage />} />
    </Routes>
  )
}
