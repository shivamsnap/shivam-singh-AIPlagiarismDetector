import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Upload from '../pages/Upload';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
    </Routes>
  )
}

export default Routers;