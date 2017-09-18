import React from 'react';
import ReactDom from 'react-dom';
import { TodoList } from './components/component.js'
import './style.less';


ReactDom.render(
	<TodoList />, document.getElementsByTagName('body')[0]
)
