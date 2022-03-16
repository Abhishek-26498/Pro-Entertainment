import React from 'react'
import '../css/Cards.css'
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

import SongsData from './SongsData'
const SongsCards = () => {
    console.log(SongsData);
    return (
        <>
            <div className='card_container'>
              
                {SongsData.map((item, index) => {
                    return (
                        <div key={index} className='cards'>
                           
                            <img src={item.image} />
                            <AiOutlineHeart className='heart'/>
                            <p>{item.title}</p>
                            <BsThreeDotsVertical  className='dots'/>
                        </div>
                    )
                })}

            </div>


        </>
    )
}

export default SongsCards