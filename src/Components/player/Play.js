import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

const Play = (props) => {
    const { handleClick } = props;
  return (
    <>
       <button className='player_button' onClick={() => handleClick()}> <AiFillPlayCircle/>
       </button>
    </>

  )
}

export default Play;