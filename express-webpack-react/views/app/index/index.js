import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { IndexComponent } from './components';

let render = function(Component) {
	ReactDOM.render(
		<AppContainer>
			<IndexComponent userage="22" />
		</AppContainer>,
		document.getElementById('app')
	)
};

render(IndexComponent);

if(module.hot) {
  module.hot.accept('./component', () => {
  	console.log('component has changed!');
    render(IndexComponent);
  });
}
