import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Audio from './Components/player/Audio'

ReactDOM.render(
  <>
  
  <BrowserRouter>
  <App />
  </BrowserRouter>
  <Audio/>
  </>,
  document.getElementById('root')
);

