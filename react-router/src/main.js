import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './demo01.js';

import ParamsExample from './ParamsExample';

import AuthExample from './AuthExample';

import CustomLinkExample from './CustomLinkExample';

import PreventingTransitionsExample from './PreventingTransitionsExample';

ReactDOM.render(
	<PreventingTransitionsExample />, 
	document.getElementById('app')
);