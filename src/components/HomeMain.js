import React from 'react'
import PrimatesLogo from '../assets/images/primates_logo_nobg.png';

const HomeMain = () => {
    const myStyle = {
        display: 'flex',
        alignItems: 'center',

    }
    return (
        <div id='Home' style={myStyle} >
            <div id='home-title-and-description'>
                <h1 id='home-title' style={{fontWeight:'bold'}}>Primates From Outer Space</h1>
                <h4 id='home-description' style={{textAlign: 'justify',margin: '20px',fontSize: 'small'}}>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h4>
                <h3>== ADD Social media link box here ==</h3>
            </div>
            {/* eslint-disable-next-line */}
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
        </div >
    )
}

export default HomeMain