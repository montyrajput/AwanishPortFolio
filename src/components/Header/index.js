import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaBars} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'

import './index.css'

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      className="custom-navbar"
      variant="dark"
      expand="lg"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="my-portfolio">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        >
          {expanded ? <RxCross2 /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-item">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-item">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/certificates" className="nav-item">
              Certificates
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
