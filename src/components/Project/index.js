import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import {FaArrowUpRightFromSquare} from 'react-icons/fa6'
import Header from '../Header'
import TaskImage from '../../images/task image.jpg'
import BookStore from '../../images/BookStore1.jpg'
import InstaShare from '../../images/instashare.jpg'
import PrimeVideo from '../../images/PrimeVideo.png'
import MatchGame from '../../images/MatchGame.jpg'
import Color from '../../images/Color.jpg'
import AppStore from '../../images/App-Store-1.jpg'
import NxtWatch from '../../images/Nxt watch image.jpeg'
import IPlDashboard from '../../images/IPL Dashboard.png'
import MoneyManagement from '../../images/Money Mangement.jpeg'
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
                href="https://awanishnxttend.ccbp.tech"
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
                Insta Share App website is created using ReactJS which is the
                replica of the popular streaming platform - Instagram, complete
                with similar features and user interface. Username: rahul,
                Password: rahul@2021
              </p>
              <a
                href="https://AwanishInstaApp.ccbp.tech"
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
              <h4 className="project-heading">BookStore</h4>
              <p className="project-paragraph">
                BookStore is a E-Commerce website is created using ReactJS which
                is the replica of the popular streaming platform - E-commerce,
                complete with similar features and user interface.
              </p>
              <a
                href="https://AwanishBookStor.ccbp.tech"
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
            <img src={NxtWatch} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Nxt Watch</h4>
              <p className="project-paragraph">
                The NXT Watch React.js project is a dynamic video streaming
                platform with user authentication, personalized recommendations,
                and responsive design, showcasing our expertise in building
                interactive, scalable web applications.
              </p>
              <a
                href="https://AwanishNxtwatch.ccbp.tech"
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
            <img src={IPlDashboard} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">IPL DashBoard </h4>
              <p className="project-paragraph">
                The IPL Dashboard React app offers real-time updates, detailed
                stats, and interactive charts for IPL matches. With a responsive
                design, it ensures accessibility on all devices, showcasing our
                skills in creating dynamic, data-driven applications using
                React.js.
              </p>
              <a
                href="https://Awanishipldash.ccbp.tech"
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
          <div className="project-card-container project-styled1">
            <img src={PrimeVideo} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Prime Video</h4>
              <p className="project-paragraph">
                Prime Video is a streaming service that offers a wide variety of
                TV shows, movies, and original content for its users. With
                ReactJS, we provide a dynamic and responsive user interface that
                enhances the viewing experience.
              </p>
              <a
                href="https://montyprimevio.ccbp.tech"
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
          <div className="project-card-container project-styled4">
            <img src={MatchGame} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Match Game</h4>
              <p className="project-paragraph">
                Match Game was built using HTML, CSS, JavaScript, Flex-box.
                Match Game is a Responsive Gaming App.
              </p>
              <a
                href="https://awanishmatchgam.ccbp.tech"
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
          <div className="project-card-container project-styled1">
            <img src={Color} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">Color Generator</h4>
              <p className="project-paragraph">
                Welcome to ColorGen, the perfect tool for generating stunning
                color palettes. Built with ReactJS, our site offers an easy and
                interactive way to create and customize color schemes.
              </p>
              <a
                href="https://montycolorgre.ccbp.tech"
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
            <img src={AppStore} alt="project1" className="project-image" />
            <div className="project-content">
              <h4 className="project-heading">App Store</h4>
              <p className="project-paragraph">
                Welcome to the App Store, your one-stop destination for
                discovering and downloading the latest apps and games. Our
                platform, designed with a sleek and user-friendly interface,
                makes it easy to browse through a vast collection of
                applications across various categories.
              </p>
              <a
                href="https://montyAppStore.ccbp.tech"
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
              src={MoneyManagement}
              alt="project1"
              className="project-image"
            />
            <div className="project-content">
              <h4 className="project-heading">Money Management</h4>
              <p className="project-paragraph">
                The Money Management React app tracks expenses, sets budgets,
                and visualizes spending with interactive charts. Built with
                React.js, it offers smooth, responsive design, showcasing our
                ability to create practical financial tools.
              </p>
              <a
                href="https://AwanishMoneyma.ccbp.tech"
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
