import React from 'react'
import drummer1 from '../assets/images/MembersPhoto/drummer1.jpg'
import singer1 from '../assets/images/MembersPhoto/singer1.jpg'
import guitar1 from '../assets/images/MembersPhoto/guitarPlayer1.jpg'
import bass1 from '../assets/images/MembersPhoto/bassPlayer1.jpg'
import BandMember from './BandMember'
import LorenSmallText from './LorenSmallText'

export const MembersMain = () => {
    
  return (
    <div className='members-main'>
        <h1 className='title'>Band Members</h1>
        <br></br>
        <BandMember 
            name="Mouad"
            description={<LorenSmallText />} 
            photo={singer1} 
            photoLeft={false}
        />

        <BandMember 
            name="Ulises"
            description={<LorenSmallText />} 
            photo={guitar1} 
            photoLeft={true}
        />

        <BandMember 
            name="Matheus"
            description={<LorenSmallText />} 
            photo={bass1} 
            photoLeft={false}
        />

        <BandMember 
            name="Emerson"
            description={<LorenSmallText />} 
            photo={drummer1} 
            photoLeft={true}
        />
        
        
        
    </div>
  )
}
