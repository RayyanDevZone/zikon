import React from 'react'
import './Services.scss'
import civil from '../../images/civil.jpg'
import cctv from '../../images/cctv.jpg'
import electrical from '../../images/electrical.jpg'
const Services = () => {
  return (
    <div className='services'>
    <div className='upperservice'>
<div className='titleservice'>
    <h1>SERVICES  </h1>
</div>
<div className='descService'>
    <p>At Zikon, we see construction as more than building structures—it’s about creating lasting foundations for growth and innovation. With expertise across civil, mechanical, and electrical construction, we bring unmatched precision and dedication to every project. Our client-focused, quality-driven approach ensures each phase, from planning to completion, is executed with excellence. Offering specialized services to meet unique project needs, our team is committed to exceeding expectations, on time and within budget. Partner with Zikon for a construction experience that’s as reliable as it is exceptional.</p>
</div>
    </div>
    <div className='lowerservice'>
    <div className='cards'>
        <img src={civil} alt='civil'></img>
        <p>CIVIL TENDERS</p>
    </div>
    <div className='cards'>
    <img src={electrical} alt='electrical'></img>
    <p>ELECTRICAL TENDERS</p>
        </div>
        <div className='cards'>
        <img src={cctv} alt='cctv'></img>
        <p>CCTV TENDERS</p>
        </div>

    </div> 
      
    </div>
  )
}

export default Services