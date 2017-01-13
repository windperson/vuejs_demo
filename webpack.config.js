var path = require('path');
var current = process.cwd();
var path = require('path');
var webpack = require('webpack');

var outPath = path.resolve(__dirname, './public');


module.exports = {
	entry: ['whatwg-fetch',
		'./src/js/app.js'],

	output: {
		filename: 'js/bundle.js',
		path: outPath
	},

	// watch: true,
	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this nessessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader?sourceMap"]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,

				// loader: 'file',
				// query: {
				// 	regExp: '\\b(assets)(.+)',
				// 	name: 'image/[2]?[hash]',
				// 	outputPath: 'public'
				// },

				loader: 'file-loader?context=src/assets&name=image/[path][name].[ext]?[hash]&outputPath=public'
				// options: {
				// 	name: 'assets/[name].[ext]?[hash]'
				// }
			}
		]
	},

	resolve: {
		extensions: ['', '.js'],
		root: [path.join(current, 'src/js')],
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}