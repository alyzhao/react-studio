const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
	entry: {
		index: ['react-hot-loader/patch', path.join(__dirname, './views/app/index/index.js'), hotMiddlewareScript]
	},
	devtool: 'inline-source-map',   // 跟踪错误堆栈
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					'babel-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.(css|less)$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: path.join(__dirname, './public/'),
		filename: "[name].bundle.js", 
		publicPath: '/public/'		// 测试得知只是打包的文件, 在 webpack-dev-middleware 中的前缀
	}
}