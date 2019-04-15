import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import "photonkit/dist/css/photon.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
)