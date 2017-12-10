const path = require('path');

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
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}