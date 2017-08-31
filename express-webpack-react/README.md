## 记录
- 安装express
- 构建项目目录
	```
	`-- root
	  +-- models
	  +-- views
	  |	+-- app 			-- 开发目录 react 代码都写在这儿
	  | | +-- index 		-- 主页的前端代码
	  | +-- build			-- 测试目录, 只有一个页面用来调用打包的js
	  | | +-- index 		-- 
	  | `-- dist
	  +-- public
	  +-- routes
	  | `-- route.js
	  +-- controllers
	  +-- app.js 	
	  +-- .babelrc
	  +-- packaage.json
	  `-- webpack.config.js
- 构建 express 服务器, 入口文件 app.js, 使用 ejs 模板引擎, 
	- 安装 ejs
	- 安装 serve-static
	- 安装 morgan , 用来监听请求
- 安装 webpack 
	- 安装 webpack 插件
		- style-loader 
		- css-loader 
		- less-loader less
		- file-loader      加载图片, 字体

		- webpack-dev-middleware   			-- 这只是将 bundle 打包的文件放入服务器请求, 与 express 无关
		- webpack-hot-middleware

	- 配置 webpack.config.js
- 安装 react react-dom react-hot-loader
- 安装 babel, npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
	- 配置 .babelrc 
- 编码 app.js
- 编写前端 react 页面

## 问题

> 1. express 静态资源加载的问题, webpack 打包的文件, 调试时加载不出来
>> express serve-static 的目录要和 webpack 打包的目录相同 output, 不是这个原因, webpack 生成的文件不经过静态文件资源加载, 不经过 express 的路由, 所以出现这个问题可能是刷新时还未打包好！

> 2. 没有自动刷新, 也没有热更新
>> webpack 实现热加载: 

> 3. react-hot-loader 并没有起作用, 


## 发现
> 1. express 找不到某个静态资源时会请求两次


