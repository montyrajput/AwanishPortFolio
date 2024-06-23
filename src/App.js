import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import Project from './components/Project'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Education from './components/Education'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/services" element={<Service />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/certificates" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
)

export default App
