import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
)

export default App
