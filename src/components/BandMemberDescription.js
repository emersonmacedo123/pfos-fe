import React from 'react'

const BandMemberDescription = (props) => {
    return (
        <div>
            <div id='member-description-container' style={{ flex: '1' }}>
                <h1 id='name-contanier'>{props.name}</h1>
                <div id='member-description'>
                    {props.description}
                </div>
                <div id='member-social-media'>
                    <h1>[member-social-media]</h1>
                </div>
            </div>
        </div>
    )
}

export default BandMemberDescription