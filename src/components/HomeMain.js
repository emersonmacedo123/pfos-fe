import React from 'react'
import PrimatesLogo from '../assets/images/primates_logo_nobg.png';
import SocialIconsHome from './SocialIconsHome';


const HomeMain = () => {
    const myStyle = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'

    }
    return (
        <div id='Home' style={myStyle} >
            <div id='home-title-and-description'>
                <h1 id='home-title' style={{fontWeight:'bold', fontSize:'2.8rem'}}>Primates From Outer Space</h1>
                <h4 id='home-description' style={{textAlign: 'justify',margin: '20px',fontSize: 'small'}}>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h4>
                <br/>
                <SocialIconsHome emailAddress='emersonengprod@gmail.com'/>
            </div>
            {/* eslint-disable-next-line */}
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
        </div >
    )
}

export default HomeMain