const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
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
		contentBase: '/dist',
		hot: true	
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']),
		// new HtmlWebpackPlugin({
		// 	title: 'webpack react'
		// })
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}