"use strict";

module.exports = {
	seasonPatt(file) { //For instance -> S02E05
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		let episode = /S\d+E\d+/gi.exec(file);
		if(!episode) return false;
		return {episodePatt: episode[0], type: "tv"};
	},
	seasonXEpiNamePatt(file) { // For instance -> 1x02
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		let episode = /\d+x\d\d/gi.exec(file);
		if(!episode) return false;
		episode = episode[0];
		return {episodePatt: episode, type: "tv"};
	},
	ifMovie(file) {
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		let name = /20\d+|19\d+/gi.exec(file);
		if(!name) return false;
		name = file.slice(0, name["index"]).replace(/\./g, " ").trim();
		return {name, type: "movie"};
	}
};
