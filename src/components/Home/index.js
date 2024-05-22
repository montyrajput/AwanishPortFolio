import {FaLinkedinIn} from 'react-icons/fa6'
import {FaGithub, FaDownload} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

import Header from '../Header'
import MyPhoto from '../../images/IMG_20211004_221632 (2).jpg'
import Myresume from '../../images/Awanish_2023-09-30-183831.pdf'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="bg-container">
      <div className="home-my-details-container">
        <img src={MyPhoto} alt="save" className="my-image" />
        <h3 className="home-heading">Hello, I am</h3>
        <h1 className="home-heading1">Prasanya Shankar</h1>
        <h1 className="home-heading1">
          I am a<span className="span-heading">Full Stack Developer</span>
        </h1>
        <p className="home-paragraph">
          Building Bridges Between Front-End and Back-End, Transforming Ideas
          into Web Reality
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/prasanya-shankar/"
            aria-label="LinkedIn"
            className="link-social-media-icon"
          >
            <FaLinkedinIn className="react-icon" />
          </a>
          <a
            href="https://github.com/prasanya-web-developer"
            aria-label="GitHub"
            className="link-social-media-icon"
          >
            <FaGithub className="react-icon" />
          </a>
          <a
            href="mailto:prasanya.webdev@gmail.com"
            aria-label="Email"
            className="link-social-media-icon"
          >
            <MdEmail className="react-icon" />
          </a>
        </div>
        <a href={Myresume} download className="download-button">
          Download Resume <FaDownload />
        </a>
      </div>
    </div>
  </>
)

export default Home
