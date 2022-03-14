import React from 'react';
import Landingpage from './Components/Landingpage';
import MainApp from './Components/MainApp';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Library from './Components/Library';
import { Routes,Route } from 'react-router-dom';
import Explore from './Components/Explore';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>;
      <Route path='/mainapp' element={<MainApp/>}/>;
      <Route path='/signup' element={<Signup/>}/>;
      <Route path='/signin' element={<Signin/>}/>;
      <Route path='/explore' element={<Explore/>}/>;
      <Route path='/library' element={<Library/>}/>;
    </Routes>
    </>
  )
}

export default App;