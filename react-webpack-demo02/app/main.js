import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'; 

import {MyComponents} from './component';
import './style.less';

let render = function(Component) {
	ReactDOM.render(
		<Component />,
		document.getElementById('app')
	);
}

render(MyComponents.InputTest);

if(module.hot) {
  module.hot.accept('./component', () => {
  	console.log('component has changed!')
    render(MyComponents.InputTest)
  });
}

