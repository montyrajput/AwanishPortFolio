import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Header from '../Header'
import AboutPhoto from '../../images/montypotfolioimg.jpg9.jpg'
import Footer from '../Footer'
import './index.css'

const About = () => {
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
    ScrollReveal().reveal('.home-text ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal('.about-text, .name ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-text-container">
          <img src={AboutPhoto} alt="save" className="about-image home-img" />

          <p className="about-paragraph home-heading">
            My name is{' '}
            <span className="about-style-text name">Awanish Kumar Singh,</span>{' '}
            and I am from{' '}
            <span className="about-style-text1">Giridih, Jharkhand.</span> I am
            a dedicated{' '}
            <span className="about-style-text2">full-stack web developer</span>{' '}
            currently pursuing my{' '}
            <span className="about-style-text">
              B.Tech in Computer Science and Engineering at Bhabha University,
              Bhopal.
            </span>{' '}
            I also hold a{' '}
            <span className="about-style-text1">
              diploma in Computer Science and Engineering from Government
              Polytechnic Latehar.
            </span>{' '}
            Passionate about crafting innovative digital solutions, I thrive on
            transforming concepts into reality through clean,{' '}
            <span className="about-style-text2">
              efficient code and user-centric designs.
            </span>
            <p className="about-paragraph about-text">
              Despite being in my second year of studies, I have gained valuable
              practical experience through{' '}
              <span className="about-style-text">NxtWave,</span> where I have
              worked on a diverse array of projects. These range from{' '}
              <span className="about-style-text1">dynamic,</span>
              <span className="about-style-text">static,</span> and{' '}
              <span className="about-style-text2">
                responsive web applications to scalable e-commerce platforms.
              </span>{' '}
              I have developed a keen understanding of both{' '}
              <span className="about-style-text">front-end</span> and
              <span className="about-style-text1">
                {' '}
                back-end technologies,
              </span>{' '}
              including <span className="about-style-text">HTML,</span>{' '}
              <span className="about-style-text1">CSS,</span>{' '}
              <span className="about-style-text2">Bootstrap,</span> and{' '}
              <span className="about-style-text">JavaScript </span>(with modern
              frameworks like{' '}
              <span className="about-style-text1">React.js</span>
              ). My back-end skills include{' '}
              <span className="about-style-text2">Node.js </span> ,
              <span className="about-style-text"> Express.js </span> , and{' '}
              <span className="about-style-text1">Python,</span> and I am
              proficient in database management using{' '}
              <span className="about-style-text2">MongoDB</span> and{' '}
              <span className="about-style-text">MySQL.</span> Additionally, I
              am skilled in version control using{' '}
              <span className="about-style-text1">GitHub.</span>
            </p>
            <p className="about-paragraph home-text">
              {' '}
              I am <span className="about-style-text">enthusiastic</span> about
              collaborating with forward-thinking individuals and organizations
              to{' '}
              <span className="about-style-text1">
                create impactful digital experiences.
              </span>
            </p>
          </p>
        </div>
        <div className="about-container-desktop">
          <img src={AboutPhoto} alt="save" className="about-image home-img" />
          <div>
            <p className="about-paragraph-desktop1 home-heading">
              My name is{' '}
              <span className="about-style-text name">
                Awanish Kumar Singh,
              </span>{' '}
              and I am from{' '}
              <span className="about-style-text1 name">
                Giridih, Jharkhand.
              </span>{' '}
              I am a dedicated{' '}
              <span className="about-style-text2 name">
                full-stack web developer
              </span>{' '}
              currently pursuing my{' '}
              <span className="about-style-text">
                B.Tech in Computer Science and Engineering at Bhabha University,
                Bhopal.
              </span>{' '}
              I also hold a{' '}
              <span className="about-style-text1">
                diploma in Computer Science and Engineering from Government
                Polytechnic Latehar.
              </span>{' '}
              Passionate about crafting innovative digital solutions, I thrive
              on transforming concepts into reality through clean,{' '}
              <span className="about-style-text2">
                efficient code and user-centric designs.
              </span>
              <p className="about-paragraph-desktop1 about-text">
                Despite being in my second year of studies, I have gained
                valuable practical experience through{' '}
                <span className="about-style-text">NxtWave,</span> where I have
                worked on a diverse array of projects. These range from{' '}
                <span className="about-style-text1">dynamic,</span>
                <span className="about-style-text">static,</span> and{' '}
                <span className="about-style-text2">
                  responsive web applications to scalable e-commerce platforms.
                </span>{' '}
                I have developed a keen understanding of both{' '}
                <span className="about-style-text">front-end</span> and
                <span className="about-style-text1">
                  {' '}
                  back-end technologies,
                </span>{' '}
                including <span className="about-style-text">HTML,</span>{' '}
                <span className="about-style-text1">CSS,</span>{' '}
                <span className="about-style-text2">Bootstrap,</span> and{' '}
                <span className="about-style-text">JavaScript </span>(with
                modern frameworks like{' '}
                <span className="about-style-text1">React.js</span>
                ). My back-end skills include{' '}
                <span className="about-style-text2">Node.js </span> ,
                <span className="about-style-text"> Express.js </span> , and{' '}
                <span className="about-style-text1">Python,</span> and I am
                proficient in database management using{' '}
                <span className="about-style-text2">MongoDB</span> and{' '}
                <span className="about-style-text">MySQL.</span> Additionally, I
                am skilled in version control using{' '}
                <span className="about-style-text1">GitHub.</span>
              </p>
              <p className="about-paragraph-desktop1 home-text">
                {' '}
                I am <span className="about-style-text">enthusiastic</span>{' '}
                about collaborating with forward-thinking individuals and
                organizations to{' '}
                <span className="about-style-text1">
                  create impactful digital experiences.
                </span>
              </p>
            </p>
          </div>
        </div>
        <Footer className="about-footer-desktop" />
      </div>
    </>
  )
}

export default About
