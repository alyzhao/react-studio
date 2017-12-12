const path = require('path');

module.exports = {
	entry: './src/main.js',
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
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, './dist')
	}
}