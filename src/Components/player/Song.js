import React from 'react'

const Song = (props) => {
    const{songName} = props
  return (
    <>
        <div className='song'>
            <h1 className='song__title'>{songName}</h1>         
        </div> 
    </>
  )
}

export default Song