import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';



const SocialContainer = () => {


  return (
    <div className='ml-auto'>
        <div className='social-container'>
            <FaFacebook className="social-icon" href='https://www.facebook.com/PrimatesFromOuterSpaceBand' size={35} />
            <FaInstagram className="social-icon" href='https://www.instagram.com/primates_from_outer_space_band/' size={35} />
            <FaYoutube className="social-icon" href='https://www.youtube.com/' size={35}/>
        </div>
    </div>
  )
}

export default SocialContainer