import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Skills = () => {
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

    ScrollReveal().reveal(' styled-node', {
      origin: 'top',
    })
    ScrollReveal().reveal('.skill-styled', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.styled-react, .styled-python ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' .styled-express ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      <Header />
      <div className="skill-container">
        <h1 className="skills-heading styled-node">
          Front-End <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology skill-styled">
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472157/Search_results_for__html5___Page__1_uigmf7.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">HTML</h4>
            <p className="skills-technology-paragraph">
              Proficient in creating semantic <br />
              and accessible web pages.
            </p>
          </div>
          <div className="skills-text-content styled-node">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472157/download_1_ijhedh.jpg"
              alt="save"
              className="css"
            />
            <h4 className="skills-technology-heading">CSS</h4>
            <p className="skills-technology-paragraph">
              Experienced in designing responsive <br />
              layouts and styling web pages.
            </p>
          </div>
          <div className="skills-text-content">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472156/Bootstrap_lude5v.jpg"
              alt="save"
              className=" bootstrap"
            />
            <h4 className="skills-technology-heading ">Bootstrap</h4>
            <p className="skills-technology-paragraph">
              Utilized Bootstrap for creating responsive, <br />
              mobile-first web designs efficiently.
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472943/Learn_Java_Script_Along_With_Asp_Net_http___www.slideshare_xof95m.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">JavaScript</h4>
            <p className="skills-technology-paragraph">
              Skilled in writing dynamic and <br />
              interactive web applications.
            </p>
          </div>
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472153/Unconfirmed_961666_y0t6jn.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading ">React</h4>
            <p className="skills-technology-paragraph">
              Experienced in building single- <br />
              page applications using React.
            </p>
          </div>
        </div>
        <h1 className="skills-heading styled-node">
          Back-End <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology skill-styled">
          <div className="skills-text-content styled-python">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472153/download_2_x6uyqx.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Python</h4>
            <p className="skills-technology-paragraph">
              Proficient in Python for various applications, including
              <br /> web development and data analysis.
            </p>
          </div>
          <div className="skills-text-content styled-node">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472154/NodeJS_logo_kgiwta.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Node.js</h4>
            <p className="skills-technology-paragraph">
              Experienced in building server-side
              <br /> applications using Node.js.
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472154/A_Quick_Guide_to_Handling_Express_js_Errors_in_Your_Application_y5kxvq.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Express</h4>
            <p className="skills-technology-paragraph">
              Skilled in developing RESTful <br />
              APIs with Express framework.
            </p>
          </div>
        </div>
        <h1 className="skills-heading">
          Databases <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology skill-styled">
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472155/SQL_Basics_Hands-On_Beginner_SQL_Tutorial_Analyzing_Bike-Sharing_pwr9rr.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">MySQL</h4>
            <p className="skills-technology-paragraph">
              Proficient in writing complex SQL queries
              <br /> for database management and manipulation.
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472155/MongoDB_affine_l_%C3%A9quilibrage_de_charge_avec_sa_version_2_4_-_Le_Monde_Informatique_otczxa.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">MongoDB</h4>
            <p className="skills-technology-paragraph">
              Experienced in working with MongoDB <br />
              for NoSQL database solutions.
            </p>
          </div>
        </div>
        <h1 className="skills-heading">
          Other <span className="skills-span-element">Technologies:</span>{' '}
        </h1>
        <div className="skills-technology">
          <div className="skills-text-content styled-react">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709473360/Figma__The_Collaborative_Interface_Design_Tool_gpmsfu.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">Figma</h4>
            <p className="skills-technology-paragraph">
              Proficient in using Figma for UI/UX design <br />
              and prototyping, ensuring seamless design collaboration.
            </p>
          </div>
          <div className="skills-text-content styled-express">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709472155/MongoDB_affine_l_%C3%A9quilibrage_de_charge_avec_sa_version_2_4_-_Le_Monde_Informatique_otczxa.jpg"
              alt="save"
              className="skills-images"
            />
            <h4 className="skills-technology-heading">GitHub</h4>
            <p className="skills-technology-paragraph">
              Experienced in using GitHub for version <br />
              control, collaboration, and project management.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Skills
