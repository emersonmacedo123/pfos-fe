import React from 'react'
import BandMemberDescription from './BandMemberDescription'

const BandMember = (props) => {
    const myStyle = {
        display: 'flex',
        alignItems: 'center',

    }
    return (
        <div className='bandMember-container' style={myStyle}>
            {props.photoLeft ? (
                <>
                    <div id='member-photo-container-right' style={{ flex: '1' }}>
                        {/* eslint-disable-next-line */}
                        <img src={props.photo} alt="your-image" style={{ maxWidth: '100%', maxHeight: '400px' }}></img>
                    </div>
                    <BandMemberDescription name={props.name} description={props.description} />
                </>

            ) : (
                <>
                    <BandMemberDescription name={props.name} description={props.description} />
                    <div id='member-photo-container-right' style={{ flex: '1' }}>
                        {/* eslint-disable-next-line */}
                        <img src={props.photo} alt="your-image" style={{ maxWidth: '100%', maxHeight: '400px' }}></img>
                    </div>
                </>
            )}



        </div>
    )
}

export default BandMember