import React from 'react'
import './Estab.scss'
const Estab = () => {
  return (
    <div className='estab'>
      <div className='grey'>
        <div className='card-container-grey'>
          <div className='card-grey'>
            <h1>Year<br/> Established</h1>
            <h1 className='white-head'>2024</h1>
          </div>
          <div className='card-grey'> <h1>Completed<br/> Projects</h1>
          <h1 className='white-head'>50+</h1></div>
          <div className='card-grey'>
          <h1>Skilled<br/> Team</h1>
          <h1 className='white-head'>500+</h1>
          </div>
        </div>
      </div>
      <div className='white'>
        <div className='card-container-white'>
          <div className='card-white'></div>
          <div className='card-white'></div> 
          <div className='card-white'></div>
          <div className='card-white'></div>
        </div>
      </div>
    </div>
  )
}

export default Estab
 