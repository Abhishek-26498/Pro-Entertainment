import React, { useState } from 'react'
import Navbar from './Navbar'
import '../css/Signup.css'
import tree from '../images/tree.png' 
import {Link} from 'react-router-dom'
const Signup = () => {

  const [userRegisteration, setUserRegisteration] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });

  const[records, setRecords] =useState([])

  const handelInput=(e)=>{
      const name= e.target.name;
      const value= e.target.value;
    

      setUserRegisteration({...userRegisteration, [name] : value})
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      const newRecords = { ...userRegisteration, id:new Date().getTime().toString() }
      
      setRecords([...records, newRecords]);
      console.log(records)

      setUserRegisteration({username:"",email:"",phone:"",password:""})
  }

  return (
    <>
      <Navbar />
      <div className='Main-container'>

        <div className='left-container'>
          <img src={tree} alt='tree'/>
        </div>

        <div className='right-container'>
          
          <form className='signin_form' action='' onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <div className='first_input'>
              <label htmlFor='username'>FullName</label>
              <input autoComplete='off' type='text' 
              value={userRegisteration.username}
              onChange={handelInput}
              name='username' id='username' />
            </div>
            <div className='first_input'>
              <label htmlFor='email'>E-mail</label>
              <input autoComplete='off' type='text' 
              value={userRegisteration.email}
              onChange={handelInput}
              name='email' id='email' />
            </div>
            <div className='first_input'>
              <label htmlFor='phone'>Phone</label>
              <input autoComplete='off' type='text' 
              value={userRegisteration.phone}
              onChange={handelInput}
              name='phone' id='phone' />
            </div>
            <div className='first_input'>
              <label htmlFor='password'>Password</label>
              <input autoComplete='off' type='password' 
              value={userRegisteration.password}
              onChange={handelInput}
              name='password' id='password' />
            </div>
            <p>If you have already account. <Link to='/Signin'>Sign In</Link></p>
          <button type='submit'>SignUp</button>
          </form>
          <div>
            {
              records.map((currElem)=>{
                return(
                  <div className="showDAtaStyle">
                    <p>{currElem.username}</p>
                    <p>{currElem.email}</p>
                    <p>{currElem.phone}</p>
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

export default Signup