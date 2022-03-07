import React from 'react';
import Landingpage from './Components/Landingpage';
import MainApp from './Components/MainApp';
import SignIn from './Components/SignIn';
import { Routes,Route } from 'react-router-dom';
import Explore from './Components/Explore';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>;
      <Route path='/mainapp' element={<MainApp/>}/>;
      <Route path='/signin' element={<SignIn/>}/>;
      <Route path='/explore' element={<Explore/>}/>;
    </Routes>
    </>
  )
}

export default App;