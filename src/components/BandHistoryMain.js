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
        <br />
        <div id='history-title'>
            <h1 style={{fontWeight:'bold', textAlign:'left'}}>Band History</h1>
            <div style={myStyle}>
            <LorenBigText/>    
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
            </div>


            <div style={myStyle}>
            <img src={PrimatesLogo} alt="your-image" sizes='big' />
            <LorenBigText/>
            
            </div>
        </div>
        <br />
    </div>
  )
}

export default BandHistoryMain