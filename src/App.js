import React from 'react'
import Firstpage from './components/Firstpage/Firstpage'
import './App.css'
import Services from './components/Services/Services'
import Project from './components/Project/Project'
import Estab from './components/Established/Estab'
import Clients from './components/Clients/Clients'
import Aboutus from './components/Aboutus/Aboutus'
import Footer from './components/Footer/Footer'
import Fpage from './components/Fpage/Fpage'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
 <Fpage/>
      {/* <Firstpage/>  */}
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
