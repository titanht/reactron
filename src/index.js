import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

// import './static/css/bootstrap.min.css';
import "photonkit/dist/css/photon.css";

ReactDom.render(
  <App />, 
  document.getElementById('root')
)