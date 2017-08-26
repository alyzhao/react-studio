const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
  	module: {
  		rules: [
  			{
  				test: /\.css$/,
  				use: ['style-loader', 'css-loader']
  			},
  			{
  				test: /\.(png|svg|jpg|gif)$/,
  				use: ['file-loader']
  			},
  			{
  				test: /\.(woff|woff2|eot|ttf|otf)$/,
  				use: ['file-loader']
  			}
  		]
  	}
};