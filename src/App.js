import React from 'react'
import Firstpage from './components/Firstpage/Firstpage'
import './App.css'
import Services from './components/Services/Services'
import Project from './components/Project/Project'
import Estab from './components/Established/Estab'
import Clients from './components/Clients/Clients'
import Aboutus from './components/Aboutus/Aboutus'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
 
      <Firstpage/> 
      <Aboutus/>
      <Services/>
      <Project/>
      <Clients/>
      <Estab/>
<Footer/>
    </div>
  )
}

export default App
