## React-Router 4.x web 端使用
	
学习 React-Router

### 基本使用

1. 安装 react-router-dom

2. import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
	- Router 加在组件节点的最前端
	- Route : render some UI when a location matches the route’s path
	- Link 提供申明式无障碍的导航
		- to 需要跳转的 pathname 或者 location
	- 

### API

1. Route: render some UI when a location matches the route’s path
	- render methods
		- <Route component>
		- <Route render>
		- <Route children>
	- Route props
		- match: 拥有三个属性: params, isExact: 路由全部匹配为 true , path, url
		- location
		- history
		- exact 严格匹配

2. Redirect: Rendering a <Redirect> will navigate to a new location
	


### 记录

1. `<Route exact path="/" component={Home}/>` exact 执行严格匹配 否则的话 '/about' 路由也会匹配到 '/' 