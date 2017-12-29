const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		path.join(__dirname, './src/main.js')
	],
	devtool: 'source-map',
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
		historyApiFallback:{
            index:'/index.html'
        },
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