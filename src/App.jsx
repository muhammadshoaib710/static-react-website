import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Program" title="What we Offer" />
        <Programs/>
        <About/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subTitle="Testimonial" title="What Students Says" />
        <Testimonial/>
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact/>
        
        </div>
        <Footer/>
    </div>
  )
}

export default App