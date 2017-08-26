import _ from 'lodash';
import './style.css';
import Icon from './favicon.png';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// 添加图像
	var myIcon = new Image();
	myIcon.src = Icon;

	var icon = document.createElement('i');
	icon.classList.add('iconfont', 'icon-Love');

	element.appendChild(icon);

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());