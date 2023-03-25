import React from 'react'
import SocialIconsHome from './SocialIconsHome';

const Footer = () => {

    let copyright = String.fromCodePoint(0x00A9);


  return (
    <div className='footer-main'>
        <h3>Colorlib.com</h3>
        <h3>Navbar Links</h3>
        <SocialIconsHome emailAddress='emersonengprod@gmail.com' />
        <h6 id='copyright-item'>Copyright {copyright}2023 All rights reserved | Made by Emerson Macedo</h6>
    </div>
  )
}

export default Footer