import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Experience = () => {
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

    ScrollReveal().reveal('.experience-styled1', {
      origin: 'top',
    })
    ScrollReveal().reveal('.experience-styled4', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.experience-styled2 ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal('.experience-styled3 ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      <Header />
      <div className="experience-main-container">
        <div className="experience-container">
          <h1 className="experience-heading experience-styled1">
            Full Stack Developer Internship
          </h1>
          <p className="experience-company experience-styled2">
            <strong className="experience-company1">Company : </strong> Nxtwave,
            <span className="experience-address"> (Hyderabad)</span>
          </p>
          <p className="experience-company experience-styled3">
            <strong className="experience-company2">Duration : </strong> October
            17, 2022 - Ongoing{' '}
            <span className="experience-month">(1 Year 9 Month)</span>
          </p>

          <p className="experience-paragraph experience-styled4">
            Since October 17, 2023, I have been engaged in a Full Stack
            Developer internship at Nxtwave, Hyderabad. During this internship,
            I have gained hands-on experience with a wide range of technologies,
            including HTML, CSS, JavaScript, Bootstrap, React.js, SQL, Node.js,
            Express.js, Python, GitHub, Figma, and databases like MongoDB. My
            responsibilities have included developing various types of web
            applications, such as static, responsive, dynamic, and
            framework-based projects. I have collaborated with cross-functional
            teams to design and implement user-friendly interfaces, ensuring a
            seamless user experience across different devices and platforms.
          </p>
          <p className="experience-paragraph experience-styled2">
            In addition to front-end and back-end development, I have also
            worked on integrating third-party APIs, optimizing application
            performance, and maintaining code quality through version control
            systems like GitHub. I have utilized Figma for UI/UX design,
            creating visually appealing and intuitive layouts that enhance user
            engagement. My experience with databases, particularly MongoDB, has
            involved designing and managing database schemas, performing CRUD
            operations, and ensuring data integrity and security.
          </p>
          <p className="experience-paragraph experience-styled3">
            One of the highlights of my internship has been the development of
            industry-ready projects. These projects have not only allowed me to
            apply my technical skills in real-world scenarios but also to
            understand industry standards and best practices. I have worked on
            end-to-end solutions, from initial requirement gathering to
            deployment, ensuring that the projects are scalable, maintainable,
            and efficient. This hands-on experience with industry-ready projects
            has been invaluable in preparing me for a professional career in
            full stack development.
          </p>
          <p className="experience-paragraph experience-styled4">
            This internship has significantly enhanced my technical skills,
            problem-solving abilities, and understanding of the full software
            development lifecycle. I am excited to continue expanding my
            expertise in full stack development and applying my knowledge to
            build innovative and efficient web solutions.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Experience
