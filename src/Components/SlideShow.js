import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SongsData from './SongsData'
import '../css/Cards.css'

const SlideShow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    display: true,
    width: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <>
      <div className='heading'>
        <h1>New Release</h1>
      </div>
      <Slider className='slider_width'{...settings}>
        {SongsData.map((item, index) => {
          return (
            <div key={index} className='slideshow'>
              <img src={item.image} />
            </div>
          )
        })}
      </Slider>
    </>
  )
}
export default SlideShow

