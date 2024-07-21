/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CreateEntry from './components/CreateEntry'
import SingleEntry from './components/SingleEntry'

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/create' element={<CreateEntry />} />
        <Route path='/:id' element={<SingleEntry />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
