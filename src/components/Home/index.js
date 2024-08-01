import {useEffect} from 'react'
import {FaGithub, FaDownload, FaLinkedinIn} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import ScrollReveal from 'scrollreveal'

import Header from '../Header'
import Footer from '../Footer'
import MyPhoto from '../../images/montypotfolioimg.jpg5.jpg'
import Myresume from '../../images/Awanish_2024-08-01-195233.pdf'

import './index.css'

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 150

      sections.forEach(section => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPosition >= top && scrollPosition <= top + height) {
          // Do something if needed
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    })

    ScrollReveal().reveal('.home-heading', {
      origin: 'top',
    })
    ScrollReveal().reveal('.home-img', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.home-container h1, .home-icon', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal('.home-container p, .download-button1 ', {
      origin: 'right',
    })
  }, [])

  return (
    <>
      <Header />
      <div className="bg-container">
        <div className="home-my-details-container home-container">
          <img src={MyPhoto} alt="save" className="my-image home-img" />
          <h3 className="home-heading">Hello, I am</h3>
          <h1 className="home-heading1">Awanish Kumar Singh</h1>
          <h1 className="home-heading1">
            I am a <span className="span-heading">Full Stack Developer</span>
          </h1>
          <p className="home-paragraph">
            Building Bridges Between Front-End, Back-End and Database,
            Transforming Ideas into Web Reality
          </p>
          <div className="home-icon">
            <a
              href="https://www.linkedin.com/in/awanish-kumar-singh-315653200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="link-social-media-icon"
            >
              <FaLinkedinIn className="react-icon" />
            </a>
            <a
              href="https://github.com/montyrajput"
              aria-label="GitHub"
              className="link-social-media-icon"
            >
              <FaGithub className="react-icon" />
            </a>
            <a
              href="mailto:montysinghrajput590@gmail.com"
              aria-label="Email"
              className="link-social-media-icon "
            >
              <MdEmail className="react-icon" />
            </a>
          </div>
          <a
            href={Myresume}
            download
            className="download-button download-button1"
          >
            Download Resume <FaDownload />
          </a>
        </div>
        <div className="desktop-view-home">
          <div className="home-container">
            <h3 className="home-heading-desktop home-heading">Hello, I am</h3>
            <h1 className="home-heading1-desktop">Awanish Kumar Singh</h1>
            <h1 className="home-heading1-desktop">
              I am a{' '}
              <span className="span-heading-desktop">Full Stack Developer</span>
            </h1>
            <p className="home-paragraph-desktop">
              Building Bridges Between Front-End, Back-End and Database,
              Transforming Ideas into Web Reality
            </p>
            <div className="home-icon">
              <a
                href="https://www.linkedin.com/in/awanish-kumar-singh-315653200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="link-social-media-icon"
              >
                <FaLinkedinIn className="react-icon" />
              </a>
              <a
                href="https://github.com/montyrajput"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="link-social-media-icon"
              >
                <FaGithub className="react-icon" />
              </a>
              <a
                href="mailto:montysinghrajput590@gmail.com"
                aria-label="Email"
                className="link-social-media-icon"
              >
                <MdEmail className="react-icon" />
              </a>
            </div>
            <a
              href={Myresume}
              download
              className="download-button download-button1"
            >
              Download Resume <FaDownload />
            </a>
          </div>
          <img src={MyPhoto} alt="save" className="my-image home-img" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
