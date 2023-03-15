import React from 'react'
import SocialIconsMini from './SocialIconsMini'

const BandMemberDescription = (props) => {
    return (

        <div id='member-description-container' style={{ flex: '1'}}>
            <div className='name-contanier'>
                <h1 style={{marginRight: '10px'}}>{props.name}  </h1><SocialIconsMini />
            </div>

            <div id='member-description' style={{textAlign: 'justify',fontSize: 'small'}}>
                {props.description}
            </div>
            
        </div>

    )
}

export default BandMemberDescription