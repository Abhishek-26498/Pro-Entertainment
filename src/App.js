import React from 'react';
import Landingpage from './Components/Landingpage';
import MainApp from './Components/MainApp';
import SignIn from './Components/SignIn';
import { Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>;
      <Route path='/mainapp' element={<MainApp/>}/>;
      <Route path='/signin' element={<SignIn/>}/>;
    </Routes>
    </>
  )
}

export default App;