import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import NavLink from 'react-bootstrap/esm/NavLink';

const SocialIconsMini = (props) => {
  return (
    <div className='member-icon'>
        <NavLink className='member-icon-1icon' href={props.facebookLink}><FaFacebook /></NavLink>
        <NavLink className='member-icon-1icon' href={props.instagramLink}><FaInstagram /></NavLink>
    </div>
  )
}

export default SocialIconsMini