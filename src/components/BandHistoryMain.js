import React from 'react'
import LorenBigText from './LorenBigText'
import PrimatesLogo from '../assets/images/primates_logo_nobg.png';


const BandHistoryMain = () => {
    const myStyle = {
        display: 'flex',
        alignItems: 'center',

    }
    return (
    <div className='band-history'>
        <br></br>
        <div id='history-container'>
            <h1 className='title'>Band History</h1>
            <div style={myStyle}>
            <LorenBigText/>    
            {/* eslint-disable-next-line */}
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
            </div>


            <div style={myStyle}>
            {/* eslint-disable-next-line */}
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
            <LorenBigText/>
            
            </div>
        </div>
        <br />
    </div>
  )
}

export default BandHistoryMain