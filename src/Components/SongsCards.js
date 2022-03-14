import React from 'react'
import '../css/Cards.css'
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
                            <p>{item.title}</p>
                        </div>
                    )
                })}

            </div>


        </>
    )
}

export default SongsCards