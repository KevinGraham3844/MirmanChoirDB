/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CreateEntry from './components/CreateEntry'
import SingleEntry from './components/SingleEntry'
import Search from './components/Search'


const App = () => {

  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/create' element={<CreateEntry />} />
        <Route path='/:id' element={<SingleEntry />} />
        <Route path='/search' element={<Search />} /> 
      </Routes>
    
    </>
  )
}

export default App
