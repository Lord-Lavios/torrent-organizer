require("webpack");

const path = require("path");
const dev = path.resolve(__dirname, "src");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProd = process.env.NODE_ENV.trim() === "production";

module.exports = {
	"entry": `${dev}/index.js`,
	"output": {
		filename: "organize.js"
	},
	"target": "node",
	"module": {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader"
				},
				exclude: /node_modules/
			}
		]
	},
	"plugins": isProd ? [
		new UglifyJsPlugin({
			uglifyOptions: {
				mangle: true,
				compress: {
					sequences: true,
					dead_code: true,
					conditionals: true,
					booleans: true,
					unused: true,
					if_return: true,
					join_vars: true,
					drop_console: false,
					warnings: false
				},
				output: {
					comments: false
				}
			}
		})	
	] : []
};