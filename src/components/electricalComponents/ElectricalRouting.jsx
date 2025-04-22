import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus'
import Services from './Services'
import Certifications from './Certifications'
import Portfolio from './Portfolio'
import Contact from './Contact'
import WhyChooseUs from './WhyChooseUs'
const ElectricalRouting = () => {
  return (
    <div className='flex flex-col min-h-screen h-auto w-full '>
     <Home/>
     <Aboutus/>
     <Services/>
     <Portfolio/>
     <Certifications/>
    <Contact/>
    <WhyChooseUs/>
    </div>
  )
}

export default ElectricalRouting