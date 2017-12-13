const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		path.join(__dirname, './src/main.js')
	],
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: './',
		hot: true	
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, './dist')
	}
}