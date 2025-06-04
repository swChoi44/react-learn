import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './component_yoo/Header'
import Home from './component_yoo/Home'
import Archive from './component_yoo/Archive'
import Footer from './component_yoo/Footer'
import "./yoo.css"

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/archive' element={<Archive/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
