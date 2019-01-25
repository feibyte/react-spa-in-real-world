// @flow

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// $FlowFixMe Flow think document.getElementById might return null
ReactDOM.render(<App />, document.getElementById('root'));
