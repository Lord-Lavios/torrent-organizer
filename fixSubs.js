"use strict";

const fs = require("fs");

module.exports = function () {

	//Rename .srt with .txt, read .txt file, modify it, delete .txt, write .srt with new data
	this.fixSubs = file => {
		let fileTxtName = file.replace(/\.srt/g, ".txt");
		fs.renameSync(file, fileTxtName);
		let subData = fs.readFileSync(fileTxtName, "utf-8")
			.replace(/\(\s*[^)]*\)/g, "")
			.replace(/\[\s*[^\]]*\]/g, "")
			.replace(/[^A-Za-z\d\s!?,''><.:-]/gi, "");
		fs.unlinkSync(fileTxtName);
		fs.writeFileSync(file, subData, "utf-8");
	};

};
