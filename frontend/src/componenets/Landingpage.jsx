import React, { useEffect } from 'react'
import Header from './header'
import Herosection from './Herosection'
import Ourfavorites from './Ourfavorites'
import Imagecontainer from './Imagecontainer'
import Footer from './Footer'
const Landingpage = () => {
  return (
    <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-[#442d4e] to-yellow-100 min-h-screen'>
      <div className='herobg'>
        <Header/>
        <Herosection/>
      </div>
      <Ourfavorites/>
      <Imagecontainer/>
      <Footer/>
    </div>
  )
}

export default Landingpage