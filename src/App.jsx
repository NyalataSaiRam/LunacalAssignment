import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Information from './components/information/Information.component'
import Gallery from './components/gallery/Gallery.component'

function App() {


  return (
    <div className='container'>
      <div className='leftside'></div>
      <div className='rightside'>
        <Information />
        <Gallery />
      </div>
    </div>
  )
}

export default App
