"use strict";

import fs from "fs";

//Custom Functions
import HelperFuncs from "./helper";
import fixSubs from "./fixSubs";
import GetFilesFuncs from "./getFiles";
import parseArgs from "./parseArgs";

const Helper = HelperFuncs();
const GetFiles = GetFilesFuncs(Helper);

(async function () {
	try {
		const args = await parseArgs();
		if (!args) return;
		let basePath = args.path;
		console.time("It took");
		console.log(`Organizing ${basePath}`);
		console.log("Reading Files...");
		let files = GetFiles.readFiles(basePath);
		console.log("Filtering Files into video, directories and other files");
		let {dirs, video, other} = filterFiles(files);
		console.log("Filtering movies and tv shows files");
		let [shows, movies] = filterShowsAndMovies(video);
		let [showsData, posters, moviesData] = [{}, {}, {}];
		if (args.apiKey) {
			console.log("Getting shows and movies data from OmdbAPI.com");
			[showsData, posters, moviesData] = await apiShowsAndMovies([shows, movies]);
			shows = Helper.replaceNameWithApiName({"showsAndMovies": [shows, movies], showsData});
		}
		console.log("Making new folders for movies and tv shows");
		basePath += Helper.generateRandomFolderName();
		await makeShowAndMoviesFolders({basePath, shows, posters, "movies": moviesData.length ? moviesData : movies});
		console.log("Finding new names for movies and tv shows");
		let newNames = findNewNamesForFiles({video, shows, showsData, movies, moviesData});
		if(args.mode === 0) {
			console.log("Creating Hardlinks");
			newNames.map(({oldFile, newFile}) => fs.link(oldFile, basePath + newFile, err => err ? console.log(err): ""));
		} else if(args.mode === 1) {
			console.log("Creating Symlinks");
			newNames.map(({oldFile, newFile}) => fs.symlink(oldFile, basePath + newFile, err => err ? console.log(err): ""));
		} else if(args.mode === 2) {
			console.log("Renaming Files");
			newNames.map(({oldFile, newFile}) => fs.rename(oldFile, basePath + newFile, err => err ? console.log(err): ""));
			await Promise.all(other.map(async file => await whatToDoWithFile(file, basePath))); //It will deal with all the srt, false positives in movies, and tv shows and other files
			console.log("Deleting uneccesary files");
			removeDirs(dirs);
		}
		console.log("Your organized files are in - " + basePath);
		console.timeEnd("It took");
	} catch(e) { console.log("Organize " + new Error(e)); }
})();

function findNewNamesForFiles({video, shows, showsData, movies, moviesData}) {
	let names = [];
	video.map(({file, name}) => file.type === "movie" ? names.push(findNewNameForMovie({file, name, moviesData, movies})) : "");
	Object.keys(shows).map(name => names = [...names, ...findNewNameForShow({name, files: shows[name].files, showsData})]);
	return names.filter(({newFile}) => newFile); //No API Match but pattern match
}

function findNewNameForShow({name, files, showsData}) {
	let newFiles = [];
	files.map(({file, episodeNum, season}) => {
		let newFile = {oldFile: file};
		let ext = Helper.getExt(file);
		if(ext === ".srt") fixSubs(file);
		let title = Helper.getEpisodeTitle({name, episodeNum, season, showsData});
		episodeNum = episodeNum < 10 ? "0" + episodeNum : episodeNum;
		let baseName = `/Tv Shows/${name}/Season ${season}/${name} S${season < 10 ? "0" + season : season}E${episodeNum}`;
		title ? newFile["newFile"] = `${baseName} - ${title}${ext}` :
			newFile["newFile"] = baseName + ext;
		newFiles.push(newFile);
	});
	return newFiles;
}

function findNewNameForMovie({file, name, moviesData, movies}) {
	let newFile = {oldFile: file};
	let ext = Helper.getExt(file);
	if(ext === ".srt") fixSubs(file);
	if(!moviesData.length) {
		movies.forEach(movie => newFile["newFile"] = `/Movies/${movie}`);
	} else {
		moviesData.map(item => {
			if(name.toLowerCase() !== item.Title.toLowerCase()) return;
			let {Title, Year, Runtime, Rating} = item;
			newFile["newFile"] = `/Movies/${Title} ${Year} (${Runtime}) (${Rating})/${Title} ${Year}${ext}`;
		});
	}
	
	return newFile;
}

/* Moves false positives of shows and movies and deletes uneccesary files */
async function whatToDoWithFile(file, basePath) {
	let fileName = file.slice(file.lastIndexOf("/") + 1, file.length);
	let ext = Helper.getExt(file);
	if(!/\.mkv|\.mp4|\.srt|\.avi/g.test(ext)) { fs.unlinkSync(file); return; }
	return new Promise(resolve => fs.rename(file, `${basePath}/No Match Found/${fileName}`, () => resolve()));
}


/* Gets shows data through OmdbAPI with their poster url's */
function apiShowsAndMovies([shows, movies]) {
	try {
		return new Promise(async resolve => {
			let [showsData, posters] = await apiShows(shows);
			let moviesData = await apiMovies(movies);
			resolve([showsData, posters, moviesData]);
		});
	} catch(e) { console.log("Execute API " + new Error(e)); }
}

/* Gets movies Data form api */
async function apiMovies(movies) {
	try {
		return new Promise(async resolve => {
			let apiData = [];
			for(let movie of movies) {
				movie = movie.split(" ").join("%20");
				let {Title, Year, Poster, Runtime, imdbRating, Response} = await Helper.getData(`/?t=${movie}`);
				apiData.push({Title, Year, Poster, Runtime, Rating: imdbRating, Response});
			}
			resolve(apiData.filter(({Response}) => Response === "True"));
		});
	} catch(e) { console.log("apiMovies "); console.log(new Error(e)); }

}

/* Gets shows data from api */
async function apiShows(shows) {
	try {
		return new Promise(async resolve => {
			let [apiData, posters] = [[], []];
			for(let showName of Object.keys(shows)) {
				let {season} = shows[showName];
				showName = showName.replace(/[^\w\s]/gi, "").split(" ").join("%20"); //For api
				let baseUrl = `/?t=${showName}`;
				let {Poster} = await Helper.getData(baseUrl);
				posters.push({title: showName, url: Poster});
				for(let item of season) { apiData.push(await Helper.getData(`${baseUrl}&Season=${item}`)); }
			}
			resolve([apiData.filter(({Response}) => Response === "True"), posters.filter(({url, title}) => url && title)]);
		});
	} catch(e) { console.log("apiMovies "); console.log(new Error(e)); }
}

/* Gets show names with their respective season numbers */
function filterShowsAndMovies(video) {
	let [shows, movies] = [{}, []];
	video.map(({file, type, fileStats, name}) => {
		if(name) name = name.replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/\/\\/g, "").trim(); //Removes brackets and extra whitespace
		if(type === "movie") return movies.length ? movies.indexOf(name) === -1 ? movies.push(name) : "" : movies.push(name);
		{
			let {name, season, episodeNum} = fileStats;
			if(!name) return;
			name = Helper.capitalize(name);
			let sameShow = Helper.sameShow(shows, name, season);
			if(!sameShow) { shows[name] = {season: [season], length: 1, files: [{file, episodeNum, season}]}; return; } //New show detected
			if(shows[sameShow.name] && shows[sameShow.name].hasOwnProperty("files")) shows[sameShow.name].files.push({file, episodeNum, season});
			if(!sameShow.newSeason) return; //Same show detected
			shows[sameShow.name].season.push(season); //Same show but different season
			shows[sameShow.name].length += 1;
		}
	});
	return [shows, movies];
}

/* Removes empty dirs after the rename of the files */
function removeDirs(files) {
	try {
		files.map(file => fs.rmdirSync(file));
	} catch(e) { console.log("Remove Dirs Error: " + new Error(e)); }
}

/* Makes folder for shows and movies */
function makeShowAndMoviesFolders({basePath, shows, posters, movies}) {
	return new Promise(async resolve => {
		fs.mkdirSync(basePath);
		["Tv Shows", "Movies", "No Match Found"].map(str => fs.mkdirSync(`${basePath}/${str}`)); //Initial Folders
		await Promise.all([makeShowsFolders({shows, basePath, posters}), makeMoviesFolders(movies, basePath)]);
		resolve();
	}).catch(e => console.log("Make Show Folders " + new Error(e)));
}

/* Makes folder for the shows with; Season and showName */
function makeShowsFolders({shows, posters, basePath}) {
	return new Promise(async resolve => {
		for(let showName of Object.keys(shows)) {
			let {season} = shows[showName];
			fs.mkdirSync(`${basePath}/Tv Shows/${showName}`);
			if (posters.length) await savePosters({basePath, showName, posters}); //API key is provided
			season.map(season => fs.mkdirSync(`${basePath}/Tv Shows/${showName}/Season ${season}`));
		}
		resolve();
	}).catch(e => console.log("makeShowsFolders " + new Error(e)));
}

/* Makes folder for the movies with name, year, rating and runtime */
function makeMoviesFolders(movies, basePath) {
	return new Promise(async resolve => {
		if(movies instanceof Array) { //API key not provided
			movies.forEach(movie => fs.mkdirSync(`${basePath}/Movies/${movie}`));
		} else {
			for(let movie of movies) {
				let keys = Object.keys(movie);
				keys.splice(2, 1); //Remove Poster
				keys.forEach(item => movie[item] = movie[item].replace(/[\|><\*:\?\"/\/]/g, ""));
				let {Title, Rating, Poster, Runtime, Year} = movie;
				let folder = `${Title} ${Year} (${Runtime}) (${Rating})`;
				fs.mkdirSync(`${basePath}/Movies/${folder}`);
				if(Poster !== "N/A") await Helper.saveImage(Poster, `${basePath}/Movies/${folder}/${Title}.jpg`);
			}
		}
		resolve();
	}).catch(e => console.log("makeMoviesFolders " + new Error(e)));
}

/* Downloads and save posters */
async function savePosters({basePath, posters, showName}) {
	try {
		for(let {title, url} of posters) {
			title = title.replace(/%20/g, "").toLowerCase();
			title === showName.replace(/\s/gi, "").toLowerCase() ?
				await Helper.saveImage(url, `${basePath}/Tv Shows/${showName}/${showName}.jpg`) : "";
		}
	} catch(e) { console.log("savePosters " + new Error(e)); }
}

/*
	Filters files into video files, directories and other files. Sorts the directories from deepest to outmost.
*/
function filterFiles(files) {
	let [dirs, video, other] = [[],[],[]];
	files.map(file => {
		if(Helper.isDir(file)) { dirs.push(file); return; }
		let {episodePatt = null, type, name = null} = Helper.isMatch(file);
		if(/Sample/gi.test(file)) { other.push(file); return; }
		let fileStats = type === "tv" ? Helper.getFileStats({file, episodePatt}) : null;
		if(type && /\.mkv|\.mp4|\.srt|\.avi/gi.test(file)) video.push({file, type, fileStats, name});
		other.push(file);
	});
	return {dirs: dirs.sort((a, b) => b.length - a.length), video, other}; //Sorting dirs, so that it deletes from inside out
}
