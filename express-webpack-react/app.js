const path = require('path');

// express 相关
const express = require('express');
const serveStatic = require('serve-static');

// webpack相关
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// 启动配置
const port = process.env.PORT || 8080;
const app = express();

// webpack
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// 设置查找动态文件的目录
app.set('views', path.join(__dirname, './views/build'));
app.set('view engine', 'ejs');

require('./routes/route')(app); 	// 加载路由

app.use(serveStatic('public'));
app.listen(port);
console.log('app started on port ' + port);