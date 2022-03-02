import React from 'react'
import '../Components/css/Landingpage.css';
import background from '../images/bg.png';
import logo from '../images/landing-logo.png';
import { Link } from "react-router-dom";


const Landingpage = () => {
    return (
        <>
            <div className='landing_main'>
                <img className='background_img' src={background} alt='backgound'/>
                <div className='header'>
                    <img className='logo_img' src={logo} alt='' />
                    <h2>Pro-Entertainment</h2>
                </div>
                <div className='middle'>
                    <h1>MUSIC FOR EVERYONE</h1>
                </div>
                <div className='qote'>
                    <p>Music is the moonlight in the gloomy night of light</p>
                </div>
                <div className='btn'>
                    <Link to='/MainApp'>Start Listening</Link>
                </div>
            </div>


        </>
    )
}

export default Landingpage