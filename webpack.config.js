var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-3']
				}
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html',
		filename: 'index.html',
		inject: 'body'
	})],
	devServer: {
		historyApiFallback: true
	},
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: 'http://localhost:4000'
		})
	}
};