import React from 'react'
import './Signup.css'

function Signup() {
    return (
        <div>
            <form >

                <div className='container_wrapper'>
                <div className="container">
                    <h2>Sign In</h2>
                    <label ><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label ><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label>
                    <button type="submit">Sign In</button>
                </div>
                </div>
                

            </form>
        </div>
    )
}

export default Signup
