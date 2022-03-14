import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SongsData from './SongsData'

const SlideShow = () => {
  return (
    <>
    <Carousel>
        {SongsData.map((index,item)=>{
            return(

                <div key={index} className='slideshow'>
                    <img src={item.image} />
                </div>
            )
        })}
    </Carousel>
    
    </>
  )
}

export default SlideShow

