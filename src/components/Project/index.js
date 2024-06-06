import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import {FaArrowUpRightFromSquare} from 'react-icons/fa6'
import Header from '../Header'
import TaskImage from '../../images/task image.jpg'
import BookStore from '../../images/BookStore1.jpg'
import InstaShare from '../../images/instashare.jpg'
import Footer from '../Footer'

import './index.css'

const Project = () => {
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

    ScrollReveal().reveal(' .project-styled2', {
      origin: 'top',
    })
    ScrollReveal().reveal('.project-styled4', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.project-styled1  ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' .project-styled3 ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      <Header />
      <div className="project-main-container">
        <div className="project-design-container">
          <div className="project-card-container project-styled1">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709376742/Netflix__Here_s_the_list_of_top_20_trending_movies_series_in_December_dzjeyo.jpg"
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">Netflix Clone</h4>
              <p className="project-paragraph">
                Netflix clone website is created using ReactJS which is the
                replica of the popular streaming platform - Netflix, complete
                with similar features and user interface. Username: saira,
                Password: princess@9
              </p>
              <a
                href="https://reactjsmini.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
          <div className="project-card-container project-styled2">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380062/Free_Vector___E-commerce_round_composition_iyyl6b.jpg"
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">NxT Trendz</h4>
              <p className="project-paragraph">
                NxT Trendx is a E-Commerce website built using ReactJS. Its
                replica of Flipkart or Amaxon. Username: rahul, Password:
                rahul@2021
              </p>
              <a
                href="https://reactjsmini.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
          <div className="project-card-container project-styled3">
            <img src={InstaShare} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Insta Share</h4>
              <p className="project-paragraph">
                Netflix clone website is created using ReactJS which is the
                replica of the popular streaming platform - Netflix, complete
                with similar features and user interface. Username: saira,
                Password: princess@9
              </p>
              <a
                href="https://reactjsmini.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
          <div className="project-card-container project-styled3">
            <img src={BookStore} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Netflix Clone</h4>
              <p className="project-paragraph">
                Netflix clone website is created using ReactJS which is the
                replica of the popular streaming platform - Netflix, complete
                with similar features and user interface. Username: saira,
                Password: princess@9
              </p>
              <a
                href="https://reactjsmini.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
          <div className="project-card-container project-styled4">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1710001008/Premium_Vector___Jobs_search_recruitment_hiring_employment_find_job_openings_opportunities_for_career_growth_young_unemployed_man_uses_a_magnifying_glass_to_search_for_recruitment_illustration_q77nfg.jpg"
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">Jobby App</h4>
              <p className="project-paragraph">
                Jobby was developed using ReactJS. Jobby app is a job searching
                platform. Username: rahul, Password: rahul@2021
              </p>
              <a
                href="https://babbucreations.ccbp.tech/login"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>

          <div className="project-card-container project-styled1">
            <img src={TaskImage} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Task Managing App</h4>
              <p className="project-paragraph">
                Task Managing App was created using ReactJS which allows user to
                manage their tasks.
              </p>
              <a
                href="https://taskmanaging.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>

          <div className="project-card-container project-styled3">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380071/38833_1_apfnyy.jpg"
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">Food Much</h4>
              <p className="project-paragraph">
                Food Much was built using HTML, CSS, Flex-box. Food Much is a
                Responsive Food Delivery App.
              </p>
              <a
                href="https://foodhubmunch.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
          <div className="project-card-container project-styled3">
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1709380058/Download_Rock_Paper_Scissors_Neon_Icons_for_free_vngpjq.jpg"
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">Rock Paper Scissor</h4>
              <p className="project-paragraph">
                Rock Paper Scissor is an user friendly game developed using
                ReactJS.
              </p>
              <a
                href="https://babbugames.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ReactJS Mini project in a new tab"
                className="project-anchor-link"
              >
                <FaArrowUpRightFromSquare className="project-link-icon" />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Project
