import React from 'react'
import { AiFillPauseCircle } from "react-icons/ai";

const Pause = (props) => {
    const { handleClick } = props;
  return (
    <>
        <button className='player_button' onClick={() => handleClick()}>
            <AiFillPauseCircle/>
        </button>
    </>
  )
}

export default Pause