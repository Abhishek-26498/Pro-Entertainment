import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/Cards.css'
import SongsData from './SongsData'
const Library = () => {
   
    const [item, setItems] = useState(SongsData);
    const filterSongs=(category)=>{
        const updateItems = SongsData.filter((curElem)=> {
            return curElem.category === category;
        });
        setItems(updateItems);
    }
    return (
        <>
            <Navbar />
            <div className='btn_container'>
                <button className='cat_btn' onClick={()=>filterSongs('hindi')} >Hindi</button>
                <button className='cat_btn' onClick={()=>filterSongs('punjabi')}>Punjabi</button>
                <button className='cat_btn' onClick={()=>filterSongs('english')}>English</button>
                <button className='cat_btn' onClick={()=>filterSongs('haryanvi')}>Haryanvi</button>
            </div>


            <div className='card_container'>
              
                {item.map((item, index) => {
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

export default Library