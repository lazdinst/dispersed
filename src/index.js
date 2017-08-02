import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
// import App from './App';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
   <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root')
);
registerServiceWorker();