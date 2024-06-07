import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Service from './components/Service'
import Project from './components/Project'

import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/services" element={<Service />} />
      <Route path="/projects" element={<Project />} />
    </Routes>
  </Router>
)

export default App
