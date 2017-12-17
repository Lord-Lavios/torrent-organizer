"use strict";

import fs from "fs";
import patts from "./patterns";
import https from "https";

export default function () {

	/* Matches the found title with the api title word by word -> mr robot -> mr, check with api title -> robot, check with api title */
	function compareNameWithApi(name, showsData) {
		let newName;
		showsData.forEach(({Title}) => {
			let nameSplit = name.split(" ");
			let matches = 0;
			nameSplit.forEach(item => new RegExp(item, "gi").test(Title) ? matches += 1 : "");
			if(matches !== nameSplit.length) return;
			newName = Title;
		});
		return newName;
	}

	class Helper {

		isDir(file) { return fs.statSync(file).isDirectory() ? true : false; }

		disectArrayAndPush(path, deeperDir, arr)  {
			deeperDir.map(item => arr.push(path + item));
			return arr;
		}

		capitalize(name) {
			return name.split(" ")
				.map(word => word[0].toUpperCase() + word.slice(1, word.length))
				.join(' ');
		}

		/* file => get Season and episode pattern and if movies, get it's name */
		isMatch(files) {
			let keys = Object.keys(patts);
			for(let i = 0; i < keys.length; i+=1) {
				let objFunc = patts[keys[i]](files);
				if(!objFunc) continue;
				return objFunc;
			}
			return {response: false};
		}

		getExt(file) { return file.slice(file.length - 4, file.length); }

		/*
			Helps getShows to figure out if this show is already found but this file is of different season.
			{name: props} is returned because the same show can have files with different names Mr robot and mr robot
		*/
		sameShow(shows, title, season) {
			for(let prop in shows) {
				if(!new RegExp(title + "$", "i").test(prop)) continue;
				if(shows[prop].season.indexOf(season) === -1) return {newSeason: true, name: prop};
				return {newSeason: null, name: prop}; //If not same season but same shows
			}
			return false;
		}

		/* Saves poster */
		saveImage(url, name) {
			return new Promise(resolve => {
				let file = fs.createWriteStream(name);
				https.get(url, response => { response.pipe(file); resolve(); });
			}).catch(e => console.log(e));
		}

		/* Gets shows and posters from omdbapi */
		getData(reqPath) {
			return new Promise(resolve => {
				let options = {
					host: "www.omdbapi.com",
					path: reqPath,
					method: "GET",
					headers: {"Content-Type": "application/json"}
				};
				https.request(options).on("response", res => {
					let output = "";
					res.setEncoding("utf8");
					res.on("data", chunk => output += chunk);
					res.on("end", () => resolve(JSON.parse(output)) );
					res.on("error", e => console.error(e));
				}).end();
			}).catch(e => console.log("getData " + new Error(e)));
		}

		//Replaces show and movie names found from files to the names that were found from api. This solves the bad names that were found from the files
		replaceNameWithApiName({showsAndMovies: [shows], showsData}) {
			let newShows = {};
			Object.keys(shows).forEach(name => {
				let isName = compareNameWithApi(name, showsData);
				isName ? newShows[isName] = shows[name] : newShows[name] = shows[name];
			});
			return newShows;
		}

		getEpisodeTitle({name, episodeNum, season, showsData}) {
			let title = "";
			if (!showsData.length) return null;
			showsData.forEach(show => {
				if(name !== show.Title || show.Season !== season) return;
				show.Episodes.forEach(({Episode, Title}) => episodeNum === Episode ? title = Title : "");
			});
			return title ? title.replace(/[^\w\s-\.$]/gi, "") : null; //Repalace is for weird titles like - Horseback Riding\Man Zone
		}

		/* Outputs season, Show name and episode number*/
		getFileStats({file, episodePatt}) {
			file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " "); // "path/New Girl HDTV.LOL S02E01.mp4" -> "/New Girl HDTV LOL S02E01 mp4"
			let index = /e/gi.exec(episodePatt) ? {patt: /e/gi.exec(episodePatt)["index"], match: "e"} : {patt: /x/gi.exec(episodePatt)["index"] , match: "x"};
			let season = index.match === "e" ? episodePatt.slice(1, index.patt) : episodePatt.slice(0, index.patt);
			let name = file.slice(0, file.indexOf(episodePatt) - 1)
				.replace(/\(\s*[^)]*\)/g, "")
				.replace(/\[\s*[^\]]*\]/g, "")
				.replace(/\/\\/g, "")
				.replace(/[^\w\s\.$]/gi, "").trim();
			let episodeNum = episodePatt.slice(index.patt + 1, episodePatt.length);
			return {season: parseInt(season), name, episodeNum: parseInt(episodeNum)};
		}

		/* Generated random folder name to organize the shows */
		generateRandomFolderName() {
			let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
			let randomString = [];
			for(let i = 0; i < 6; i+=1) {
				let ran = letters[Math.floor(Math.random() * letters.length)];
				if(Math.random() < 0.699) ran = ran.toLowerCase(); //So that it gives equal change to Upper case and lower case alphabets maybe (I'll check it later)
				randomString.push(ran);
			}
			return randomString.join("");
		}
	}

	return new Helper();
}