import React from 'react';
import ReactDom from 'react-dom';
import { TodoList, MobileNavbar } from './components/component.js'
import './style.less';


ReactDom.render(
	<MobileNavbar />, document.getElementsByTagName('body')[0]
)
