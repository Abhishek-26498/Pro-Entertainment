import React from 'react'
import '../Components/css/Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
    return (
        <>
            <div className='side_bar_wrapper'>
                <Link to='/' >HOME</Link>
                <Link to='/' >EXPLORE</Link>
                <Link to='/' >LIBRARY</Link>
                <Link to='/' >RECENT</Link>
                <Link to='/' >HISTORY</Link>

                <div className='bottom_content'>
                    <p>About  Press  Copyright  Contact us  Creators  Advertise  Developers

                        Terms  Privacy  Policy & Safety
                        How Pro-Entertainment works
                        Test new features

                        © 2022 Google LLC</p>
                </div>

            </div>
        </>
    )
}

export default Sidebar
