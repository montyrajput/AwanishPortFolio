import {useState} from 'react'
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
        <Navbar.Brand href="#home" className="my-portfolio">
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
            <Nav.Link href="#home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#About" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="#Skills" className="nav-item">
              Skills
            </Nav.Link>
            <Nav.Link href="#Services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link href="#Projects" className="nav-item">
              Projects
            </Nav.Link>
            <Nav.Link href="#Certificates" className="nav-item">
              Certificates
            </Nav.Link>
            <Nav.Link href="#Contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
