import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import {FaCode, FaPalette} from 'react-icons/fa'
import {SiOpenapiinitiative, SiBackendless} from 'react-icons/si'
import {RiDatabaseFill} from 'react-icons/ri'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Service = () => {
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

    ScrollReveal().reveal(' .service-styled', {
      origin: 'top',
    })
    ScrollReveal().reveal('.service-bottom-styled', {
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
      <div className="service-container">
        <div className="service-main-container">
          <div className="service-card-container service-styled">
            <FaCode className="service-icon" />
            <h3 className="service-heading">Web Development</h3>
            <p className="service-paragraph">
              As a web developer, I create dynamic and functional websites using
              a combination of front-end and back-end technologies. I specialize
              in building responsive, user-friendly interfaces that enhance the
              user experience. Whether it’s an e-commerce site, a blog, or a
              custom web application, I bring ideas to life through code.
            </p>
          </div>
          <div className="service-card-container service-bottom-styled">
            <FaCode className="service-icon" />
            <h3 className="service-heading">UI Development</h3>
            <p className="service-paragraph">
              UI (User Interface) development focuses on creating the visual
              elements of a website or application. I specialize in turning
              design mockups into interactive interfaces using HTML, CSS, and
              JavaScript. My goal is to ensure that users have a seamless and
              enjoyable experience while interacting with your product.
            </p>
          </div>
          <div className="service-card-container service-bottom-styled">
            <FaPalette className="service-icon" />
            <h3 className="service-heading">UI Designing</h3>
            <p className="service-paragraph">
              UI design is all about aesthetics and usability. As a UI designer,
              I craft visually appealing layouts, choose color schemes, and
              create intuitive navigation. I pay attention to details like
              typography, spacing, and consistency. My designs aim to enhance
              the overall look and feel of your digital product.
            </p>
          </div>
          <div className="service-card-container service-styled">
            <SiOpenapiinitiative className="service-icon" />
            <h3 className="service-heading">API Development</h3>
            <p className="service-paragraph">
              Our API Development service focuses on building and integrating
              RESTful and GraphQL APIs to enable seamless data communication
              between your applications and external systems. APIs serve as the
              backbone of modern web and mobile applications, allowing different
              software systems to communicate with each other and share data.
            </p>
          </div>
          <div className="service-card-container service-styled">
            <RiDatabaseFill className="service-icon" />
            <h3 className="service-heading">Database Management</h3>
            <p className="service-paragraph">
              In addition to database design and implementation, we also offer
              ongoing database management and optimization services to ensure
              that your database continues to perform optimally over time. This
              includes monitoring database performance, tuning queries,
              implementing backup and recovery strategies, and implementing
              security best practices to protect your data from unauthorized
              access and data loss.
            </p>
          </div>
          <div className="service-card-container service-bottom-styled">
            <SiBackendless className="service-icon" />
            <h3 className="service-heading">Backend Development</h3>
            <p className="service-paragraph">
              Our Backend Development service focuses on building the
              server-side logic and infrastructure that powers your
              applications. The backend is responsible for handling tasks such
              as data storage, retrieval, authentication, and business logic
              processing, ensuring that your application functions smoothly and
              securely.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Service
