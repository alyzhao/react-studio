const path = require('path');

module.exports = {
	entry: {
		index: path.join(__dirname, './views/app/index/index.js')
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
	output: {
		path: path.join(__dirname, './public/'),
		filename: "[name].bundle.js",
		publicPath: '/'
	}
}