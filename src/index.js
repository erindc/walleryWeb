import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.Fragment>
  , document.getElementById('root'));

serviceWorker.unregister();
