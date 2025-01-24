import React from 'react'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home.jsx'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App