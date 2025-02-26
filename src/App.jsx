import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import TempleScience from './pages/TempleScience'
import Blogs from './pages/blogs'
import Contact from './pages/contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Donate from './pages/Donate'

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ourstory' element={<OurStory/>}/>
        <Route path='/current-projects' element={<Projects/>}/>
        <Route path='/temple-science' element={<TempleScience/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/donate' element={<Donate/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
