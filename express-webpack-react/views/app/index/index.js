import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { IndexComponent } from './components';

import { test } from './test';
 
const render = function(Component) {
	ReactDOM.render(
		<IndexComponent userage="22" />,
		document.getElementById('app')
	)
};

test();
render(IndexComponent);

if(module.hot) {
	module.hot.accept('./components', () => {
		console.log('component has changed!');
		console.log(IndexComponent);
		render(IndexComponent);
	});
	module.hot.accept('./test', () => {
		console.log('test has changed')
		test();
	});

}
