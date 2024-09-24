import React from 'react';
import './App.css'
import Routers from './routes/Routers';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <Routers/>
      <Footer/>
    </>
  )
}

export default App
