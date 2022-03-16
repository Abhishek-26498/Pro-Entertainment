import React from 'react';
import Landingpage from './Components/Landingpage';
import MainApp from './Components/MainApp';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Library from './Components/Library';
import { Routes,Route } from 'react-router-dom';
import Explore from './Components/Explore';
import './App.css'
// import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Landingpage/>}/>;
      <Route path='/mainapp' element={<MainApp/>}/>;
      <Route path='/signup' element={<Signup/>}/>;
      <Route path='/signin' element={<SignIn/>}/>;
      <Route path='/explore' element={<Explore/>}/>;
      <Route path='/library' element={<Library/>}/>;
    </Routes>
    </>
  )
}

export default App;