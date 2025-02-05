import React from 'react'
import './Estab.scss'
import hunet from '../../images/hunet.jpeg'
import lt from '../../images/LT.png'
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
          <div className='card-white'>
            <img src={hunet} alt='hunet'></img>
          </div>
          <div className='card-white'>
            <img src={lt} alt='L&T' id='lt'></img>
          </div> 
          <div className='card-white'>
            <img className='railway' src="https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png" alt='indian railway'></img>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Estab
 