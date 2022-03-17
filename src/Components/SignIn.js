import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/Signup.css'

import { Link } from 'react-router-dom'
const Signin = () => {

  const [userRegisteration, setUserRegisteration] = useState({
    email: "",
    password: ""
  });

  const [records, setRecords] = useState([])
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegisteration({ ...userRegisteration, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = { ...userRegisteration, id: new Date().getTime().toString() }

    setRecords([...records, newRecords]);
    console.log(records)

    setUserRegisteration({ email: "", password: "" })
  }

  return (
    <>
      <Navbar />
      <div className='Main-container'>

        <div className='left-container'>
          <img src='./images/tree.png' alt='tree' />
        </div>
        <div className='right-container'>
          <form className='signin_form' action='' onSubmit={handleSubmit}>
            <h1>SignIn</h1>
            <div className='first_input'>
              <label htmlFor='email'>E-mail</label>
              <input autoComplete='off' type='text'
                value={userRegisteration.email}
                onChange={handelInput}
                name='email' id='email' />
            </div>

            <div className='first_input'>
              <label htmlFor='password'>Password</label>
              <input autoComplete='off' type='password'
                value={userRegisteration.password}
                onChange={handelInput}
                name='password' id='password' />
            </div>
            <p>If you are not register. <Link to='/Signup'>Sign Up</Link></p>
            <button type='submit'>SignIn</button>
          </form>
          <div>
            {
              records.map((currElem) => {
                return (
                  <div className="showDAtaStyle">

                    <p>{currElem.email}</p>

                    <p>{currElem.password}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>


  )
}

export default Signin