import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaMailchimp } from 'react-icons/fa';
import NavLink from 'react-bootstrap/esm/NavLink';



const SocialIconsHome = (props) => {
    return (
        <div className='home-social-icons'>
            {/* <h5 style={{color:'aliceblue'}}>Follow us on social media:</h5> */}

            <NavLink className='home-social-icon' href={props.facebookLink}><FaFacebook /></NavLink>
            <NavLink className='home-social-icon' href={props.instagramLink}><FaInstagram /></NavLink>
            <NavLink className='home-social-icon' href={props.youtubeLink}><FaYoutube /></NavLink>
            <NavLink className='home-social-icon' href={props.spotifyLink}><FaSpotify /></NavLink>
            <NavLink className='home-social-icon' href={`mailto:${props.emailAddress}`}><FaMailchimp /></NavLink>

            {/* <FontAwesomeIcon icon={faLinktree} /> */}
        </div>
    )
}

export default SocialIconsHome