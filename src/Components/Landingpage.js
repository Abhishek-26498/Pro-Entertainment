import React from 'react'
import '../css/Landingpage.css';


import { Link } from "react-router-dom";


const Landingpage = () => {
    return (
        <>
            <div className='landing_main'>
                <img className='background_img' src='./images/bg.png' alt='backgound' />
            
                <div className='container_'>
                <div className='header'>
                        <img className='logo_img' src='./images/landing-logo.png' alt='' />
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
                   

             

            </div>


        </>
    )
}

export default Landingpage