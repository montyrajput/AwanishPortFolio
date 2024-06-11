import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Header from '../Header'
import image1 from '../../images/FLBCJOKYUA_page-0001.jpg'
import image2 from '../../images/LQTORPOFNF_page-0001.jpg'
import image3 from '../../images/ESVNPEFYBY_page-0001.jpg'
import image4 from '../../images/JJXIXDJIRK_page-0001.jpg'
import image5 from '../../images/SVFRMGJHFR_page-0001.jpg'
import image6 from '../../images/XWGBRRWGHC_page-0001.jpg'
import image7 from '../../images/CDLIMTWZDF_page-0001.jpg'
import image8 from '../../images/BTMNIWVPFQ (1)_page-0001.jpg'
import image9 from '../../images/RJOXLLSHFE (1)_page-0001.jpg'
import image10 from '../../images/IBM.jpg'
import image11 from '../../images/GitCertificate_page-0001.jpg'
import Footer from '../Footer'
import './index.css'

const Certificate = () => {
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

    ScrollReveal().reveal(' .static2', {
      origin: 'top',
    })
    ScrollReveal().reveal('.static3', {
      origin: 'bottom',
    })
    ScrollReveal().reveal('.static ', {
      origin: 'left',
      distance: '100px',
      duration: 2000,
      delay: 200,
    })
    ScrollReveal().reveal(' .static1 ', {
      origin: 'right',
    })
  }, [])
  return (
    <>
      <Header />
      <div className="certificate-main-container">
        <div className="certificate-image-container">
          <img src={image10} alt="save" className="certificate static" />
          <img src={image1} alt="save" className="certificate static2" />
          <img src={image2} alt="save" className="certificate static1" />
          <img src={image4} alt="save" className="certificate static1" />
          <img src={image7} alt="save" className="certificate static3" />
          <img src={image6} alt="save" className="certificate static" />
          <img src={image3} alt="save" className="certificate static" />
          <img src={image11} alt="save" className="certificate static2" />
          <img src={image5} alt="save" className="certificate static1" />
          <img src={image8} alt="save" className="certificate static1" />
          <img src={image9} alt="save" className="certificate1 static" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Certificate
