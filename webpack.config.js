const webpack = require("webpack");

module.exports = {
	entry: "./index.js",
	output: {
		path: "./",
		filename: "parse.js"
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	target: "node"
};
