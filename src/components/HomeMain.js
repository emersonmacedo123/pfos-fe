import React from 'react'
import PrimatesLogo from '../assets/images/primates_logo_nobg.png';

const HomeMain = () => {
  return (
    <div id='Home'>
        <h1 id='home-title'>Primates From Outer Space</h1>
        <h4 id='home-description'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h4>
        {/* eslint-disable-next-line */}
        <img src={PrimatesLogo} alt="your-image" />
    </div>
  )
}

export default HomeMain