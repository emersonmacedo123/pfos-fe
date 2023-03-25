import React from 'react'
import InstagramTest from './InstagramTest'


const InstagramContainer = () => {
    const My_token = 'https://v1.nocodeapi.com/dme2/instagram/pWWKQNUTJyVSxAXQ'


    return (
        <div className='instagram-container-main'>
            <h1>test</h1>
            <InstagramTest token={My_token} limit={9} />

        </div>
    )
}

export default InstagramContainer