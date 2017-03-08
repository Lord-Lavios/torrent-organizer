"use strict";

const fs = require("fs");
const HelperFuncs = require("./helper");

const Helper = new HelperFuncs();

module.exports = function () {

	/*Get all the files in the provided path */
	this.readFiles = basePath => {
		let files = [];
		fs.readdirSync(basePath).map(file => {
			files.push(basePath + file);
			if(!Helper.isDir(basePath + file)) return;
			files = [...files, ...toTheDeepestFile({basePath, deeperDir: file, arr: []})];
		});
		return files;
	};

	/* Gets all the files inside the folder */
	function toTheDeepestFile({basePath, deeperDir, arr}) {
		basePath += deeperDir + "/";
		deeperDir = fs.readdirSync(basePath);
		arr = Helper.disectArrayAndPush(basePath, deeperDir, arr); //Concat was not working for some reason. Ugh!!
		for(let i = 0; i < deeperDir.length; i+=1) {
			if(!Helper.isDir(basePath + deeperDir[i])) continue;
			toTheDeepestFile({basePath, "deeperDir": deeperDir[i], arr});
		}
		return arr;
	}

};
