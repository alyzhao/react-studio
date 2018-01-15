## React-Router 4.x web 端使用
	
学习 React-Router

### 基本使用

1. 安装 react-router-dom

2. import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
	- Router 加在组件节点的最前端
	- Route : render some UI when a location matches the route’s path
	- Link 提供申明式无障碍的导航
		- to 需要跳转的 pathname 或者 location 

### API

1. Route: render some UI when a location matches the route’s path
	- render methods
		- <Route component> render 方法中的 props 是 Route 的所有属性 The render prop receives all the same route props as the component render prop.
		- <Route render>
		- <Route children>
	- Route props
		- match: 拥有三个属性: params, isExact: 路由全部匹配为 true , path, url
		- location
		- history
		- exact 严格匹配

2. Redirect: Rendering a <Redirect> will navigate to a new location
	
3. Switch: 路由列表只匹配一个路由, react 默认是包容性路由, 使用 Switch 之后成为排他性路由
	- 子路由应该放在父路由的上方, 这样才能渲染出自路由否则父路由会覆盖掉子路由

4. Prompt: prompt the user before navigating away from a page
	- when: 为 true 时表示阻止路由跳转
	- message: string || function 


### 记录

1. `<Route exact path="/" component={Home}/>` exact 执行严格匹配 否则的话 '/about' 路由也会匹配到 '/' 

2. props.match 被 <Route> 渲染的任何组件都可以访问, 如果没有用 <Route> 直接渲染, 可以使用 withRouter 高阶组件

3. match.path 是路由中的值, match.url 是浏览器中的地址

4. webpack-dev-server 中刷新 react-router 不能显示, webpack.config.js 配置 devServer 选项
```
devServer: {
	historyApiFallback:{
        index:'/index.html'
    },
	contentBase: './',
	hot: true	
}
```
	
