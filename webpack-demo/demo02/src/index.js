import _ from 'lodash';
import printMe from './print.js';
import './style.css';


function component() {
	var element = document.createElement('div');

	var btn = document.createElement('button');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	btn.innerHTML = 'Click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

let element = component();
document.body.appendChild(element);
// document.body.appendChild(component());

// 修改 index.js 文件，以便当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块
if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		// printMe();
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	})
}
