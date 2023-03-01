import React from 'react'
import Loren_big_text from './Loren_big_text'

const Container = () => {

    const myStyle={
        height: '100%',
        width: '100%',
        overflowy: 'scroll',
    }

  return (
    <div style={myStyle}>
        <Loren_big_text/>
        <Loren_big_text/>

        <Loren_big_text/>

        <Loren_big_text/>
        <Loren_big_text/>
        <Loren_big_text/>
        <Loren_big_text/>

    </div>
  )
}

export default Container