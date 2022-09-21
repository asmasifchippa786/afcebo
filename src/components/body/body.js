import React from 'react';
import Center from './compoenets of body/center/center'
import Left from './compoenets of body/left/left'
import Right from './compoenets of body/right/right'
import './body.css'

function Body() {
  return (
    <>
      <div className="body">
      <Left />
      <Center/>
      <Right/>
      </div>
    </>
  )
}

export default Body
