import {useEffect} from 'react'
import emailjs from 'emailjs-com'
import ScrollReveal from 'scrollreveal'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Contact = () => {
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

    ScrollReveal().reveal(' .input-styled4', {
      origin: 'top',
    })
    ScrollReveal().reveal('.input-styled3', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.input-styled1  ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' .input-styled2 ', {
      origin: 'right',
    })
  }, [])

  const sendEmail = e => {
    e.preventDefault()

    const serviceID = 'service_hp1r3v9'
    const templateID = 'template_cpqpaa9'
    const userID = 'Xre_tkyZmED3K93eh'

    console.log('Sending email with the following IDs:')
    console.log(`Service ID: ${serviceID}`)
    console.log(`Template ID: ${templateID}`)
    console.log(`User ID: ${userID}`)

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      result => {
        console.log('SUCCESS!', result.status, result.text)
        e.target.reset()
      },
      error => {
        console.error('FAILED...', error)
      },
    )
  }

  return (
    <>
      <Header />
      <div className="contact-main-container">
        <h2 className="contact-heading input-styled4">
          Contact <span className="contact-span">Me</span>
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="hidden"
            name="access_key"
            value="46bb3fe9-0398-4403-81a9-49503f8b3a60"
          />
          <div className="input-card">
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              required
              className="input1 input-styled1"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Mail Id"
              required
              className="input1 input-styled2"
            />
          </div>
          <div className="input-card">
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              required
              name="user_number"
              className="input1 input-styled2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject Of The Mail"
              required
              className="input1 input-styled1"
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter Your Message Here..."
            className="text-area input-styled3"
          />
          <button type="submit" className="contact-button input-styled4">
            Submit
          </button>
        </form>
        <Footer />
      </div>
    </>
  )
}

export default Contact
