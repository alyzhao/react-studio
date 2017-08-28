const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'app/main.js')
	],
	devtool: 'inline-source-map',   // 跟踪错误堆栈
	devServer:{
		port: 8080,  	// 默认端口
		contentBase: path.join(__dirname, './build'), 		// //本地服务器所加载的页面所在的目录
		publicPath: '/',
		hot: true
		// inline: true,
		// historyApiFallback: true 			//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/		// 除去这个目录下的文件
			},
			{
				test: /\.(css|less)/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.join(__dirname, 'build')
	}
}

