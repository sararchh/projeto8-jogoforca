import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <>
    <App/>
    <GlobalStyle />
  </>
  , document.getElementById('root'))