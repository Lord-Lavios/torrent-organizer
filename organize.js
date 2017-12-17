/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* Moves false positives of shows and movies and deletes uneccesary files */
var whatToDoWithFile = function () {
	var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(file, basePath) {
		var fileName, ext;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						fileName = file.slice(file.lastIndexOf("/") + 1, file.length);
						ext = Helper.getExt(file);

						if (/\.mkv|\.mp4|\.srt|\.avi/g.test(ext)) {
							_context3.next = 5;
							break;
						}

						_fs2.default.unlinkSync(file);return _context3.abrupt("return");

					case 5:
						return _context3.abrupt("return", new Promise(function (resolve) {
							return _fs2.default.rename(file, basePath + "/No Match Found/" + fileName, function () {
								return resolve();
							});
						}));

					case 6:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, this);
	}));

	return function whatToDoWithFile(_x2, _x3) {
		return _ref14.apply(this, arguments);
	};
}();

/* Gets shows data through OmdbAPI with their poster url's */


/* Gets movies Data form api */
var apiMovies = function () {
	var _ref20 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(movies) {
		var _this3 = this;

		return _regenerator2.default.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						_context6.prev = 0;
						return _context6.abrupt("return", new Promise(function () {
							var _ref21 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve) {
								var apiData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, movie, _ref23, Title, Year, Poster, Runtime, imdbRating, Response;

								return _regenerator2.default.wrap(function _callee5$(_context5) {
									while (1) {
										switch (_context5.prev = _context5.next) {
											case 0:
												apiData = [];
												_iteratorNormalCompletion = true;
												_didIteratorError = false;
												_iteratorError = undefined;
												_context5.prev = 4;
												_iterator = movies[Symbol.iterator]();

											case 6:
												if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
													_context5.next = 22;
													break;
												}

												movie = _step.value;

												movie = movie.split(" ").join("%20");
												_context5.next = 11;
												return Helper.getData("/?t=" + movie);

											case 11:
												_ref23 = _context5.sent;
												Title = _ref23.Title;
												Year = _ref23.Year;
												Poster = _ref23.Poster;
												Runtime = _ref23.Runtime;
												imdbRating = _ref23.imdbRating;
												Response = _ref23.Response;

												apiData.push({ Title: Title, Year: Year, Poster: Poster, Runtime: Runtime, Rating: imdbRating, Response: Response });

											case 19:
												_iteratorNormalCompletion = true;
												_context5.next = 6;
												break;

											case 22:
												_context5.next = 28;
												break;

											case 24:
												_context5.prev = 24;
												_context5.t0 = _context5["catch"](4);
												_didIteratorError = true;
												_iteratorError = _context5.t0;

											case 28:
												_context5.prev = 28;
												_context5.prev = 29;

												if (!_iteratorNormalCompletion && _iterator.return) {
													_iterator.return();
												}

											case 31:
												_context5.prev = 31;

												if (!_didIteratorError) {
													_context5.next = 34;
													break;
												}

												throw _iteratorError;

											case 34:
												return _context5.finish(31);

											case 35:
												return _context5.finish(28);

											case 36:
												resolve(apiData.filter(function (_ref22) {
													var Response = _ref22.Response;
													return Response === "True";
												}));

											case 37:
											case "end":
												return _context5.stop();
										}
									}
								}, _callee5, _this3, [[4, 24, 28, 36], [29,, 31, 35]]);
							}));

							return function (_x6) {
								return _ref21.apply(this, arguments);
							};
						}()));

					case 4:
						_context6.prev = 4;
						_context6.t0 = _context6["catch"](0);
						console.log("apiMovies ");console.log(new Error(_context6.t0));
					case 8:
					case "end":
						return _context6.stop();
				}
			}
		}, _callee6, this, [[0, 4]]);
	}));

	return function apiMovies(_x5) {
		return _ref20.apply(this, arguments);
	};
}();

/* Gets shows data from api */


var apiShows = function () {
	var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(shows) {
		var _this4 = this;

		return _regenerator2.default.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						_context8.prev = 0;
						return _context8.abrupt("return", new Promise(function () {
							var _ref25 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve) {
								var apiData, posters, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, showName, season, baseUrl, _ref28, Poster, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

								return _regenerator2.default.wrap(function _callee7$(_context7) {
									while (1) {
										switch (_context7.prev = _context7.next) {
											case 0:
												apiData = [], posters = [];
												_iteratorNormalCompletion2 = true;
												_didIteratorError2 = false;
												_iteratorError2 = undefined;
												_context7.prev = 4;
												_iterator2 = Object.keys(shows)[Symbol.iterator]();

											case 6:
												if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
													_context7.next = 48;
													break;
												}

												showName = _step2.value;
												season = shows[showName].season;

												showName = showName.replace(/[^\w\s]/gi, "").split(" ").join("%20"); //For api
												baseUrl = "/?t=" + showName;
												_context7.next = 13;
												return Helper.getData(baseUrl);

											case 13:
												_ref28 = _context7.sent;
												Poster = _ref28.Poster;

												posters.push({ title: showName, url: Poster });
												_iteratorNormalCompletion3 = true;
												_didIteratorError3 = false;
												_iteratorError3 = undefined;
												_context7.prev = 19;
												_iterator3 = season[Symbol.iterator]();

											case 21:
												if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
													_context7.next = 31;
													break;
												}

												item = _step3.value;
												_context7.t0 = apiData;
												_context7.next = 26;
												return Helper.getData(baseUrl + "&Season=" + item);

											case 26:
												_context7.t1 = _context7.sent;

												_context7.t0.push.call(_context7.t0, _context7.t1);

											case 28:
												_iteratorNormalCompletion3 = true;
												_context7.next = 21;
												break;

											case 31:
												_context7.next = 37;
												break;

											case 33:
												_context7.prev = 33;
												_context7.t2 = _context7["catch"](19);
												_didIteratorError3 = true;
												_iteratorError3 = _context7.t2;

											case 37:
												_context7.prev = 37;
												_context7.prev = 38;

												if (!_iteratorNormalCompletion3 && _iterator3.return) {
													_iterator3.return();
												}

											case 40:
												_context7.prev = 40;

												if (!_didIteratorError3) {
													_context7.next = 43;
													break;
												}

												throw _iteratorError3;

											case 43:
												return _context7.finish(40);

											case 44:
												return _context7.finish(37);

											case 45:
												_iteratorNormalCompletion2 = true;
												_context7.next = 6;
												break;

											case 48:
												_context7.next = 54;
												break;

											case 50:
												_context7.prev = 50;
												_context7.t3 = _context7["catch"](4);
												_didIteratorError2 = true;
												_iteratorError2 = _context7.t3;

											case 54:
												_context7.prev = 54;
												_context7.prev = 55;

												if (!_iteratorNormalCompletion2 && _iterator2.return) {
													_iterator2.return();
												}

											case 57:
												_context7.prev = 57;

												if (!_didIteratorError2) {
													_context7.next = 60;
													break;
												}

												throw _iteratorError2;

											case 60:
												return _context7.finish(57);

											case 61:
												return _context7.finish(54);

											case 62:
												resolve([apiData.filter(function (_ref26) {
													var Response = _ref26.Response;
													return Response === "True";
												}), posters.filter(function (_ref27) {
													var url = _ref27.url,
													    title = _ref27.title;
													return url && title;
												})]);

											case 63:
											case "end":
												return _context7.stop();
										}
									}
								}, _callee7, _this4, [[4, 50, 54, 62], [19, 33, 37, 45], [38,, 40, 44], [55,, 57, 61]]);
							}));

							return function (_x8) {
								return _ref25.apply(this, arguments);
							};
						}()));

					case 4:
						_context8.prev = 4;
						_context8.t0 = _context8["catch"](0);
						console.log("apiMovies ");console.log(new Error(_context8.t0));
					case 8:
					case "end":
						return _context8.stop();
				}
			}
		}, _callee8, this, [[0, 4]]);
	}));

	return function apiShows(_x7) {
		return _ref24.apply(this, arguments);
	};
}();

/* Gets show names with their respective season numbers */


/* Downloads and save posters */
var savePosters = function () {
	var _ref36 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref35) {
		var basePath = _ref35.basePath,
		    posters = _ref35.posters,
		    showName = _ref35.showName;

		var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _ref37, title, url;

		return _regenerator2.default.wrap(function _callee12$(_context14) {
			while (1) {
				switch (_context14.prev = _context14.next) {
					case 0:
						_context14.prev = 0;
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						_context14.prev = 4;
						_iterator6 = posters[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							_context14.next = 20;
							break;
						}

						_ref37 = _step6.value;
						title = _ref37.title;
						url = _ref37.url;

						title = title.replace(/%20/g, "").toLowerCase();

						if (!(title === showName.replace(/\s/gi, "").toLowerCase())) {
							_context14.next = 16;
							break;
						}

						_context14.next = 14;
						return Helper.saveImage(url, basePath + "/Tv Shows/" + showName + "/" + showName + ".jpg");

					case 14:
						_context14.next = 17;
						break;

					case 16:
						"";

					case 17:
						_iteratorNormalCompletion6 = true;
						_context14.next = 6;
						break;

					case 20:
						_context14.next = 26;
						break;

					case 22:
						_context14.prev = 22;
						_context14.t0 = _context14["catch"](4);
						_didIteratorError6 = true;
						_iteratorError6 = _context14.t0;

					case 26:
						_context14.prev = 26;
						_context14.prev = 27;

						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}

					case 29:
						_context14.prev = 29;

						if (!_didIteratorError6) {
							_context14.next = 32;
							break;
						}

						throw _iteratorError6;

					case 32:
						return _context14.finish(29);

					case 33:
						return _context14.finish(26);

					case 34:
						_context14.next = 39;
						break;

					case 36:
						_context14.prev = 36;
						_context14.t1 = _context14["catch"](0);
						console.log("savePosters " + new Error(_context14.t1));
					case 39:
					case "end":
						return _context14.stop();
				}
			}
		}, _callee12, this, [[0, 36], [4, 22, 26, 34], [27,, 29, 33]]);
	}));

	return function savePosters(_x12) {
		return _ref36.apply(this, arguments);
	};
}();

/*
	Filters files into video files, directories and other files. Sorts the directories from deepest to outmost.
*/


var _fs = __webpack_require__(0);

var _fs2 = _interopRequireDefault(_fs);

var _helper = __webpack_require__(5);

var _helper2 = _interopRequireDefault(_helper);

var _fixSubs = __webpack_require__(8);

var _fixSubs2 = _interopRequireDefault(_fixSubs);

var _getFiles = __webpack_require__(9);

var _getFiles2 = _interopRequireDefault(_getFiles);

var _parseArgs = __webpack_require__(10);

var _parseArgs2 = _interopRequireDefault(_parseArgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//Custom Functions


var Helper = (0, _helper2.default)();
var GetFiles = (0, _getFiles2.default)(Helper);

_asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	var _this = this;

	var args, basePath, files, _filterFiles, dirs, video, other, _filterShowsAndMovies, _filterShowsAndMovies2, shows, movies, showsData, posters, moviesData, _ref2, _ref3, newNames;

	return _regenerator2.default.wrap(function _callee2$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.prev = 0;
					_context2.next = 3;
					return (0, _parseArgs2.default)();

				case 3:
					args = _context2.sent;

					if (args) {
						_context2.next = 6;
						break;
					}

					return _context2.abrupt("return");

				case 6:
					basePath = args.path;

					console.time("It took");
					console.log("Organizing " + basePath);
					console.log("Reading Files...");
					files = GetFiles.readFiles(basePath);

					console.log("Filtering Files into video, directories and other files");
					_filterFiles = filterFiles(files), dirs = _filterFiles.dirs, video = _filterFiles.video, other = _filterFiles.other;

					console.log("Filtering movies and tv shows files");
					_filterShowsAndMovies = filterShowsAndMovies(video), _filterShowsAndMovies2 = _slicedToArray(_filterShowsAndMovies, 2), shows = _filterShowsAndMovies2[0], movies = _filterShowsAndMovies2[1];
					showsData = {}, posters = {}, moviesData = {};

					if (!args.apiKey) {
						_context2.next = 26;
						break;
					}

					console.log("Getting shows and movies data from OmdbAPI.com");
					_context2.next = 20;
					return apiShowsAndMovies([shows, movies]);

				case 20:
					_ref2 = _context2.sent;
					_ref3 = _slicedToArray(_ref2, 3);
					showsData = _ref3[0];
					posters = _ref3[1];
					moviesData = _ref3[2];

					shows = Helper.replaceNameWithApiName({ "showsAndMovies": [shows, movies], showsData: showsData });

				case 26:
					console.log("Making new folders for movies and tv shows");
					basePath += Helper.generateRandomFolderName();
					_context2.next = 30;
					return makeShowAndMoviesFolders({ basePath: basePath, shows: shows, posters: posters, "movies": moviesData.length ? moviesData : movies });

				case 30:
					console.log("Finding new names for movies and tv shows");
					newNames = findNewNamesForFiles({ video: video, shows: shows, showsData: showsData, movies: movies, moviesData: moviesData });

					if (!(args.mode === 0)) {
						_context2.next = 37;
						break;
					}

					console.log("Creating Hardlinks");
					newNames.map(function (_ref4) {
						var oldFile = _ref4.oldFile,
						    newFile = _ref4.newFile;
						return _fs2.default.link(oldFile, basePath + newFile, function (err) {
							return err ? console.log(err) : "";
						});
					});
					_context2.next = 49;
					break;

				case 37:
					if (!(args.mode === 1)) {
						_context2.next = 42;
						break;
					}

					console.log("Creating Symlinks");
					newNames.map(function (_ref5) {
						var oldFile = _ref5.oldFile,
						    newFile = _ref5.newFile;
						return _fs2.default.symlink(oldFile, basePath + newFile, function (err) {
							return err ? console.log(err) : "";
						});
					});
					_context2.next = 49;
					break;

				case 42:
					if (!(args.mode === 2)) {
						_context2.next = 49;
						break;
					}

					console.log("Renaming Files");
					newNames.map(function (_ref6) {
						var oldFile = _ref6.oldFile,
						    newFile = _ref6.newFile;
						return _fs2.default.rename(oldFile, basePath + newFile, function (err) {
							return err ? console.log(err) : "";
						});
					});
					_context2.next = 47;
					return Promise.all(other.map(function () {
						var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {
							return _regenerator2.default.wrap(function _callee$(_context) {
								while (1) {
									switch (_context.prev = _context.next) {
										case 0:
											_context.next = 2;
											return whatToDoWithFile(file, basePath);

										case 2:
											return _context.abrupt("return", _context.sent);

										case 3:
										case "end":
											return _context.stop();
									}
								}
							}, _callee, _this);
						}));

						return function (_x) {
							return _ref7.apply(this, arguments);
						};
					}()));

				case 47:
					//It will deal with all the srt, false positives in movies, and tv shows and other files
					console.log("Deleting uneccesary files");
					removeDirs(dirs);

				case 49:
					console.log("Your organized files are in - " + basePath);
					console.timeEnd("It took");
					_context2.next = 56;
					break;

				case 53:
					_context2.prev = 53;
					_context2.t0 = _context2["catch"](0);
					console.log("Organize " + new Error(_context2.t0));
				case 56:
				case "end":
					return _context2.stop();
			}
		}
	}, _callee2, this, [[0, 53]]);
}))();

function findNewNamesForFiles(_ref8) {
	var video = _ref8.video,
	    shows = _ref8.shows,
	    showsData = _ref8.showsData,
	    movies = _ref8.movies,
	    moviesData = _ref8.moviesData;

	var names = [];
	video.map(function (_ref9) {
		var file = _ref9.file,
		    name = _ref9.name;
		return file.type === "movie" ? names.push(findNewNameForMovie({ file: file, name: name, moviesData: moviesData, movies: movies })) : "";
	});
	Object.keys(shows).map(function (name) {
		return names = [].concat(_toConsumableArray(names), _toConsumableArray(findNewNameForShow({ name: name, files: shows[name].files, showsData: showsData })));
	});
	return names.filter(function (_ref10) {
		var newFile = _ref10.newFile;
		return newFile;
	}); //No API Match but pattern match
}

function findNewNameForShow(_ref11) {
	var name = _ref11.name,
	    files = _ref11.files,
	    showsData = _ref11.showsData;

	var newFiles = [];
	files.map(function (_ref12) {
		var file = _ref12.file,
		    episodeNum = _ref12.episodeNum,
		    season = _ref12.season;

		var newFile = { oldFile: file };
		var ext = Helper.getExt(file);
		if (ext === ".srt") (0, _fixSubs2.default)(file);
		var title = Helper.getEpisodeTitle({ name: name, episodeNum: episodeNum, season: season, showsData: showsData });
		episodeNum = episodeNum < 10 ? "0" + episodeNum : episodeNum;
		var baseName = "/Tv Shows/" + name + "/Season " + season + "/" + name + " S" + (season < 10 ? "0" + season : season) + "E" + episodeNum;
		title ? newFile["newFile"] = baseName + " - " + title + ext : newFile["newFile"] = baseName + ext;
		newFiles.push(newFile);
	});
	return newFiles;
}

function findNewNameForMovie(_ref13) {
	var file = _ref13.file,
	    name = _ref13.name,
	    moviesData = _ref13.moviesData,
	    movies = _ref13.movies;

	var newFile = { oldFile: file };
	var ext = Helper.getExt(file);
	if (ext === ".srt") (0, _fixSubs2.default)(file);
	if (!moviesData.length) {
		movies.forEach(function (movie) {
			return newFile["newFile"] = "/Movies/" + movie;
		});
	} else {
		moviesData.map(function (item) {
			if (name.toLowerCase() !== item.Title.toLowerCase()) return;
			var Title = item.Title,
			    Year = item.Year,
			    Runtime = item.Runtime,
			    Rating = item.Rating;

			newFile["newFile"] = "/Movies/" + Title + " " + Year + " (" + Runtime + ") (" + Rating + ")/" + Title + " " + Year + ext;
		});
	}

	return newFile;
}function apiShowsAndMovies(_ref15) {
	var _this2 = this;

	var _ref16 = _slicedToArray(_ref15, 2),
	    shows = _ref16[0],
	    movies = _ref16[1];

	try {
		return new Promise(function () {
			var _ref17 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve) {
				var _ref18, _ref19, showsData, posters, moviesData;

				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return apiShows(shows);

							case 2:
								_ref18 = _context4.sent;
								_ref19 = _slicedToArray(_ref18, 2);
								showsData = _ref19[0];
								posters = _ref19[1];
								_context4.next = 8;
								return apiMovies(movies);

							case 8:
								moviesData = _context4.sent;

								resolve([showsData, posters, moviesData]);

							case 10:
							case "end":
								return _context4.stop();
						}
					}
				}, _callee4, _this2);
			}));

			return function (_x4) {
				return _ref17.apply(this, arguments);
			};
		}());
	} catch (e) {
		console.log("Execute API " + new Error(e));
	}
}function filterShowsAndMovies(video) {
	var shows = {},
	    movies = [];

	video.map(function (_ref29) {
		var file = _ref29.file,
		    type = _ref29.type,
		    fileStats = _ref29.fileStats,
		    name = _ref29.name;

		if (name) name = name.replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/\/\\/g, "").trim(); //Removes brackets and extra whitespace
		if (type === "movie") return movies.length ? movies.indexOf(name) === -1 ? movies.push(name) : "" : movies.push(name);
		{
			var _name = fileStats.name,
			    season = fileStats.season,
			    episodeNum = fileStats.episodeNum;

			if (!_name) return;
			_name = Helper.capitalize(_name);
			var sameShow = Helper.sameShow(shows, _name, season);
			if (!sameShow) {
				shows[_name] = { season: [season], length: 1, files: [{ file: file, episodeNum: episodeNum, season: season }] };return;
			} //New show detected
			if (shows[sameShow.name] && shows[sameShow.name].hasOwnProperty("files")) shows[sameShow.name].files.push({ file: file, episodeNum: episodeNum, season: season });
			if (!sameShow.newSeason) return; //Same show detected
			shows[sameShow.name].season.push(season); //Same show but different season
			shows[sameShow.name].length += 1;
		}
	});
	return [shows, movies];
}

/* Removes empty dirs after the rename of the files */
function removeDirs(files) {
	try {
		files.map(function (file) {
			return _fs2.default.rmdirSync(file);
		});
	} catch (e) {
		console.log("Remove Dirs Error: " + new Error(e));
	}
}

/* Makes folder for shows and movies */
function makeShowAndMoviesFolders(_ref30) {
	var _this5 = this;

	var basePath = _ref30.basePath,
	    shows = _ref30.shows,
	    posters = _ref30.posters,
	    movies = _ref30.movies;

	return new Promise(function () {
		var _ref31 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve) {
			return _regenerator2.default.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_fs2.default.mkdirSync(basePath);
							["Tv Shows", "Movies", "No Match Found"].map(function (str) {
								return _fs2.default.mkdirSync(basePath + "/" + str);
							}); //Initial Folders
							_context9.next = 4;
							return Promise.all([makeShowsFolders({ shows: shows, basePath: basePath, posters: posters }), makeMoviesFolders(movies, basePath)]);

						case 4:
							resolve();

						case 5:
						case "end":
							return _context9.stop();
					}
				}
			}, _callee9, _this5);
		}));

		return function (_x9) {
			return _ref31.apply(this, arguments);
		};
	}()).catch(function (e) {
		return console.log("Make Show Folders " + new Error(e));
	});
}

/* Makes folder for the shows with; Season and showName */
function makeShowsFolders(_ref32) {
	var _this6 = this;

	var shows = _ref32.shows,
	    posters = _ref32.posters,
	    basePath = _ref32.basePath;

	return new Promise(function () {
		var _ref33 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee10(resolve) {
			var _loop, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, showName;

			return _regenerator2.default.wrap(function _callee10$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_loop = /*#__PURE__*/_regenerator2.default.mark(function _loop(showName) {
								var season;
								return _regenerator2.default.wrap(function _loop$(_context10) {
									while (1) {
										switch (_context10.prev = _context10.next) {
											case 0:
												season = shows[showName].season;

												_fs2.default.mkdirSync(basePath + "/Tv Shows/" + showName);

												if (!posters.length) {
													_context10.next = 5;
													break;
												}

												_context10.next = 5;
												return savePosters({ basePath: basePath, showName: showName, posters: posters });

											case 5:
												//API key is provided
												season.map(function (season) {
													return _fs2.default.mkdirSync(basePath + "/Tv Shows/" + showName + "/Season " + season);
												});

											case 6:
											case "end":
												return _context10.stop();
										}
									}
								}, _loop, _this6);
							});
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							_context11.prev = 4;
							_iterator4 = Object.keys(shows)[Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								_context11.next = 12;
								break;
							}

							showName = _step4.value;
							return _context11.delegateYield(_loop(showName), "t0", 9);

						case 9:
							_iteratorNormalCompletion4 = true;
							_context11.next = 6;
							break;

						case 12:
							_context11.next = 18;
							break;

						case 14:
							_context11.prev = 14;
							_context11.t1 = _context11["catch"](4);
							_didIteratorError4 = true;
							_iteratorError4 = _context11.t1;

						case 18:
							_context11.prev = 18;
							_context11.prev = 19;

							if (!_iteratorNormalCompletion4 && _iterator4.return) {
								_iterator4.return();
							}

						case 21:
							_context11.prev = 21;

							if (!_didIteratorError4) {
								_context11.next = 24;
								break;
							}

							throw _iteratorError4;

						case 24:
							return _context11.finish(21);

						case 25:
							return _context11.finish(18);

						case 26:
							resolve();

						case 27:
						case "end":
							return _context11.stop();
					}
				}
			}, _callee10, _this6, [[4, 14, 18, 26], [19,, 21, 25]]);
		}));

		return function (_x10) {
			return _ref33.apply(this, arguments);
		};
	}()).catch(function (e) {
		return console.log("makeShowsFolders " + new Error(e));
	});
}

/* Makes folder for the movies with name, year, rating and runtime */
function makeMoviesFolders(movies, basePath) {
	var _this7 = this;

	return new Promise(function () {
		var _ref34 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee11(resolve) {
			var _loop2, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, movie;

			return _regenerator2.default.wrap(function _callee11$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							if (!(movies instanceof Array)) {
								_context13.next = 4;
								break;
							}

							//API key not provided
							movies.forEach(function (movie) {
								return _fs2.default.mkdirSync(basePath + "/Movies/" + movie);
							});
							_context13.next = 30;
							break;

						case 4:
							_loop2 = /*#__PURE__*/_regenerator2.default.mark(function _loop2(movie) {
								var keys, Title, Rating, Poster, Runtime, Year, folder;
								return _regenerator2.default.wrap(function _loop2$(_context12) {
									while (1) {
										switch (_context12.prev = _context12.next) {
											case 0:
												keys = Object.keys(movie);

												keys.splice(2, 1); //Remove Poster
												keys.forEach(function (item) {
													return movie[item] = movie[item].replace(/[\|><\*:\?\"/\/]/g, "");
												});
												Title = movie.Title, Rating = movie.Rating, Poster = movie.Poster, Runtime = movie.Runtime, Year = movie.Year;
												folder = Title + " " + Year + " (" + Runtime + ") (" + Rating + ")";

												_fs2.default.mkdirSync(basePath + "/Movies/" + folder);

												if (!(Poster !== "N/A")) {
													_context12.next = 9;
													break;
												}

												_context12.next = 9;
												return Helper.saveImage(Poster, basePath + "/Movies/" + folder + "/" + Title + ".jpg");

											case 9:
											case "end":
												return _context12.stop();
										}
									}
								}, _loop2, _this7);
							});
							_iteratorNormalCompletion5 = true;
							_didIteratorError5 = false;
							_iteratorError5 = undefined;
							_context13.prev = 8;
							_iterator5 = movies[Symbol.iterator]();

						case 10:
							if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
								_context13.next = 16;
								break;
							}

							movie = _step5.value;
							return _context13.delegateYield(_loop2(movie), "t0", 13);

						case 13:
							_iteratorNormalCompletion5 = true;
							_context13.next = 10;
							break;

						case 16:
							_context13.next = 22;
							break;

						case 18:
							_context13.prev = 18;
							_context13.t1 = _context13["catch"](8);
							_didIteratorError5 = true;
							_iteratorError5 = _context13.t1;

						case 22:
							_context13.prev = 22;
							_context13.prev = 23;

							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}

						case 25:
							_context13.prev = 25;

							if (!_didIteratorError5) {
								_context13.next = 28;
								break;
							}

							throw _iteratorError5;

						case 28:
							return _context13.finish(25);

						case 29:
							return _context13.finish(22);

						case 30:
							resolve();

						case 31:
						case "end":
							return _context13.stop();
					}
				}
			}, _callee11, _this7, [[8, 18, 22, 30], [23,, 25, 29]]);
		}));

		return function (_x11) {
			return _ref34.apply(this, arguments);
		};
	}()).catch(function (e) {
		return console.log("makeMoviesFolders " + new Error(e));
	});
}function filterFiles(files) {
	var dirs = [],
	    video = [],
	    other = [];

	files.map(function (file) {
		if (Helper.isDir(file)) {
			dirs.push(file);return;
		}

		var _Helper$isMatch = Helper.isMatch(file),
		    _Helper$isMatch$episo = _Helper$isMatch.episodePatt,
		    episodePatt = _Helper$isMatch$episo === undefined ? null : _Helper$isMatch$episo,
		    type = _Helper$isMatch.type,
		    _Helper$isMatch$name = _Helper$isMatch.name,
		    name = _Helper$isMatch$name === undefined ? null : _Helper$isMatch$name;

		if (/Sample/gi.test(file)) {
			other.push(file);return;
		}
		var fileStats = type === "tv" ? Helper.getFileStats({ file: file, episodePatt: episodePatt }) : null;
		if (type && /\.mkv|\.mp4|\.srt|\.avi/gi.test(file)) video.push({ file: file, type: type, fileStats: fileStats, name: name });
		other.push(file);
	});
	return { dirs: dirs.sort(function (a, b) {
			return b.length - a.length;
		}), video: video, other: other }; //Sorting dirs, so that it deletes from inside out
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(4);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {

	/* Matches the found title with the api title word by word -> mr robot -> mr, check with api title -> robot, check with api title */
	function compareNameWithApi(name, showsData) {
		var newName = void 0;
		showsData.forEach(function (_ref) {
			var Title = _ref.Title;

			var nameSplit = name.split(" ");
			var matches = 0;
			nameSplit.forEach(function (item) {
				return new RegExp(item, "gi").test(Title) ? matches += 1 : "";
			});
			if (matches !== nameSplit.length) return;
			newName = Title;
		});
		return newName;
	}

	var Helper = function () {
		function Helper() {
			_classCallCheck(this, Helper);
		}

		_createClass(Helper, [{
			key: "isDir",
			value: function isDir(file) {
				return _fs2.default.statSync(file).isDirectory() ? true : false;
			}
		}, {
			key: "disectArrayAndPush",
			value: function disectArrayAndPush(path, deeperDir, arr) {
				deeperDir.map(function (item) {
					return arr.push(path + item);
				});
				return arr;
			}
		}, {
			key: "capitalize",
			value: function capitalize(name) {
				return name.split(" ").map(function (word) {
					return word[0].toUpperCase() + word.slice(1, word.length);
				}).join(' ');
			}

			/* file => get Season and episode pattern and if movies, get it's name */

		}, {
			key: "isMatch",
			value: function isMatch(files) {
				var keys = Object.keys(_patterns2.default);
				for (var i = 0; i < keys.length; i += 1) {
					var objFunc = _patterns2.default[keys[i]](files);
					if (!objFunc) continue;
					return objFunc;
				}
				return { response: false };
			}
		}, {
			key: "getExt",
			value: function getExt(file) {
				return file.slice(file.length - 4, file.length);
			}

			/*
   	Helps getShows to figure out if this show is already found but this file is of different season.
   	{name: props} is returned because the same show can have files with different names Mr robot and mr robot
   */

		}, {
			key: "sameShow",
			value: function sameShow(shows, title, season) {
				for (var prop in shows) {
					if (!new RegExp(title + "$", "i").test(prop)) continue;
					if (shows[prop].season.indexOf(season) === -1) return { newSeason: true, name: prop };
					return { newSeason: null, name: prop }; //If not same season but same shows
				}
				return false;
			}

			/* Saves poster */

		}, {
			key: "saveImage",
			value: function saveImage(url, name) {
				return new Promise(function (resolve) {
					var file = _fs2.default.createWriteStream(name);
					_https2.default.get(url, function (response) {
						response.pipe(file);resolve();
					});
				}).catch(function (e) {
					return console.log(e);
				});
			}

			/* Gets shows and posters from omdbapi */

		}, {
			key: "getData",
			value: function getData(reqPath) {
				return new Promise(function (resolve) {
					var options = {
						host: "www.omdbapi.com",
						path: reqPath,
						method: "GET",
						headers: { "Content-Type": "application/json" }
					};
					_https2.default.request(options).on("response", function (res) {
						var output = "";
						res.setEncoding("utf8");
						res.on("data", function (chunk) {
							return output += chunk;
						});
						res.on("end", function () {
							return resolve(JSON.parse(output));
						});
						res.on("error", function (e) {
							return console.error(e);
						});
					}).end();
				}).catch(function (e) {
					return console.log("getData " + new Error(e));
				});
			}

			//Replaces show and movie names found from files to the names that were found from api. This solves the bad names that were found from the files

		}, {
			key: "replaceNameWithApiName",
			value: function replaceNameWithApiName(_ref2) {
				var _ref2$showsAndMovies = _slicedToArray(_ref2.showsAndMovies, 1),
				    shows = _ref2$showsAndMovies[0],
				    showsData = _ref2.showsData;

				var newShows = {};
				Object.keys(shows).forEach(function (name) {
					var isName = compareNameWithApi(name, showsData);
					isName ? newShows[isName] = shows[name] : newShows[name] = shows[name];
				});
				return newShows;
			}
		}, {
			key: "getEpisodeTitle",
			value: function getEpisodeTitle(_ref3) {
				var name = _ref3.name,
				    episodeNum = _ref3.episodeNum,
				    season = _ref3.season,
				    showsData = _ref3.showsData;

				var title = "";
				if (!showsData.length) return null;
				showsData.forEach(function (show) {
					if (name !== show.Title || show.Season !== season) return;
					show.Episodes.forEach(function (_ref4) {
						var Episode = _ref4.Episode,
						    Title = _ref4.Title;
						return episodeNum === Episode ? title = Title : "";
					});
				});
				return title ? title.replace(/[^\w\s-\.$]/gi, "") : null; //Repalace is for weird titles like - Horseback Riding\Man Zone
			}

			/* Outputs season, Show name and episode number*/

		}, {
			key: "getFileStats",
			value: function getFileStats(_ref5) {
				var file = _ref5.file,
				    episodePatt = _ref5.episodePatt;

				file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " "); // "path/New Girl HDTV.LOL S02E01.mp4" -> "/New Girl HDTV LOL S02E01 mp4"
				var index = /e/gi.exec(episodePatt) ? { patt: /e/gi.exec(episodePatt)["index"], match: "e" } : { patt: /x/gi.exec(episodePatt)["index"], match: "x" };
				var season = index.match === "e" ? episodePatt.slice(1, index.patt) : episodePatt.slice(0, index.patt);
				var name = file.slice(0, file.indexOf(episodePatt) - 1).replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/\/\\/g, "").replace(/[^\w\s\.$]/gi, "").trim();
				var episodeNum = episodePatt.slice(index.patt + 1, episodePatt.length);
				return { season: parseInt(season), name: name, episodeNum: parseInt(episodeNum) };
			}

			/* Generated random folder name to organize the shows */

		}, {
			key: "generateRandomFolderName",
			value: function generateRandomFolderName() {
				var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
				var randomString = [];
				for (var i = 0; i < 6; i += 1) {
					var ran = letters[Math.floor(Math.random() * letters.length)];
					if (Math.random() < 0.699) ran = ran.toLowerCase(); //So that it gives equal change to Upper case and lower case alphabets maybe (I'll check it later)
					randomString.push(ran);
				}
				return randomString.join("");
			}
		}]);

		return Helper;
	}();

	return new Helper();
};

var _fs = __webpack_require__(0);

var _fs2 = _interopRequireDefault(_fs);

var _patterns = __webpack_require__(6);

var _patterns2 = _interopRequireDefault(_patterns);

var _https = __webpack_require__(7);

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	seasonPatt: function seasonPatt(file) {
		//For instance -> S02E05
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		var episode = /S\d+E\d+/gi.exec(file);
		if (!episode) return false;
		return { episodePatt: episode[0], type: "tv" };
	},
	seasonXEpiNamePatt: function seasonXEpiNamePatt(file) {
		// For instance -> 1x02
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		var episode = /\d+x\d\d/gi.exec(file);
		if (!episode) return false;
		episode = episode[0];
		return { episodePatt: episode, type: "tv" };
	},
	ifMovie: function ifMovie(file) {
		file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
		var name = /20\d+|19\d+/gi.exec(file);
		if (!name) return false;
		name = file.slice(0, name["index"]).replace(/\./g, " ").trim();
		return { name: name, type: "movie" };
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (file) {

	//Rename .srt with .txt, read .txt file, modify it, delete .txt, write .srt with new data
	var fileTxtName = file.replace(/\.srt/g, ".txt");
	_fs2.default.renameSync(file, fileTxtName);
	var subData = _fs2.default.readFileSync(fileTxtName, "utf-8").replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/[^A-Za-z\d\s!?,''><.:-]/gi, "");
	_fs2.default.unlinkSync(fileTxtName);
	_fs2.default.writeFileSync(file, subData, "utf-8");
};

var _fs = __webpack_require__(0);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (Helper) {

	/* Gets all the files inside the folder */
	function toTheDeepestFile(_ref) {
		var basePath = _ref.basePath,
		    deeperDir = _ref.deeperDir,
		    arr = _ref.arr;

		basePath += deeperDir + "/";
		deeperDir = _fs2.default.readdirSync(basePath);
		arr = Helper.disectArrayAndPush(basePath, deeperDir, arr); //Concat was not working for some reason. Ugh!!
		for (var i = 0; i < deeperDir.length; i += 1) {
			if (!Helper.isDir(basePath + deeperDir[i])) continue;
			toTheDeepestFile({ basePath: basePath, "deeperDir": deeperDir[i], arr: arr });
		}
		return arr;
	}

	var Reader = function () {
		function Reader() {
			_classCallCheck(this, Reader);
		}

		_createClass(Reader, [{
			key: "readFiles",


			/*Get all the files in the provided path */
			value: function readFiles(basePath) {
				var files = [];
				_fs2.default.readdirSync(basePath).map(function (file) {
					files.push(basePath + file);
					if (!Helper.isDir(basePath + file)) return;
					files = [].concat(_toConsumableArray(files), _toConsumableArray(toTheDeepestFile({ basePath: basePath, deeperDir: file, arr: [] })));
				});
				return files;
			}
		}]);

		return Reader;
	}();

	return new Reader();
};

var _fs = __webpack_require__(0);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var tab, usageData, args, path, apiKey, mode;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					tab = "	";
					usageData = {
						"help": "\nUsage: node organize <path> --api=<apikey|false> --mode=<mode>\n\n" + ("<path>" + tab + "Location for where to look for files to organize\n\n") + ("<apikey>" + tab + "api key from ombdapi.com; Defaults to false\n\n") + ("<mode>" + tab + "Specify mode: \"symlink\", \"hardlink\", \"nolink\"; \"hardlink\" by default;\n\n") + (tab + "symlink: It creates shortcut of the files with formatted names instead of renaming\n") + ("" + tab + tab + " the original files.\n\n") + (tab + "hardlink: It creates new files with formatted names without taking extra space.\n") + ("" + tab + tab + "  If the original files are deleted, hard linked files will take the space.\n") + ("" + tab + tab + "  Basically duplicates of files without taking extra space.\n") + ("" + tab + tab + "  Recommended to use on torrents that are being seeded.\n\n") + (tab + "nolink: This renames the files and deletes the unnecessary files.\n") + ("" + tab + tab + "This will stop seeding.\n\n") + ("--help" + tab + "show information about the options")
					};
					args = process.argv.slice(2, process.argv.length);

					if (!(!args.length || args[0] === "--help" || args.length > 3)) {
						_context.next = 6;
						break;
					}

					console.log(usageData.help);return _context.abrupt("return", false);

				case 6:

					//Path
					path = args[0][args.length - 1] !== "/" ? args[0] + "/" : args[0];

					path = path.replace(/\\/g, "/");

					//Defaults
					apiKey = false;
					mode = "--mode=hardlink";


					args.forEach(function (arg) {
						//Parsing the mode and the api key
						if (/mode/.test(arg)) mode = arg;
						if (/api/.test(arg)) arg = arg.slice(arg.indexOf("="), arg.length);
					});

					if (!(mode === "--mode=hardlink")) {
						_context.next = 15;
						break;
					}

					return _context.abrupt("return", { "mode": 0, path: path, apiKey: apiKey });

				case 15:
					if (!(mode === "--mode=symlink")) {
						_context.next = 19;
						break;
					}

					return _context.abrupt("return", { "mode": 1, path: path, apiKey: apiKey });

				case 19:
					return _context.abrupt("return", { "mode": 2, path: path, apiKey: apiKey });

				case 20:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, this);
}));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWJkZGE3ZDQ4MDI5Y2IwNjYwOGEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uL3NyYy9maXhTdWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VBcmdzLmpzIl0sIm5hbWVzIjpbImZpbGUiLCJiYXNlUGF0aCIsImZpbGVOYW1lIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImxlbmd0aCIsImV4dCIsIkhlbHBlciIsImdldEV4dCIsInRlc3QiLCJ1bmxpbmtTeW5jIiwiUHJvbWlzZSIsInJlbmFtZSIsInJlc29sdmUiLCJ3aGF0VG9Eb1dpdGhGaWxlIiwibW92aWVzIiwiYXBpRGF0YSIsIm1vdmllIiwic3BsaXQiLCJqb2luIiwiZ2V0RGF0YSIsIlRpdGxlIiwiWWVhciIsIlBvc3RlciIsIlJ1bnRpbWUiLCJpbWRiUmF0aW5nIiwiUmVzcG9uc2UiLCJwdXNoIiwiUmF0aW5nIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYXBpTW92aWVzIiwic2hvd3MiLCJwb3N0ZXJzIiwiT2JqZWN0Iiwia2V5cyIsInNob3dOYW1lIiwic2Vhc29uIiwicmVwbGFjZSIsImJhc2VVcmwiLCJ0aXRsZSIsInVybCIsIml0ZW0iLCJhcGlTaG93cyIsInRvTG93ZXJDYXNlIiwic2F2ZUltYWdlIiwic2F2ZVBvc3RlcnMiLCJHZXRGaWxlcyIsImFyZ3MiLCJwYXRoIiwidGltZSIsImZpbGVzIiwicmVhZEZpbGVzIiwiZmlsdGVyRmlsZXMiLCJkaXJzIiwidmlkZW8iLCJvdGhlciIsImZpbHRlclNob3dzQW5kTW92aWVzIiwic2hvd3NEYXRhIiwibW92aWVzRGF0YSIsImFwaUtleSIsImFwaVNob3dzQW5kTW92aWVzIiwicmVwbGFjZU5hbWVXaXRoQXBpTmFtZSIsImdlbmVyYXRlUmFuZG9tRm9sZGVyTmFtZSIsIm1ha2VTaG93QW5kTW92aWVzRm9sZGVycyIsIm5ld05hbWVzIiwiZmluZE5ld05hbWVzRm9yRmlsZXMiLCJtb2RlIiwibWFwIiwib2xkRmlsZSIsIm5ld0ZpbGUiLCJsaW5rIiwiZXJyIiwic3ltbGluayIsImFsbCIsInJlbW92ZURpcnMiLCJ0aW1lRW5kIiwibmFtZXMiLCJuYW1lIiwidHlwZSIsImZpbmROZXdOYW1lRm9yTW92aWUiLCJmaW5kTmV3TmFtZUZvclNob3ciLCJuZXdGaWxlcyIsImVwaXNvZGVOdW0iLCJnZXRFcGlzb2RlVGl0bGUiLCJiYXNlTmFtZSIsImZvckVhY2giLCJlIiwiZmlsZVN0YXRzIiwidHJpbSIsImluZGV4T2YiLCJjYXBpdGFsaXplIiwic2FtZVNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsIm5ld1NlYXNvbiIsInJtZGlyU3luYyIsIm1rZGlyU3luYyIsInN0ciIsIm1ha2VTaG93c0ZvbGRlcnMiLCJtYWtlTW92aWVzRm9sZGVycyIsImNhdGNoIiwiQXJyYXkiLCJzcGxpY2UiLCJmb2xkZXIiLCJpc0RpciIsImlzTWF0Y2giLCJlcGlzb2RlUGF0dCIsImdldEZpbGVTdGF0cyIsInNvcnQiLCJhIiwiYiIsImNvbXBhcmVOYW1lV2l0aEFwaSIsIm5ld05hbWUiLCJuYW1lU3BsaXQiLCJtYXRjaGVzIiwiUmVnRXhwIiwic3RhdFN5bmMiLCJpc0RpcmVjdG9yeSIsImRlZXBlckRpciIsImFyciIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImkiLCJvYmpGdW5jIiwicmVzcG9uc2UiLCJwcm9wIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJnZXQiLCJwaXBlIiwicmVxUGF0aCIsIm9wdGlvbnMiLCJob3N0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlcXVlc3QiLCJvbiIsIm91dHB1dCIsInJlcyIsInNldEVuY29kaW5nIiwiY2h1bmsiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsImVuZCIsInNob3dzQW5kTW92aWVzIiwibmV3U2hvd3MiLCJpc05hbWUiLCJzaG93IiwiU2Vhc29uIiwiRXBpc29kZXMiLCJFcGlzb2RlIiwiaW5kZXgiLCJleGVjIiwicGF0dCIsIm1hdGNoIiwicGFyc2VJbnQiLCJsZXR0ZXJzIiwicmFuZG9tU3RyaW5nIiwicmFuIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2Vhc29uUGF0dCIsImVwaXNvZGUiLCJzZWFzb25YRXBpTmFtZVBhdHQiLCJpZk1vdmllIiwiZmlsZVR4dE5hbWUiLCJyZW5hbWVTeW5jIiwic3ViRGF0YSIsInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJ0b1RoZURlZXBlc3RGaWxlIiwicmVhZGRpclN5bmMiLCJkaXNlY3RBcnJheUFuZFB1c2giLCJSZWFkZXIiLCJ0YWIiLCJ1c2FnZURhdGEiLCJwcm9jZXNzIiwiYXJndiIsImhlbHAiLCJhcmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7OztBQ3R0QkE7Ozs7Ozs7Ozs7a0JBTWUsWUFBWTs7QUFFMUI7QUFDQSxVQUFTdUQsa0JBQVQsQ0FBNEJqQyxJQUE1QixFQUFrQ3BCLFNBQWxDLEVBQTZDO0FBQzVDLE1BQUlzRCxnQkFBSjtBQUNBdEQsWUFBVTRCLE9BQVYsQ0FBa0IsZ0JBQWE7QUFBQSxPQUFYbkUsS0FBVyxRQUFYQSxLQUFXOztBQUM5QixPQUFJOEYsWUFBWW5DLEtBQUs5RCxLQUFMLENBQVcsR0FBWCxDQUFoQjtBQUNBLE9BQUlrRyxVQUFVLENBQWQ7QUFDQUQsYUFBVTNCLE9BQVYsQ0FBa0I7QUFBQSxXQUFRLElBQUk2QixNQUFKLENBQVd6RSxJQUFYLEVBQWlCLElBQWpCLEVBQXVCbkMsSUFBdkIsQ0FBNEJZLEtBQTVCLElBQXFDK0YsV0FBVyxDQUFoRCxHQUFvRCxFQUE1RDtBQUFBLElBQWxCO0FBQ0EsT0FBR0EsWUFBWUQsVUFBVTlHLE1BQXpCLEVBQWlDO0FBQ2pDNkcsYUFBVTdGLEtBQVY7QUFDQSxHQU5EO0FBT0EsU0FBTzZGLE9BQVA7QUFDQTs7QUFieUIsS0FlcEIzRyxNQWZvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEseUJBaUJuQlAsSUFqQm1CLEVBaUJiO0FBQUUsV0FBTyxhQUFHc0gsUUFBSCxDQUFZdEgsSUFBWixFQUFrQnVILFdBQWxCLEtBQWtDLElBQWxDLEdBQXlDLEtBQWhEO0FBQXdEO0FBakI3QztBQUFBO0FBQUEsc0NBbUJOcEUsSUFuQk0sRUFtQkFxRSxTQW5CQSxFQW1CV0MsR0FuQlgsRUFtQmlCO0FBQ3pDRCxjQUFVbEQsR0FBVixDQUFjO0FBQUEsWUFBUW1ELElBQUk5RixJQUFKLENBQVN3QixPQUFPUCxJQUFoQixDQUFSO0FBQUEsS0FBZDtBQUNBLFdBQU82RSxHQUFQO0FBQ0E7QUF0QndCO0FBQUE7QUFBQSw4QkF3QmR6QyxJQXhCYyxFQXdCUjtBQUNoQixXQUFPQSxLQUFLOUQsS0FBTCxDQUFXLEdBQVgsRUFDTG9ELEdBREssQ0FDRDtBQUFBLFlBQVFvRCxLQUFLLENBQUwsRUFBUUMsV0FBUixLQUF3QkQsS0FBS3ZILEtBQUwsQ0FBVyxDQUFYLEVBQWN1SCxLQUFLckgsTUFBbkIsQ0FBaEM7QUFBQSxLQURDLEVBRUxjLElBRkssQ0FFQSxHQUZBLENBQVA7QUFHQTs7QUFFRDs7QUE5QnlCO0FBQUE7QUFBQSwyQkErQmpCa0MsS0EvQmlCLEVBK0JWO0FBQ2QsUUFBSWhCLE9BQU9ELE9BQU9DLElBQVAsb0JBQVg7QUFDQSxTQUFJLElBQUl1RixJQUFJLENBQVosRUFBZUEsSUFBSXZGLEtBQUtoQyxNQUF4QixFQUFnQ3VILEtBQUcsQ0FBbkMsRUFBc0M7QUFDckMsU0FBSUMsVUFBVSxtQkFBTXhGLEtBQUt1RixDQUFMLENBQU4sRUFBZXZFLEtBQWYsQ0FBZDtBQUNBLFNBQUcsQ0FBQ3dFLE9BQUosRUFBYTtBQUNiLFlBQU9BLE9BQVA7QUFDQTtBQUNELFdBQU8sRUFBQ0MsVUFBVSxLQUFYLEVBQVA7QUFDQTtBQXZDd0I7QUFBQTtBQUFBLDBCQXlDbEI5SCxJQXpDa0IsRUF5Q1o7QUFBRSxXQUFPQSxLQUFLRyxLQUFMLENBQVdILEtBQUtLLE1BQUwsR0FBYyxDQUF6QixFQUE0QkwsS0FBS0ssTUFBakMsQ0FBUDtBQUFrRDs7QUFFakU7Ozs7O0FBM0N5QjtBQUFBO0FBQUEsNEJBK0NoQjZCLEtBL0NnQixFQStDVFEsS0EvQ1MsRUErQ0ZILE1BL0NFLEVBK0NNO0FBQzlCLFNBQUksSUFBSXdGLElBQVIsSUFBZ0I3RixLQUFoQixFQUF1QjtBQUN0QixTQUFHLENBQUMsSUFBSW1GLE1BQUosQ0FBVzNFLFFBQVEsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkJqQyxJQUE3QixDQUFrQ3NILElBQWxDLENBQUosRUFBNkM7QUFDN0MsU0FBRzdGLE1BQU02RixJQUFOLEVBQVl4RixNQUFaLENBQW1CcUQsT0FBbkIsQ0FBMkJyRCxNQUEzQixNQUF1QyxDQUFDLENBQTNDLEVBQThDLE9BQU8sRUFBQ3lELFdBQVcsSUFBWixFQUFrQmhCLE1BQU0rQyxJQUF4QixFQUFQO0FBQzlDLFlBQU8sRUFBQy9CLFdBQVcsSUFBWixFQUFrQmhCLE1BQU0rQyxJQUF4QixFQUFQLENBSHNCLENBR2dCO0FBQ3RDO0FBQ0QsV0FBTyxLQUFQO0FBQ0E7O0FBRUQ7O0FBeER5QjtBQUFBO0FBQUEsNkJBeURmcEYsR0F6RGUsRUF5RFZxQyxJQXpEVSxFQXlESjtBQUNwQixXQUFPLElBQUlyRSxPQUFKLENBQVksbUJBQVc7QUFDN0IsU0FBSVgsT0FBTyxhQUFHZ0ksaUJBQUgsQ0FBcUJoRCxJQUFyQixDQUFYO0FBQ0EscUJBQU1pRCxHQUFOLENBQVV0RixHQUFWLEVBQWUsb0JBQVk7QUFBRW1GLGVBQVNJLElBQVQsQ0FBY2xJLElBQWQsRUFBcUJhO0FBQVksTUFBOUQ7QUFDQSxLQUhNLEVBR0p5RixLQUhJLENBR0U7QUFBQSxZQUFLeEUsUUFBUUMsR0FBUixDQUFZMEQsQ0FBWixDQUFMO0FBQUEsS0FIRixDQUFQO0FBSUE7O0FBRUQ7O0FBaEV5QjtBQUFBO0FBQUEsMkJBaUVqQjBDLE9BakVpQixFQWlFUjtBQUNoQixXQUFPLElBQUl4SCxPQUFKLENBQVksbUJBQVc7QUFDN0IsU0FBSXlILFVBQVU7QUFDYkMsWUFBTSxpQkFETztBQUVibEYsWUFBTWdGLE9BRk87QUFHYkcsY0FBUSxLQUhLO0FBSWJDLGVBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCO0FBSkksTUFBZDtBQU1BLHFCQUFNQyxPQUFOLENBQWNKLE9BQWQsRUFBdUJLLEVBQXZCLENBQTBCLFVBQTFCLEVBQXNDLGVBQU87QUFDNUMsVUFBSUMsU0FBUyxFQUFiO0FBQ0FDLFVBQUlDLFdBQUosQ0FBZ0IsTUFBaEI7QUFDQUQsVUFBSUYsRUFBSixDQUFPLE1BQVAsRUFBZTtBQUFBLGNBQVNDLFVBQVVHLEtBQW5CO0FBQUEsT0FBZjtBQUNBRixVQUFJRixFQUFKLENBQU8sS0FBUCxFQUFjO0FBQUEsY0FBTTVILFFBQVFpSSxLQUFLQyxLQUFMLENBQVdMLE1BQVgsQ0FBUixDQUFOO0FBQUEsT0FBZDtBQUNBQyxVQUFJRixFQUFKLENBQU8sT0FBUCxFQUFnQjtBQUFBLGNBQUszRyxRQUFRa0gsS0FBUixDQUFjdkQsQ0FBZCxDQUFMO0FBQUEsT0FBaEI7QUFDQSxNQU5ELEVBTUd3RCxHQU5IO0FBT0EsS0FkTSxFQWNKM0MsS0FkSSxDQWNFO0FBQUEsWUFBS3hFLFFBQVFDLEdBQVIsQ0FBWSxhQUFhLElBQUlDLEtBQUosQ0FBVXlELENBQVYsQ0FBekIsQ0FBTDtBQUFBLEtBZEYsQ0FBUDtBQWVBOztBQUVEOztBQW5GeUI7QUFBQTtBQUFBLGlEQW9Gb0M7QUFBQSxvREFBckN5RCxjQUFxQztBQUFBLFFBQXBCaEgsS0FBb0I7QUFBQSxRQUFaMEIsU0FBWSxTQUFaQSxTQUFZOztBQUM1RCxRQUFJdUYsV0FBVyxFQUFmO0FBQ0EvRyxXQUFPQyxJQUFQLENBQVlILEtBQVosRUFBbUJzRCxPQUFuQixDQUEyQixnQkFBUTtBQUNsQyxTQUFJNEQsU0FBU25DLG1CQUFtQmpDLElBQW5CLEVBQXlCcEIsU0FBekIsQ0FBYjtBQUNBd0YsY0FBU0QsU0FBU0MsTUFBVCxJQUFtQmxILE1BQU04QyxJQUFOLENBQTVCLEdBQTBDbUUsU0FBU25FLElBQVQsSUFBaUI5QyxNQUFNOEMsSUFBTixDQUEzRDtBQUNBLEtBSEQ7QUFJQSxXQUFPbUUsUUFBUDtBQUNBO0FBM0Z3QjtBQUFBO0FBQUEsMENBNkY4QjtBQUFBLFFBQXRDbkUsSUFBc0MsU0FBdENBLElBQXNDO0FBQUEsUUFBaENLLFVBQWdDLFNBQWhDQSxVQUFnQztBQUFBLFFBQXBCOUMsTUFBb0IsU0FBcEJBLE1BQW9CO0FBQUEsUUFBWnFCLFNBQVksU0FBWkEsU0FBWTs7QUFDdEQsUUFBSWxCLFFBQVEsRUFBWjtBQUNBLFFBQUksQ0FBQ2tCLFVBQVV2RCxNQUFmLEVBQXVCLE9BQU8sSUFBUDtBQUN2QnVELGNBQVU0QixPQUFWLENBQWtCLGdCQUFRO0FBQ3pCLFNBQUdSLFNBQVNxRSxLQUFLaEksS0FBZCxJQUF1QmdJLEtBQUtDLE1BQUwsS0FBZ0IvRyxNQUExQyxFQUFrRDtBQUNsRDhHLFVBQUtFLFFBQUwsQ0FBYy9ELE9BQWQsQ0FBc0I7QUFBQSxVQUFFZ0UsT0FBRixTQUFFQSxPQUFGO0FBQUEsVUFBV25JLEtBQVgsU0FBV0EsS0FBWDtBQUFBLGFBQXNCZ0UsZUFBZW1FLE9BQWYsR0FBeUI5RyxRQUFRckIsS0FBakMsR0FBeUMsRUFBL0Q7QUFBQSxNQUF0QjtBQUNBLEtBSEQ7QUFJQSxXQUFPcUIsUUFBUUEsTUFBTUYsT0FBTixDQUFjLGVBQWQsRUFBK0IsRUFBL0IsQ0FBUixHQUE2QyxJQUFwRCxDQVBzRCxDQU9JO0FBQzFEOztBQUVEOztBQXZHeUI7QUFBQTtBQUFBLHVDQXdHUztBQUFBLFFBQXBCeEMsSUFBb0IsU0FBcEJBLElBQW9CO0FBQUEsUUFBZDRHLFdBQWMsU0FBZEEsV0FBYzs7QUFDakM1RyxXQUFPQSxLQUFLRyxLQUFMLENBQVdILEtBQUtJLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBbkMsRUFBc0NKLEtBQUtLLE1BQTNDLEVBQW1EbUMsT0FBbkQsQ0FBMkQsTUFBM0QsRUFBbUUsR0FBbkUsQ0FBUCxDQURpQyxDQUMrQztBQUNoRixRQUFJaUgsUUFBUSxNQUFNQyxJQUFOLENBQVc5QyxXQUFYLElBQTBCLEVBQUMrQyxNQUFNLE1BQU1ELElBQU4sQ0FBVzlDLFdBQVgsRUFBd0IsT0FBeEIsQ0FBUCxFQUF5Q2dELE9BQU8sR0FBaEQsRUFBMUIsR0FBaUYsRUFBQ0QsTUFBTSxNQUFNRCxJQUFOLENBQVc5QyxXQUFYLEVBQXdCLE9BQXhCLENBQVAsRUFBMENnRCxPQUFPLEdBQWpELEVBQTdGO0FBQ0EsUUFBSXJILFNBQVNrSCxNQUFNRyxLQUFOLEtBQWdCLEdBQWhCLEdBQXNCaEQsWUFBWXpHLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJzSixNQUFNRSxJQUEzQixDQUF0QixHQUF5RC9DLFlBQVl6RyxLQUFaLENBQWtCLENBQWxCLEVBQXFCc0osTUFBTUUsSUFBM0IsQ0FBdEU7QUFDQSxRQUFJM0UsT0FBT2hGLEtBQUtHLEtBQUwsQ0FBVyxDQUFYLEVBQWNILEtBQUs0RixPQUFMLENBQWFnQixXQUFiLElBQTRCLENBQTFDLEVBQ1RwRSxPQURTLENBQ0QsZUFEQyxFQUNnQixFQURoQixFQUVUQSxPQUZTLENBRUQsZ0JBRkMsRUFFaUIsRUFGakIsRUFHVEEsT0FIUyxDQUdELE9BSEMsRUFHUSxFQUhSLEVBSVRBLE9BSlMsQ0FJRCxjQUpDLEVBSWUsRUFKZixFQUltQm1ELElBSm5CLEVBQVg7QUFLQSxRQUFJTixhQUFhdUIsWUFBWXpHLEtBQVosQ0FBa0JzSixNQUFNRSxJQUFOLEdBQWEsQ0FBL0IsRUFBa0MvQyxZQUFZdkcsTUFBOUMsQ0FBakI7QUFDQSxXQUFPLEVBQUNrQyxRQUFRc0gsU0FBU3RILE1BQVQsQ0FBVCxFQUEyQnlDLFVBQTNCLEVBQWlDSyxZQUFZd0UsU0FBU3hFLFVBQVQsQ0FBN0MsRUFBUDtBQUNBOztBQUVEOztBQXJIeUI7QUFBQTtBQUFBLDhDQXNIRTtBQUMxQixRQUFJeUUsVUFBVSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsRUFBeUIsR0FBekIsRUFBNkIsR0FBN0IsRUFBaUMsR0FBakMsRUFBcUMsR0FBckMsRUFBeUMsR0FBekMsRUFBNkMsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQsR0FBckQsRUFBeUQsR0FBekQsRUFBNkQsR0FBN0QsRUFBaUUsR0FBakUsRUFBcUUsR0FBckUsRUFBeUUsR0FBekUsRUFBNkUsR0FBN0UsRUFBaUYsR0FBakYsRUFBcUYsR0FBckYsRUFBeUYsR0FBekYsRUFBNkYsR0FBN0YsRUFBaUcsR0FBakcsRUFBcUcsR0FBckcsQ0FBZDtBQUNBLFFBQUlDLGVBQWUsRUFBbkI7QUFDQSxTQUFJLElBQUluQyxJQUFJLENBQVosRUFBZUEsSUFBSSxDQUFuQixFQUFzQkEsS0FBRyxDQUF6QixFQUE0QjtBQUMzQixTQUFJb0MsTUFBTUYsUUFBUUcsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCTCxRQUFRekosTUFBbkMsQ0FBUixDQUFWO0FBQ0EsU0FBRzRKLEtBQUtFLE1BQUwsS0FBZ0IsS0FBbkIsRUFBMEJILE1BQU1BLElBQUlsSCxXQUFKLEVBQU4sQ0FGQyxDQUV3QjtBQUNuRGlILGtCQUFhcEksSUFBYixDQUFrQnFJLEdBQWxCO0FBQ0E7QUFDRCxXQUFPRCxhQUFhNUksSUFBYixDQUFrQixFQUFsQixDQUFQO0FBQ0E7QUEvSHdCOztBQUFBO0FBQUE7O0FBa0kxQixRQUFPLElBQUlaLE1BQUosRUFBUDtBQUNBLEM7O0FBdklEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBOzs7OztrQkFFZTtBQUNkNkosV0FEYyxzQkFDSHBLLElBREcsRUFDRztBQUFFO0FBQ2xCQSxTQUFPQSxLQUFLRyxLQUFMLENBQVdILEtBQUtJLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBbkMsRUFBc0NKLEtBQUtLLE1BQTNDLEVBQW1EbUMsT0FBbkQsQ0FBMkQsTUFBM0QsRUFBbUUsR0FBbkUsQ0FBUDtBQUNBLE1BQUk2SCxVQUFVLGFBQWFYLElBQWIsQ0FBa0IxSixJQUFsQixDQUFkO0FBQ0EsTUFBRyxDQUFDcUssT0FBSixFQUFhLE9BQU8sS0FBUDtBQUNiLFNBQU8sRUFBQ3pELGFBQWF5RCxRQUFRLENBQVIsQ0FBZCxFQUEwQnBGLE1BQU0sSUFBaEMsRUFBUDtBQUNBLEVBTmE7QUFPZHFGLG1CQVBjLDhCQU9LdEssSUFQTCxFQU9XO0FBQUU7QUFDMUJBLFNBQU9BLEtBQUtHLEtBQUwsQ0FBV0gsS0FBS0ksV0FBTCxDQUFpQixHQUFqQixJQUF3QixDQUFuQyxFQUFzQ0osS0FBS0ssTUFBM0MsRUFBbURtQyxPQUFuRCxDQUEyRCxNQUEzRCxFQUFtRSxHQUFuRSxDQUFQO0FBQ0EsTUFBSTZILFVBQVUsYUFBYVgsSUFBYixDQUFrQjFKLElBQWxCLENBQWQ7QUFDQSxNQUFHLENBQUNxSyxPQUFKLEVBQWEsT0FBTyxLQUFQO0FBQ2JBLFlBQVVBLFFBQVEsQ0FBUixDQUFWO0FBQ0EsU0FBTyxFQUFDekQsYUFBYXlELE9BQWQsRUFBdUJwRixNQUFNLElBQTdCLEVBQVA7QUFDQSxFQWJhO0FBY2RzRixRQWRjLG1CQWNOdkssSUFkTSxFQWNBO0FBQ2JBLFNBQU9BLEtBQUtHLEtBQUwsQ0FBV0gsS0FBS0ksV0FBTCxDQUFpQixHQUFqQixJQUF3QixDQUFuQyxFQUFzQ0osS0FBS0ssTUFBM0MsRUFBbURtQyxPQUFuRCxDQUEyRCxNQUEzRCxFQUFtRSxHQUFuRSxDQUFQO0FBQ0EsTUFBSXdDLE9BQU8sZ0JBQWdCMEUsSUFBaEIsQ0FBcUIxSixJQUFyQixDQUFYO0FBQ0EsTUFBRyxDQUFDZ0YsSUFBSixFQUFVLE9BQU8sS0FBUDtBQUNWQSxTQUFPaEYsS0FBS0csS0FBTCxDQUFXLENBQVgsRUFBYzZFLEtBQUssT0FBTCxDQUFkLEVBQTZCeEMsT0FBN0IsQ0FBcUMsS0FBckMsRUFBNEMsR0FBNUMsRUFBaURtRCxJQUFqRCxFQUFQO0FBQ0EsU0FBTyxFQUFDWCxVQUFELEVBQU9DLE1BQU0sT0FBYixFQUFQO0FBQ0E7QUFwQmEsQzs7Ozs7O0FDRmYsa0M7Ozs7Ozs7QUNBQTs7Ozs7O2tCQUllLFVBQVVqRixJQUFWLEVBQWdCOztBQUU5QjtBQUNBLEtBQUl3SyxjQUFjeEssS0FBS3dDLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLE1BQXZCLENBQWxCO0FBQ0EsY0FBR2lJLFVBQUgsQ0FBY3pLLElBQWQsRUFBb0J3SyxXQUFwQjtBQUNBLEtBQUlFLFVBQVUsYUFBR0MsWUFBSCxDQUFnQkgsV0FBaEIsRUFBNkIsT0FBN0IsRUFDWmhJLE9BRFksQ0FDSixlQURJLEVBQ2EsRUFEYixFQUVaQSxPQUZZLENBRUosZ0JBRkksRUFFYyxFQUZkLEVBR1pBLE9BSFksQ0FHSiwyQkFISSxFQUd5QixFQUh6QixDQUFkO0FBSUEsY0FBRzlCLFVBQUgsQ0FBYzhKLFdBQWQ7QUFDQSxjQUFHSSxhQUFILENBQWlCNUssSUFBakIsRUFBdUIwSyxPQUF2QixFQUFnQyxPQUFoQztBQUVBLEM7O0FBZEQ7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7O2tCQUllLFVBQVVuSyxNQUFWLEVBQWtCOztBQUVoQztBQUNBLFVBQVNzSyxnQkFBVCxPQUFzRDtBQUFBLE1BQTNCNUssUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJ1SCxTQUFpQixRQUFqQkEsU0FBaUI7QUFBQSxNQUFOQyxHQUFNLFFBQU5BLEdBQU07O0FBQ3JEeEgsY0FBWXVILFlBQVksR0FBeEI7QUFDQUEsY0FBWSxhQUFHc0QsV0FBSCxDQUFlN0ssUUFBZixDQUFaO0FBQ0F3SCxRQUFNbEgsT0FBT3dLLGtCQUFQLENBQTBCOUssUUFBMUIsRUFBb0N1SCxTQUFwQyxFQUErQ0MsR0FBL0MsQ0FBTixDQUhxRCxDQUdNO0FBQzNELE9BQUksSUFBSUcsSUFBSSxDQUFaLEVBQWVBLElBQUlKLFVBQVVuSCxNQUE3QixFQUFxQ3VILEtBQUcsQ0FBeEMsRUFBMkM7QUFDMUMsT0FBRyxDQUFDckgsT0FBT21HLEtBQVAsQ0FBYXpHLFdBQVd1SCxVQUFVSSxDQUFWLENBQXhCLENBQUosRUFBMkM7QUFDM0NpRCxvQkFBaUIsRUFBQzVLLGtCQUFELEVBQVcsYUFBYXVILFVBQVVJLENBQVYsQ0FBeEIsRUFBc0NILFFBQXRDLEVBQWpCO0FBQ0E7QUFDRCxTQUFPQSxHQUFQO0FBQ0E7O0FBWitCLEtBYzFCdUQsTUFkMEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7O0FBZ0IvQjtBQWhCK0IsNkJBaUJyQi9LLFFBakJxQixFQWlCWDtBQUNuQixRQUFJb0QsUUFBUSxFQUFaO0FBQ0EsaUJBQUd5SCxXQUFILENBQWU3SyxRQUFmLEVBQXlCcUUsR0FBekIsQ0FBNkIsZ0JBQVE7QUFDcENqQixXQUFNMUIsSUFBTixDQUFXMUIsV0FBV0QsSUFBdEI7QUFDQSxTQUFHLENBQUNPLE9BQU9tRyxLQUFQLENBQWF6RyxXQUFXRCxJQUF4QixDQUFKLEVBQW1DO0FBQ25DcUQsMENBQVlBLEtBQVosc0JBQXNCd0gsaUJBQWlCLEVBQUM1SyxrQkFBRCxFQUFXdUgsV0FBV3hILElBQXRCLEVBQTRCeUgsS0FBSyxFQUFqQyxFQUFqQixDQUF0QjtBQUNBLEtBSkQ7QUFLQSxXQUFPcEUsS0FBUDtBQUNBO0FBekI4Qjs7QUFBQTtBQUFBOztBQTZCaEMsUUFBTyxJQUFJMkgsTUFBSixFQUFQO0FBRUEsQzs7QUFqQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQ0RlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVSQyxRQUZRLEdBRUYsR0FGRTtBQUlSQyxjQUpRLEdBSUk7QUFDakIsY0FDQyxxRkFDU0QsR0FEVCwyRUFFV0EsR0FGWCxvRUFHU0EsR0FIVCwyRkFJR0EsR0FKSCxtR0FLR0EsR0FMSCxHQUtTQSxHQUxULGtDQU1HQSxHQU5ILGdHQU9HQSxHQVBILEdBT1NBLEdBUFQsNEZBUUdBLEdBUkgsR0FRU0EsR0FSVCw0RUFTR0EsR0FUSCxHQVNTQSxHQVRULHFFQVVHQSxHQVZILGtGQVdHQSxHQVhILEdBV1NBLEdBWFQsZ0RBWVNBLEdBWlQ7QUFGZ0IsTUFKSjtBQXFCUi9ILFNBckJRLEdBcUJEaUksUUFBUUMsSUFBUixDQUFhakwsS0FBYixDQUFtQixDQUFuQixFQUFzQmdMLFFBQVFDLElBQVIsQ0FBYS9LLE1BQW5DLENBckJDOztBQUFBLFdBdUJWLENBQUM2QyxLQUFLN0MsTUFBTixJQUFnQjZDLEtBQUssQ0FBTCxNQUFZLFFBQTVCLElBQXdDQSxLQUFLN0MsTUFBTCxHQUFjLENBdkI1QztBQUFBO0FBQUE7QUFBQTs7QUF1QmlEeUIsYUFBUUMsR0FBUixDQUFZbUosVUFBVUcsSUFBdEIsRUF2QmpELGlDQXVCcUYsS0F2QnJGOztBQUFBOztBQXlCZDtBQUNJbEksU0ExQlUsR0EwQkhELEtBQUssQ0FBTCxFQUFRQSxLQUFLN0MsTUFBTCxHQUFjLENBQXRCLE1BQTZCLEdBQTdCLEdBQW1DNkMsS0FBSyxDQUFMLElBQVUsR0FBN0MsR0FBbURBLEtBQUssQ0FBTCxDQTFCaEQ7O0FBMkJkQyxZQUFPQSxLQUFLWCxPQUFMLENBQWEsS0FBYixFQUFvQixHQUFwQixDQUFQOztBQUVBO0FBQ0lzQixXQTlCVSxHQThCRCxLQTlCQztBQStCVk8sU0EvQlUsR0ErQkgsaUJBL0JHOzs7QUFpQ2RuQixVQUFLc0MsT0FBTCxDQUFhLGVBQU87QUFBRTtBQUNyQixVQUFJLE9BQU8vRSxJQUFQLENBQVk2SyxHQUFaLENBQUosRUFBc0JqSCxPQUFPaUgsR0FBUDtBQUN0QixVQUFJLE1BQU03SyxJQUFOLENBQVc2SyxHQUFYLENBQUosRUFBcUJBLE1BQU1BLElBQUluTCxLQUFKLENBQVVtTCxJQUFJMUYsT0FBSixDQUFZLEdBQVosQ0FBVixFQUE0QjBGLElBQUlqTCxNQUFoQyxDQUFOO0FBQ3JCLE1BSEQ7O0FBakNjLFdBc0NWZ0UsU0FBUyxpQkF0Q0M7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0NBdUNOLEVBQUUsUUFBUSxDQUFWLEVBQWFsQixVQUFiLEVBQW1CVyxjQUFuQixFQXZDTTs7QUFBQTtBQUFBLFdBd0NITyxTQUFTLGdCQXhDTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQ0F5Q04sRUFBRSxRQUFRLENBQVYsRUFBYWxCLFVBQWIsRUFBbUJXLGNBQW5CLEVBekNNOztBQUFBO0FBQUEsc0NBMkNOLEVBQUUsUUFBUSxDQUFWLEVBQWFYLFVBQWIsRUFBbUJXLGNBQW5CLEVBM0NNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoib3JnYW5pemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YmRkYTdkNDgwMjljYjA2NjA4YSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbi8vQ3VzdG9tIEZ1bmN0aW9uc1xyXG5pbXBvcnQgSGVscGVyRnVuY3MgZnJvbSBcIi4vaGVscGVyXCI7XHJcbmltcG9ydCBmaXhTdWJzIGZyb20gXCIuL2ZpeFN1YnNcIjtcclxuaW1wb3J0IEdldEZpbGVzRnVuY3MgZnJvbSBcIi4vZ2V0RmlsZXNcIjtcclxuaW1wb3J0IHBhcnNlQXJncyBmcm9tIFwiLi9wYXJzZUFyZ3NcIjtcclxuXHJcbmNvbnN0IEhlbHBlciA9IEhlbHBlckZ1bmNzKCk7XHJcbmNvbnN0IEdldEZpbGVzID0gR2V0RmlsZXNGdW5jcyhIZWxwZXIpO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgYXJncyA9IGF3YWl0IHBhcnNlQXJncygpO1xyXG5cdFx0aWYgKCFhcmdzKSByZXR1cm47XHJcblx0XHRsZXQgYmFzZVBhdGggPSBhcmdzLnBhdGg7XHJcblx0XHRjb25zb2xlLnRpbWUoXCJJdCB0b29rXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coYE9yZ2FuaXppbmcgJHtiYXNlUGF0aH1gKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiUmVhZGluZyBGaWxlcy4uLlwiKTtcclxuXHRcdGxldCBmaWxlcyA9IEdldEZpbGVzLnJlYWRGaWxlcyhiYXNlUGF0aCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbHRlcmluZyBGaWxlcyBpbnRvIHZpZGVvLCBkaXJlY3RvcmllcyBhbmQgb3RoZXIgZmlsZXNcIik7XHJcblx0XHRsZXQge2RpcnMsIHZpZGVvLCBvdGhlcn0gPSBmaWx0ZXJGaWxlcyhmaWxlcyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbHRlcmluZyBtb3ZpZXMgYW5kIHR2IHNob3dzIGZpbGVzXCIpO1xyXG5cdFx0bGV0IFtzaG93cywgbW92aWVzXSA9IGZpbHRlclNob3dzQW5kTW92aWVzKHZpZGVvKTtcclxuXHRcdGxldCBbc2hvd3NEYXRhLCBwb3N0ZXJzLCBtb3ZpZXNEYXRhXSA9IFt7fSwge30sIHt9XTtcclxuXHRcdGlmIChhcmdzLmFwaUtleSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgc2hvd3MgYW5kIG1vdmllcyBkYXRhIGZyb20gT21kYkFQSS5jb21cIik7XHJcblx0XHRcdFtzaG93c0RhdGEsIHBvc3RlcnMsIG1vdmllc0RhdGFdID0gYXdhaXQgYXBpU2hvd3NBbmRNb3ZpZXMoW3Nob3dzLCBtb3ZpZXNdKTtcclxuXHRcdFx0c2hvd3MgPSBIZWxwZXIucmVwbGFjZU5hbWVXaXRoQXBpTmFtZSh7XCJzaG93c0FuZE1vdmllc1wiOiBbc2hvd3MsIG1vdmllc10sIHNob3dzRGF0YX0pO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJNYWtpbmcgbmV3IGZvbGRlcnMgZm9yIG1vdmllcyBhbmQgdHYgc2hvd3NcIik7XHJcblx0XHRiYXNlUGF0aCArPSBIZWxwZXIuZ2VuZXJhdGVSYW5kb21Gb2xkZXJOYW1lKCk7XHJcblx0XHRhd2FpdCBtYWtlU2hvd0FuZE1vdmllc0ZvbGRlcnMoe2Jhc2VQYXRoLCBzaG93cywgcG9zdGVycywgXCJtb3ZpZXNcIjogbW92aWVzRGF0YS5sZW5ndGggPyBtb3ZpZXNEYXRhIDogbW92aWVzfSk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbmRpbmcgbmV3IG5hbWVzIGZvciBtb3ZpZXMgYW5kIHR2IHNob3dzXCIpO1xyXG5cdFx0bGV0IG5ld05hbWVzID0gZmluZE5ld05hbWVzRm9yRmlsZXMoe3ZpZGVvLCBzaG93cywgc2hvd3NEYXRhLCBtb3ZpZXMsIG1vdmllc0RhdGF9KTtcclxuXHRcdGlmKGFyZ3MubW9kZSA9PT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNyZWF0aW5nIEhhcmRsaW5rc1wiKTtcclxuXHRcdFx0bmV3TmFtZXMubWFwKCh7b2xkRmlsZSwgbmV3RmlsZX0pID0+IGZzLmxpbmsob2xkRmlsZSwgYmFzZVBhdGggKyBuZXdGaWxlLCBlcnIgPT4gZXJyID8gY29uc29sZS5sb2coZXJyKTogXCJcIikpO1xyXG5cdFx0fSBlbHNlIGlmKGFyZ3MubW9kZSA9PT0gMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNyZWF0aW5nIFN5bWxpbmtzXCIpO1xyXG5cdFx0XHRuZXdOYW1lcy5tYXAoKHtvbGRGaWxlLCBuZXdGaWxlfSkgPT4gZnMuc3ltbGluayhvbGRGaWxlLCBiYXNlUGF0aCArIG5ld0ZpbGUsIGVyciA9PiBlcnIgPyBjb25zb2xlLmxvZyhlcnIpOiBcIlwiKSk7XHJcblx0XHR9IGVsc2UgaWYoYXJncy5tb2RlID09PSAyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVuYW1pbmcgRmlsZXNcIik7XHJcblx0XHRcdG5ld05hbWVzLm1hcCgoe29sZEZpbGUsIG5ld0ZpbGV9KSA9PiBmcy5yZW5hbWUob2xkRmlsZSwgYmFzZVBhdGggKyBuZXdGaWxlLCBlcnIgPT4gZXJyID8gY29uc29sZS5sb2coZXJyKTogXCJcIikpO1xyXG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChvdGhlci5tYXAoYXN5bmMgZmlsZSA9PiBhd2FpdCB3aGF0VG9Eb1dpdGhGaWxlKGZpbGUsIGJhc2VQYXRoKSkpOyAvL0l0IHdpbGwgZGVhbCB3aXRoIGFsbCB0aGUgc3J0LCBmYWxzZSBwb3NpdGl2ZXMgaW4gbW92aWVzLCBhbmQgdHYgc2hvd3MgYW5kIG90aGVyIGZpbGVzXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgdW5lY2Nlc2FyeSBmaWxlc1wiKTtcclxuXHRcdFx0cmVtb3ZlRGlycyhkaXJzKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiWW91ciBvcmdhbml6ZWQgZmlsZXMgYXJlIGluIC0gXCIgKyBiYXNlUGF0aCk7XHJcblx0XHRjb25zb2xlLnRpbWVFbmQoXCJJdCB0b29rXCIpO1xyXG5cdH0gY2F0Y2goZSkgeyBjb25zb2xlLmxvZyhcIk9yZ2FuaXplIFwiICsgbmV3IEVycm9yKGUpKTsgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZmluZE5ld05hbWVzRm9yRmlsZXMoe3ZpZGVvLCBzaG93cywgc2hvd3NEYXRhLCBtb3ZpZXMsIG1vdmllc0RhdGF9KSB7XHJcblx0bGV0IG5hbWVzID0gW107XHJcblx0dmlkZW8ubWFwKCh7ZmlsZSwgbmFtZX0pID0+IGZpbGUudHlwZSA9PT0gXCJtb3ZpZVwiID8gbmFtZXMucHVzaChmaW5kTmV3TmFtZUZvck1vdmllKHtmaWxlLCBuYW1lLCBtb3ZpZXNEYXRhLCBtb3ZpZXN9KSkgOiBcIlwiKTtcclxuXHRPYmplY3Qua2V5cyhzaG93cykubWFwKG5hbWUgPT4gbmFtZXMgPSBbLi4ubmFtZXMsIC4uLmZpbmROZXdOYW1lRm9yU2hvdyh7bmFtZSwgZmlsZXM6IHNob3dzW25hbWVdLmZpbGVzLCBzaG93c0RhdGF9KV0pO1xyXG5cdHJldHVybiBuYW1lcy5maWx0ZXIoKHtuZXdGaWxlfSkgPT4gbmV3RmlsZSk7IC8vTm8gQVBJIE1hdGNoIGJ1dCBwYXR0ZXJuIG1hdGNoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmROZXdOYW1lRm9yU2hvdyh7bmFtZSwgZmlsZXMsIHNob3dzRGF0YX0pIHtcclxuXHRsZXQgbmV3RmlsZXMgPSBbXTtcclxuXHRmaWxlcy5tYXAoKHtmaWxlLCBlcGlzb2RlTnVtLCBzZWFzb259KSA9PiB7XHJcblx0XHRsZXQgbmV3RmlsZSA9IHtvbGRGaWxlOiBmaWxlfTtcclxuXHRcdGxldCBleHQgPSBIZWxwZXIuZ2V0RXh0KGZpbGUpO1xyXG5cdFx0aWYoZXh0ID09PSBcIi5zcnRcIikgZml4U3VicyhmaWxlKTtcclxuXHRcdGxldCB0aXRsZSA9IEhlbHBlci5nZXRFcGlzb2RlVGl0bGUoe25hbWUsIGVwaXNvZGVOdW0sIHNlYXNvbiwgc2hvd3NEYXRhfSk7XHJcblx0XHRlcGlzb2RlTnVtID0gZXBpc29kZU51bSA8IDEwID8gXCIwXCIgKyBlcGlzb2RlTnVtIDogZXBpc29kZU51bTtcclxuXHRcdGxldCBiYXNlTmFtZSA9IGAvVHYgU2hvd3MvJHtuYW1lfS9TZWFzb24gJHtzZWFzb259LyR7bmFtZX0gUyR7c2Vhc29uIDwgMTAgPyBcIjBcIiArIHNlYXNvbiA6IHNlYXNvbn1FJHtlcGlzb2RlTnVtfWA7XHJcblx0XHR0aXRsZSA/IG5ld0ZpbGVbXCJuZXdGaWxlXCJdID0gYCR7YmFzZU5hbWV9IC0gJHt0aXRsZX0ke2V4dH1gIDpcclxuXHRcdFx0bmV3RmlsZVtcIm5ld0ZpbGVcIl0gPSBiYXNlTmFtZSArIGV4dDtcclxuXHRcdG5ld0ZpbGVzLnB1c2gobmV3RmlsZSk7XHJcblx0fSk7XHJcblx0cmV0dXJuIG5ld0ZpbGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTmV3TmFtZUZvck1vdmllKHtmaWxlLCBuYW1lLCBtb3ZpZXNEYXRhLCBtb3ZpZXN9KSB7XHJcblx0bGV0IG5ld0ZpbGUgPSB7b2xkRmlsZTogZmlsZX07XHJcblx0bGV0IGV4dCA9IEhlbHBlci5nZXRFeHQoZmlsZSk7XHJcblx0aWYoZXh0ID09PSBcIi5zcnRcIikgZml4U3VicyhmaWxlKTtcclxuXHRpZighbW92aWVzRGF0YS5sZW5ndGgpIHtcclxuXHRcdG1vdmllcy5mb3JFYWNoKG1vdmllID0+IG5ld0ZpbGVbXCJuZXdGaWxlXCJdID0gYC9Nb3ZpZXMvJHttb3ZpZX1gKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bW92aWVzRGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdGlmKG5hbWUudG9Mb3dlckNhc2UoKSAhPT0gaXRlbS5UaXRsZS50b0xvd2VyQ2FzZSgpKSByZXR1cm47XHJcblx0XHRcdGxldCB7VGl0bGUsIFllYXIsIFJ1bnRpbWUsIFJhdGluZ30gPSBpdGVtO1xyXG5cdFx0XHRuZXdGaWxlW1wibmV3RmlsZVwiXSA9IGAvTW92aWVzLyR7VGl0bGV9ICR7WWVhcn0gKCR7UnVudGltZX0pICgke1JhdGluZ30pLyR7VGl0bGV9ICR7WWVhcn0ke2V4dH1gO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXdGaWxlO1xyXG59XHJcblxyXG4vKiBNb3ZlcyBmYWxzZSBwb3NpdGl2ZXMgb2Ygc2hvd3MgYW5kIG1vdmllcyBhbmQgZGVsZXRlcyB1bmVjY2VzYXJ5IGZpbGVzICovXHJcbmFzeW5jIGZ1bmN0aW9uIHdoYXRUb0RvV2l0aEZpbGUoZmlsZSwgYmFzZVBhdGgpIHtcclxuXHRsZXQgZmlsZU5hbWUgPSBmaWxlLnNsaWNlKGZpbGUubGFzdEluZGV4T2YoXCIvXCIpICsgMSwgZmlsZS5sZW5ndGgpO1xyXG5cdGxldCBleHQgPSBIZWxwZXIuZ2V0RXh0KGZpbGUpO1xyXG5cdGlmKCEvXFwubWt2fFxcLm1wNHxcXC5zcnR8XFwuYXZpL2cudGVzdChleHQpKSB7IGZzLnVubGlua1N5bmMoZmlsZSk7IHJldHVybjsgfVxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGZzLnJlbmFtZShmaWxlLCBgJHtiYXNlUGF0aH0vTm8gTWF0Y2ggRm91bmQvJHtmaWxlTmFtZX1gLCAoKSA9PiByZXNvbHZlKCkpKTtcclxufVxyXG5cclxuXHJcbi8qIEdldHMgc2hvd3MgZGF0YSB0aHJvdWdoIE9tZGJBUEkgd2l0aCB0aGVpciBwb3N0ZXIgdXJsJ3MgKi9cclxuZnVuY3Rpb24gYXBpU2hvd3NBbmRNb3ZpZXMoW3Nob3dzLCBtb3ZpZXNdKSB7XHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdFx0bGV0IFtzaG93c0RhdGEsIHBvc3RlcnNdID0gYXdhaXQgYXBpU2hvd3Moc2hvd3MpO1xyXG5cdFx0XHRsZXQgbW92aWVzRGF0YSA9IGF3YWl0IGFwaU1vdmllcyhtb3ZpZXMpO1xyXG5cdFx0XHRyZXNvbHZlKFtzaG93c0RhdGEsIHBvc3RlcnMsIG1vdmllc0RhdGFdKTtcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2goZSkgeyBjb25zb2xlLmxvZyhcIkV4ZWN1dGUgQVBJIFwiICsgbmV3IEVycm9yKGUpKTsgfVxyXG59XHJcblxyXG4vKiBHZXRzIG1vdmllcyBEYXRhIGZvcm0gYXBpICovXHJcbmFzeW5jIGZ1bmN0aW9uIGFwaU1vdmllcyhtb3ZpZXMpIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0XHRsZXQgYXBpRGF0YSA9IFtdO1xyXG5cdFx0XHRmb3IobGV0IG1vdmllIG9mIG1vdmllcykge1xyXG5cdFx0XHRcdG1vdmllID0gbW92aWUuc3BsaXQoXCIgXCIpLmpvaW4oXCIlMjBcIik7XHJcblx0XHRcdFx0bGV0IHtUaXRsZSwgWWVhciwgUG9zdGVyLCBSdW50aW1lLCBpbWRiUmF0aW5nLCBSZXNwb25zZX0gPSBhd2FpdCBIZWxwZXIuZ2V0RGF0YShgLz90PSR7bW92aWV9YCk7XHJcblx0XHRcdFx0YXBpRGF0YS5wdXNoKHtUaXRsZSwgWWVhciwgUG9zdGVyLCBSdW50aW1lLCBSYXRpbmc6IGltZGJSYXRpbmcsIFJlc3BvbnNlfSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzb2x2ZShhcGlEYXRhLmZpbHRlcigoe1Jlc3BvbnNlfSkgPT4gUmVzcG9uc2UgPT09IFwiVHJ1ZVwiKSk7XHJcblx0XHR9KTtcclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJhcGlNb3ZpZXMgXCIpOyBjb25zb2xlLmxvZyhuZXcgRXJyb3IoZSkpOyB9XHJcblxyXG59XHJcblxyXG4vKiBHZXRzIHNob3dzIGRhdGEgZnJvbSBhcGkgKi9cclxuYXN5bmMgZnVuY3Rpb24gYXBpU2hvd3Moc2hvd3MpIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0XHRsZXQgW2FwaURhdGEsIHBvc3RlcnNdID0gW1tdLCBbXV07XHJcblx0XHRcdGZvcihsZXQgc2hvd05hbWUgb2YgT2JqZWN0LmtleXMoc2hvd3MpKSB7XHJcblx0XHRcdFx0bGV0IHtzZWFzb259ID0gc2hvd3Nbc2hvd05hbWVdO1xyXG5cdFx0XHRcdHNob3dOYW1lID0gc2hvd05hbWUucmVwbGFjZSgvW15cXHdcXHNdL2dpLCBcIlwiKS5zcGxpdChcIiBcIikuam9pbihcIiUyMFwiKTsgLy9Gb3IgYXBpXHJcblx0XHRcdFx0bGV0IGJhc2VVcmwgPSBgLz90PSR7c2hvd05hbWV9YDtcclxuXHRcdFx0XHRsZXQge1Bvc3Rlcn0gPSBhd2FpdCBIZWxwZXIuZ2V0RGF0YShiYXNlVXJsKTtcclxuXHRcdFx0XHRwb3N0ZXJzLnB1c2goe3RpdGxlOiBzaG93TmFtZSwgdXJsOiBQb3N0ZXJ9KTtcclxuXHRcdFx0XHRmb3IobGV0IGl0ZW0gb2Ygc2Vhc29uKSB7IGFwaURhdGEucHVzaChhd2FpdCBIZWxwZXIuZ2V0RGF0YShgJHtiYXNlVXJsfSZTZWFzb249JHtpdGVtfWApKTsgfVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlc29sdmUoW2FwaURhdGEuZmlsdGVyKCh7UmVzcG9uc2V9KSA9PiBSZXNwb25zZSA9PT0gXCJUcnVlXCIpLCBwb3N0ZXJzLmZpbHRlcigoe3VybCwgdGl0bGV9KSA9PiB1cmwgJiYgdGl0bGUpXSk7XHJcblx0XHR9KTtcclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJhcGlNb3ZpZXMgXCIpOyBjb25zb2xlLmxvZyhuZXcgRXJyb3IoZSkpOyB9XHJcbn1cclxuXHJcbi8qIEdldHMgc2hvdyBuYW1lcyB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgc2Vhc29uIG51bWJlcnMgKi9cclxuZnVuY3Rpb24gZmlsdGVyU2hvd3NBbmRNb3ZpZXModmlkZW8pIHtcclxuXHRsZXQgW3Nob3dzLCBtb3ZpZXNdID0gW3t9LCBbXV07XHJcblx0dmlkZW8ubWFwKCh7ZmlsZSwgdHlwZSwgZmlsZVN0YXRzLCBuYW1lfSkgPT4ge1xyXG5cdFx0aWYobmFtZSkgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFwoXFxzKlteKV0qXFwpL2csIFwiXCIpLnJlcGxhY2UoL1xcW1xccypbXlxcXV0qXFxdL2csIFwiXCIpLnJlcGxhY2UoL1xcL1xcXFwvZywgXCJcIikudHJpbSgpOyAvL1JlbW92ZXMgYnJhY2tldHMgYW5kIGV4dHJhIHdoaXRlc3BhY2VcclxuXHRcdGlmKHR5cGUgPT09IFwibW92aWVcIikgcmV0dXJuIG1vdmllcy5sZW5ndGggPyBtb3ZpZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEgPyBtb3ZpZXMucHVzaChuYW1lKSA6IFwiXCIgOiBtb3ZpZXMucHVzaChuYW1lKTtcclxuXHRcdHtcclxuXHRcdFx0bGV0IHtuYW1lLCBzZWFzb24sIGVwaXNvZGVOdW19ID0gZmlsZVN0YXRzO1xyXG5cdFx0XHRpZighbmFtZSkgcmV0dXJuO1xyXG5cdFx0XHRuYW1lID0gSGVscGVyLmNhcGl0YWxpemUobmFtZSk7XHJcblx0XHRcdGxldCBzYW1lU2hvdyA9IEhlbHBlci5zYW1lU2hvdyhzaG93cywgbmFtZSwgc2Vhc29uKTtcclxuXHRcdFx0aWYoIXNhbWVTaG93KSB7IHNob3dzW25hbWVdID0ge3NlYXNvbjogW3NlYXNvbl0sIGxlbmd0aDogMSwgZmlsZXM6IFt7ZmlsZSwgZXBpc29kZU51bSwgc2Vhc29ufV19OyByZXR1cm47IH0gLy9OZXcgc2hvdyBkZXRlY3RlZFxyXG5cdFx0XHRpZihzaG93c1tzYW1lU2hvdy5uYW1lXSAmJiBzaG93c1tzYW1lU2hvdy5uYW1lXS5oYXNPd25Qcm9wZXJ0eShcImZpbGVzXCIpKSBzaG93c1tzYW1lU2hvdy5uYW1lXS5maWxlcy5wdXNoKHtmaWxlLCBlcGlzb2RlTnVtLCBzZWFzb259KTtcclxuXHRcdFx0aWYoIXNhbWVTaG93Lm5ld1NlYXNvbikgcmV0dXJuOyAvL1NhbWUgc2hvdyBkZXRlY3RlZFxyXG5cdFx0XHRzaG93c1tzYW1lU2hvdy5uYW1lXS5zZWFzb24ucHVzaChzZWFzb24pOyAvL1NhbWUgc2hvdyBidXQgZGlmZmVyZW50IHNlYXNvblxyXG5cdFx0XHRzaG93c1tzYW1lU2hvdy5uYW1lXS5sZW5ndGggKz0gMTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRyZXR1cm4gW3Nob3dzLCBtb3ZpZXNdO1xyXG59XHJcblxyXG4vKiBSZW1vdmVzIGVtcHR5IGRpcnMgYWZ0ZXIgdGhlIHJlbmFtZSBvZiB0aGUgZmlsZXMgKi9cclxuZnVuY3Rpb24gcmVtb3ZlRGlycyhmaWxlcykge1xyXG5cdHRyeSB7XHJcblx0XHRmaWxlcy5tYXAoZmlsZSA9PiBmcy5ybWRpclN5bmMoZmlsZSkpO1xyXG5cdH0gY2F0Y2goZSkgeyBjb25zb2xlLmxvZyhcIlJlbW92ZSBEaXJzIEVycm9yOiBcIiArIG5ldyBFcnJvcihlKSk7IH1cclxufVxyXG5cclxuLyogTWFrZXMgZm9sZGVyIGZvciBzaG93cyBhbmQgbW92aWVzICovXHJcbmZ1bmN0aW9uIG1ha2VTaG93QW5kTW92aWVzRm9sZGVycyh7YmFzZVBhdGgsIHNob3dzLCBwb3N0ZXJzLCBtb3ZpZXN9KSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0ZnMubWtkaXJTeW5jKGJhc2VQYXRoKTtcclxuXHRcdFtcIlR2IFNob3dzXCIsIFwiTW92aWVzXCIsIFwiTm8gTWF0Y2ggRm91bmRcIl0ubWFwKHN0ciA9PiBmcy5ta2RpclN5bmMoYCR7YmFzZVBhdGh9LyR7c3RyfWApKTsgLy9Jbml0aWFsIEZvbGRlcnNcclxuXHRcdGF3YWl0IFByb21pc2UuYWxsKFttYWtlU2hvd3NGb2xkZXJzKHtzaG93cywgYmFzZVBhdGgsIHBvc3RlcnN9KSwgbWFrZU1vdmllc0ZvbGRlcnMobW92aWVzLCBiYXNlUGF0aCldKTtcclxuXHRcdHJlc29sdmUoKTtcclxuXHR9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKFwiTWFrZSBTaG93IEZvbGRlcnMgXCIgKyBuZXcgRXJyb3IoZSkpKTtcclxufVxyXG5cclxuLyogTWFrZXMgZm9sZGVyIGZvciB0aGUgc2hvd3Mgd2l0aDsgU2Vhc29uIGFuZCBzaG93TmFtZSAqL1xyXG5mdW5jdGlvbiBtYWtlU2hvd3NGb2xkZXJzKHtzaG93cywgcG9zdGVycywgYmFzZVBhdGh9KSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0Zm9yKGxldCBzaG93TmFtZSBvZiBPYmplY3Qua2V5cyhzaG93cykpIHtcclxuXHRcdFx0bGV0IHtzZWFzb259ID0gc2hvd3Nbc2hvd05hbWVdO1xyXG5cdFx0XHRmcy5ta2RpclN5bmMoYCR7YmFzZVBhdGh9L1R2IFNob3dzLyR7c2hvd05hbWV9YCk7XHJcblx0XHRcdGlmIChwb3N0ZXJzLmxlbmd0aCkgYXdhaXQgc2F2ZVBvc3RlcnMoe2Jhc2VQYXRoLCBzaG93TmFtZSwgcG9zdGVyc30pOyAvL0FQSSBrZXkgaXMgcHJvdmlkZWRcclxuXHRcdFx0c2Vhc29uLm1hcChzZWFzb24gPT4gZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS9UdiBTaG93cy8ke3Nob3dOYW1lfS9TZWFzb24gJHtzZWFzb259YCkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzb2x2ZSgpO1xyXG5cdH0pLmNhdGNoKGUgPT4gY29uc29sZS5sb2coXCJtYWtlU2hvd3NGb2xkZXJzIFwiICsgbmV3IEVycm9yKGUpKSk7XHJcbn1cclxuXHJcbi8qIE1ha2VzIGZvbGRlciBmb3IgdGhlIG1vdmllcyB3aXRoIG5hbWUsIHllYXIsIHJhdGluZyBhbmQgcnVudGltZSAqL1xyXG5mdW5jdGlvbiBtYWtlTW92aWVzRm9sZGVycyhtb3ZpZXMsIGJhc2VQYXRoKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0aWYobW92aWVzIGluc3RhbmNlb2YgQXJyYXkpIHsgLy9BUEkga2V5IG5vdCBwcm92aWRlZFxyXG5cdFx0XHRtb3ZpZXMuZm9yRWFjaChtb3ZpZSA9PiBmcy5ta2RpclN5bmMoYCR7YmFzZVBhdGh9L01vdmllcy8ke21vdmllfWApKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvcihsZXQgbW92aWUgb2YgbW92aWVzKSB7XHJcblx0XHRcdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhtb3ZpZSk7XHJcblx0XHRcdFx0a2V5cy5zcGxpY2UoMiwgMSk7IC8vUmVtb3ZlIFBvc3RlclxyXG5cdFx0XHRcdGtleXMuZm9yRWFjaChpdGVtID0+IG1vdmllW2l0ZW1dID0gbW92aWVbaXRlbV0ucmVwbGFjZSgvW1xcfD48XFwqOlxcP1xcXCIvXFwvXS9nLCBcIlwiKSk7XHJcblx0XHRcdFx0bGV0IHtUaXRsZSwgUmF0aW5nLCBQb3N0ZXIsIFJ1bnRpbWUsIFllYXJ9ID0gbW92aWU7XHJcblx0XHRcdFx0bGV0IGZvbGRlciA9IGAke1RpdGxlfSAke1llYXJ9ICgke1J1bnRpbWV9KSAoJHtSYXRpbmd9KWA7XHJcblx0XHRcdFx0ZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS9Nb3ZpZXMvJHtmb2xkZXJ9YCk7XHJcblx0XHRcdFx0aWYoUG9zdGVyICE9PSBcIk4vQVwiKSBhd2FpdCBIZWxwZXIuc2F2ZUltYWdlKFBvc3RlciwgYCR7YmFzZVBhdGh9L01vdmllcy8ke2ZvbGRlcn0vJHtUaXRsZX0uanBnYCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJlc29sdmUoKTtcclxuXHR9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKFwibWFrZU1vdmllc0ZvbGRlcnMgXCIgKyBuZXcgRXJyb3IoZSkpKTtcclxufVxyXG5cclxuLyogRG93bmxvYWRzIGFuZCBzYXZlIHBvc3RlcnMgKi9cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVBvc3RlcnMoe2Jhc2VQYXRoLCBwb3N0ZXJzLCBzaG93TmFtZX0pIHtcclxuXHR0cnkge1xyXG5cdFx0Zm9yKGxldCB7dGl0bGUsIHVybH0gb2YgcG9zdGVycykge1xyXG5cdFx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoLyUyMC9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR0aXRsZSA9PT0gc2hvd05hbWUucmVwbGFjZSgvXFxzL2dpLCBcIlwiKS50b0xvd2VyQ2FzZSgpID9cclxuXHRcdFx0XHRhd2FpdCBIZWxwZXIuc2F2ZUltYWdlKHVybCwgYCR7YmFzZVBhdGh9L1R2IFNob3dzLyR7c2hvd05hbWV9LyR7c2hvd05hbWV9LmpwZ2ApIDogXCJcIjtcclxuXHRcdH1cclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJzYXZlUG9zdGVycyBcIiArIG5ldyBFcnJvcihlKSk7IH1cclxufVxyXG5cclxuLypcclxuXHRGaWx0ZXJzIGZpbGVzIGludG8gdmlkZW8gZmlsZXMsIGRpcmVjdG9yaWVzIGFuZCBvdGhlciBmaWxlcy4gU29ydHMgdGhlIGRpcmVjdG9yaWVzIGZyb20gZGVlcGVzdCB0byBvdXRtb3N0LlxyXG4qL1xyXG5mdW5jdGlvbiBmaWx0ZXJGaWxlcyhmaWxlcykge1xyXG5cdGxldCBbZGlycywgdmlkZW8sIG90aGVyXSA9IFtbXSxbXSxbXV07XHJcblx0ZmlsZXMubWFwKGZpbGUgPT4ge1xyXG5cdFx0aWYoSGVscGVyLmlzRGlyKGZpbGUpKSB7IGRpcnMucHVzaChmaWxlKTsgcmV0dXJuOyB9XHJcblx0XHRsZXQge2VwaXNvZGVQYXR0ID0gbnVsbCwgdHlwZSwgbmFtZSA9IG51bGx9ID0gSGVscGVyLmlzTWF0Y2goZmlsZSk7XHJcblx0XHRpZigvU2FtcGxlL2dpLnRlc3QoZmlsZSkpIHsgb3RoZXIucHVzaChmaWxlKTsgcmV0dXJuOyB9XHJcblx0XHRsZXQgZmlsZVN0YXRzID0gdHlwZSA9PT0gXCJ0dlwiID8gSGVscGVyLmdldEZpbGVTdGF0cyh7ZmlsZSwgZXBpc29kZVBhdHR9KSA6IG51bGw7XHJcblx0XHRpZih0eXBlICYmIC9cXC5ta3Z8XFwubXA0fFxcLnNydHxcXC5hdmkvZ2kudGVzdChmaWxlKSkgdmlkZW8ucHVzaCh7ZmlsZSwgdHlwZSwgZmlsZVN0YXRzLCBuYW1lfSk7XHJcblx0XHRvdGhlci5wdXNoKGZpbGUpO1xyXG5cdH0pO1xyXG5cdHJldHVybiB7ZGlyczogZGlycy5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKSwgdmlkZW8sIG90aGVyfTsgLy9Tb3J0aW5nIGRpcnMsIHNvIHRoYXQgaXQgZGVsZXRlcyBmcm9tIGluc2lkZSBvdXRcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXR0cyBmcm9tIFwiLi9wYXR0ZXJuc1wiO1xyXG5pbXBvcnQgaHR0cHMgZnJvbSBcImh0dHBzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8qIE1hdGNoZXMgdGhlIGZvdW5kIHRpdGxlIHdpdGggdGhlIGFwaSB0aXRsZSB3b3JkIGJ5IHdvcmQgLT4gbXIgcm9ib3QgLT4gbXIsIGNoZWNrIHdpdGggYXBpIHRpdGxlIC0+IHJvYm90LCBjaGVjayB3aXRoIGFwaSB0aXRsZSAqL1xyXG5cdGZ1bmN0aW9uIGNvbXBhcmVOYW1lV2l0aEFwaShuYW1lLCBzaG93c0RhdGEpIHtcclxuXHRcdGxldCBuZXdOYW1lO1xyXG5cdFx0c2hvd3NEYXRhLmZvckVhY2goKHtUaXRsZX0pID0+IHtcclxuXHRcdFx0bGV0IG5hbWVTcGxpdCA9IG5hbWUuc3BsaXQoXCIgXCIpO1xyXG5cdFx0XHRsZXQgbWF0Y2hlcyA9IDA7XHJcblx0XHRcdG5hbWVTcGxpdC5mb3JFYWNoKGl0ZW0gPT4gbmV3IFJlZ0V4cChpdGVtLCBcImdpXCIpLnRlc3QoVGl0bGUpID8gbWF0Y2hlcyArPSAxIDogXCJcIik7XHJcblx0XHRcdGlmKG1hdGNoZXMgIT09IG5hbWVTcGxpdC5sZW5ndGgpIHJldHVybjtcclxuXHRcdFx0bmV3TmFtZSA9IFRpdGxlO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbmV3TmFtZTtcclxuXHR9XHJcblxyXG5cdGNsYXNzIEhlbHBlciB7XHJcblxyXG5cdFx0aXNEaXIoZmlsZSkgeyByZXR1cm4gZnMuc3RhdFN5bmMoZmlsZSkuaXNEaXJlY3RvcnkoKSA/IHRydWUgOiBmYWxzZTsgfVxyXG5cclxuXHRcdGRpc2VjdEFycmF5QW5kUHVzaChwYXRoLCBkZWVwZXJEaXIsIGFycikgIHtcclxuXHRcdFx0ZGVlcGVyRGlyLm1hcChpdGVtID0+IGFyci5wdXNoKHBhdGggKyBpdGVtKSk7XHJcblx0XHRcdHJldHVybiBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FwaXRhbGl6ZShuYW1lKSB7XHJcblx0XHRcdHJldHVybiBuYW1lLnNwbGl0KFwiIFwiKVxyXG5cdFx0XHRcdC5tYXAod29yZCA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEsIHdvcmQubGVuZ3RoKSlcclxuXHRcdFx0XHQuam9pbignICcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIGZpbGUgPT4gZ2V0IFNlYXNvbiBhbmQgZXBpc29kZSBwYXR0ZXJuIGFuZCBpZiBtb3ZpZXMsIGdldCBpdCdzIG5hbWUgKi9cclxuXHRcdGlzTWF0Y2goZmlsZXMpIHtcclxuXHRcdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhwYXR0cyk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSs9MSkge1xyXG5cdFx0XHRcdGxldCBvYmpGdW5jID0gcGF0dHNba2V5c1tpXV0oZmlsZXMpO1xyXG5cdFx0XHRcdGlmKCFvYmpGdW5jKSBjb250aW51ZTtcclxuXHRcdFx0XHRyZXR1cm4gb2JqRnVuYztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge3Jlc3BvbnNlOiBmYWxzZX07XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0RXh0KGZpbGUpIHsgcmV0dXJuIGZpbGUuc2xpY2UoZmlsZS5sZW5ndGggLSA0LCBmaWxlLmxlbmd0aCk7IH1cclxuXHJcblx0XHQvKlxyXG5cdFx0XHRIZWxwcyBnZXRTaG93cyB0byBmaWd1cmUgb3V0IGlmIHRoaXMgc2hvdyBpcyBhbHJlYWR5IGZvdW5kIGJ1dCB0aGlzIGZpbGUgaXMgb2YgZGlmZmVyZW50IHNlYXNvbi5cclxuXHRcdFx0e25hbWU6IHByb3BzfSBpcyByZXR1cm5lZCBiZWNhdXNlIHRoZSBzYW1lIHNob3cgY2FuIGhhdmUgZmlsZXMgd2l0aCBkaWZmZXJlbnQgbmFtZXMgTXIgcm9ib3QgYW5kIG1yIHJvYm90XHJcblx0XHQqL1xyXG5cdFx0c2FtZVNob3coc2hvd3MsIHRpdGxlLCBzZWFzb24pIHtcclxuXHRcdFx0Zm9yKGxldCBwcm9wIGluIHNob3dzKSB7XHJcblx0XHRcdFx0aWYoIW5ldyBSZWdFeHAodGl0bGUgKyBcIiRcIiwgXCJpXCIpLnRlc3QocHJvcCkpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmKHNob3dzW3Byb3BdLnNlYXNvbi5pbmRleE9mKHNlYXNvbikgPT09IC0xKSByZXR1cm4ge25ld1NlYXNvbjogdHJ1ZSwgbmFtZTogcHJvcH07XHJcblx0XHRcdFx0cmV0dXJuIHtuZXdTZWFzb246IG51bGwsIG5hbWU6IHByb3B9OyAvL0lmIG5vdCBzYW1lIHNlYXNvbiBidXQgc2FtZSBzaG93c1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBTYXZlcyBwb3N0ZXIgKi9cclxuXHRcdHNhdmVJbWFnZSh1cmwsIG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdGxldCBmaWxlID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0obmFtZSk7XHJcblx0XHRcdFx0aHR0cHMuZ2V0KHVybCwgcmVzcG9uc2UgPT4geyByZXNwb25zZS5waXBlKGZpbGUpOyByZXNvbHZlKCk7IH0pO1xyXG5cdFx0XHR9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBHZXRzIHNob3dzIGFuZCBwb3N0ZXJzIGZyb20gb21kYmFwaSAqL1xyXG5cdFx0Z2V0RGF0YShyZXFQYXRoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdGhvc3Q6IFwid3d3Lm9tZGJhcGkuY29tXCIsXHJcblx0XHRcdFx0XHRwYXRoOiByZXFQYXRoLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aHR0cHMucmVxdWVzdChvcHRpb25zKS5vbihcInJlc3BvbnNlXCIsIHJlcyA9PiB7XHJcblx0XHRcdFx0XHRsZXQgb3V0cHV0ID0gXCJcIjtcclxuXHRcdFx0XHRcdHJlcy5zZXRFbmNvZGluZyhcInV0ZjhcIik7XHJcblx0XHRcdFx0XHRyZXMub24oXCJkYXRhXCIsIGNodW5rID0+IG91dHB1dCArPSBjaHVuayk7XHJcblx0XHRcdFx0XHRyZXMub24oXCJlbmRcIiwgKCkgPT4gcmVzb2x2ZShKU09OLnBhcnNlKG91dHB1dCkpICk7XHJcblx0XHRcdFx0XHRyZXMub24oXCJlcnJvclwiLCBlID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG5cdFx0XHRcdH0pLmVuZCgpO1xyXG5cdFx0XHR9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKFwiZ2V0RGF0YSBcIiArIG5ldyBFcnJvcihlKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vUmVwbGFjZXMgc2hvdyBhbmQgbW92aWUgbmFtZXMgZm91bmQgZnJvbSBmaWxlcyB0byB0aGUgbmFtZXMgdGhhdCB3ZXJlIGZvdW5kIGZyb20gYXBpLiBUaGlzIHNvbHZlcyB0aGUgYmFkIG5hbWVzIHRoYXQgd2VyZSBmb3VuZCBmcm9tIHRoZSBmaWxlc1xyXG5cdFx0cmVwbGFjZU5hbWVXaXRoQXBpTmFtZSh7c2hvd3NBbmRNb3ZpZXM6IFtzaG93c10sIHNob3dzRGF0YX0pIHtcclxuXHRcdFx0bGV0IG5ld1Nob3dzID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKHNob3dzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdGxldCBpc05hbWUgPSBjb21wYXJlTmFtZVdpdGhBcGkobmFtZSwgc2hvd3NEYXRhKTtcclxuXHRcdFx0XHRpc05hbWUgPyBuZXdTaG93c1tpc05hbWVdID0gc2hvd3NbbmFtZV0gOiBuZXdTaG93c1tuYW1lXSA9IHNob3dzW25hbWVdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIG5ld1Nob3dzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldEVwaXNvZGVUaXRsZSh7bmFtZSwgZXBpc29kZU51bSwgc2Vhc29uLCBzaG93c0RhdGF9KSB7XHJcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XHJcblx0XHRcdGlmICghc2hvd3NEYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblx0XHRcdHNob3dzRGF0YS5mb3JFYWNoKHNob3cgPT4ge1xyXG5cdFx0XHRcdGlmKG5hbWUgIT09IHNob3cuVGl0bGUgfHwgc2hvdy5TZWFzb24gIT09IHNlYXNvbikgcmV0dXJuO1xyXG5cdFx0XHRcdHNob3cuRXBpc29kZXMuZm9yRWFjaCgoe0VwaXNvZGUsIFRpdGxlfSkgPT4gZXBpc29kZU51bSA9PT0gRXBpc29kZSA/IHRpdGxlID0gVGl0bGUgOiBcIlwiKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB0aXRsZSA/IHRpdGxlLnJlcGxhY2UoL1teXFx3XFxzLVxcLiRdL2dpLCBcIlwiKSA6IG51bGw7IC8vUmVwYWxhY2UgaXMgZm9yIHdlaXJkIHRpdGxlcyBsaWtlIC0gSG9yc2ViYWNrIFJpZGluZ1xcTWFuIFpvbmVcclxuXHRcdH1cclxuXHJcblx0XHQvKiBPdXRwdXRzIHNlYXNvbiwgU2hvdyBuYW1lIGFuZCBlcGlzb2RlIG51bWJlciovXHJcblx0XHRnZXRGaWxlU3RhdHMoe2ZpbGUsIGVwaXNvZGVQYXR0fSkge1xyXG5cdFx0XHRmaWxlID0gZmlsZS5zbGljZShmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsIGZpbGUubGVuZ3RoKS5yZXBsYWNlKC9bLl0vZywgXCIgXCIpOyAvLyBcInBhdGgvTmV3IEdpcmwgSERUVi5MT0wgUzAyRTAxLm1wNFwiIC0+IFwiL05ldyBHaXJsIEhEVFYgTE9MIFMwMkUwMSBtcDRcIlxyXG5cdFx0XHRsZXQgaW5kZXggPSAvZS9naS5leGVjKGVwaXNvZGVQYXR0KSA/IHtwYXR0OiAvZS9naS5leGVjKGVwaXNvZGVQYXR0KVtcImluZGV4XCJdLCBtYXRjaDogXCJlXCJ9IDoge3BhdHQ6IC94L2dpLmV4ZWMoZXBpc29kZVBhdHQpW1wiaW5kZXhcIl0gLCBtYXRjaDogXCJ4XCJ9O1xyXG5cdFx0XHRsZXQgc2Vhc29uID0gaW5kZXgubWF0Y2ggPT09IFwiZVwiID8gZXBpc29kZVBhdHQuc2xpY2UoMSwgaW5kZXgucGF0dCkgOiBlcGlzb2RlUGF0dC5zbGljZSgwLCBpbmRleC5wYXR0KTtcclxuXHRcdFx0bGV0IG5hbWUgPSBmaWxlLnNsaWNlKDAsIGZpbGUuaW5kZXhPZihlcGlzb2RlUGF0dCkgLSAxKVxyXG5cdFx0XHRcdC5yZXBsYWNlKC9cXChcXHMqW14pXSpcXCkvZywgXCJcIilcclxuXHRcdFx0XHQucmVwbGFjZSgvXFxbXFxzKlteXFxdXSpcXF0vZywgXCJcIilcclxuXHRcdFx0XHQucmVwbGFjZSgvXFwvXFxcXC9nLCBcIlwiKVxyXG5cdFx0XHRcdC5yZXBsYWNlKC9bXlxcd1xcc1xcLiRdL2dpLCBcIlwiKS50cmltKCk7XHJcblx0XHRcdGxldCBlcGlzb2RlTnVtID0gZXBpc29kZVBhdHQuc2xpY2UoaW5kZXgucGF0dCArIDEsIGVwaXNvZGVQYXR0Lmxlbmd0aCk7XHJcblx0XHRcdHJldHVybiB7c2Vhc29uOiBwYXJzZUludChzZWFzb24pLCBuYW1lLCBlcGlzb2RlTnVtOiBwYXJzZUludChlcGlzb2RlTnVtKX07XHJcblx0XHR9XHJcblxyXG5cdFx0LyogR2VuZXJhdGVkIHJhbmRvbSBmb2xkZXIgbmFtZSB0byBvcmdhbml6ZSB0aGUgc2hvd3MgKi9cclxuXHRcdGdlbmVyYXRlUmFuZG9tRm9sZGVyTmFtZSgpIHtcclxuXHRcdFx0bGV0IGxldHRlcnMgPSBbXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5cdFx0XHRsZXQgcmFuZG9tU3RyaW5nID0gW107XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKz0xKSB7XHJcblx0XHRcdFx0bGV0IHJhbiA9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGgpXTtcclxuXHRcdFx0XHRpZihNYXRoLnJhbmRvbSgpIDwgMC42OTkpIHJhbiA9IHJhbi50b0xvd2VyQ2FzZSgpOyAvL1NvIHRoYXQgaXQgZ2l2ZXMgZXF1YWwgY2hhbmdlIHRvIFVwcGVyIGNhc2UgYW5kIGxvd2VyIGNhc2UgYWxwaGFiZXRzIG1heWJlIChJJ2xsIGNoZWNrIGl0IGxhdGVyKVxyXG5cdFx0XHRcdHJhbmRvbVN0cmluZy5wdXNoKHJhbik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJhbmRvbVN0cmluZy5qb2luKFwiXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBIZWxwZXIoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRzZWFzb25QYXR0KGZpbGUpIHsgLy9Gb3IgaW5zdGFuY2UgLT4gUzAyRTA1XHJcblx0XHRmaWxlID0gZmlsZS5zbGljZShmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsIGZpbGUubGVuZ3RoKS5yZXBsYWNlKC9bLl0vZywgXCIgXCIpO1xyXG5cdFx0bGV0IGVwaXNvZGUgPSAvU1xcZCtFXFxkKy9naS5leGVjKGZpbGUpO1xyXG5cdFx0aWYoIWVwaXNvZGUpIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiB7ZXBpc29kZVBhdHQ6IGVwaXNvZGVbMF0sIHR5cGU6IFwidHZcIn07XHJcblx0fSxcclxuXHRzZWFzb25YRXBpTmFtZVBhdHQoZmlsZSkgeyAvLyBGb3IgaW5zdGFuY2UgLT4gMXgwMlxyXG5cdFx0ZmlsZSA9IGZpbGUuc2xpY2UoZmlsZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxLCBmaWxlLmxlbmd0aCkucmVwbGFjZSgvWy5dL2csIFwiIFwiKTtcclxuXHRcdGxldCBlcGlzb2RlID0gL1xcZCt4XFxkXFxkL2dpLmV4ZWMoZmlsZSk7XHJcblx0XHRpZighZXBpc29kZSkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ZXBpc29kZSA9IGVwaXNvZGVbMF07XHJcblx0XHRyZXR1cm4ge2VwaXNvZGVQYXR0OiBlcGlzb2RlLCB0eXBlOiBcInR2XCJ9O1xyXG5cdH0sXHJcblx0aWZNb3ZpZShmaWxlKSB7XHJcblx0XHRmaWxlID0gZmlsZS5zbGljZShmaWxlLmxhc3RJbmRleE9mKFwiL1wiKSArIDEsIGZpbGUubGVuZ3RoKS5yZXBsYWNlKC9bLl0vZywgXCIgXCIpO1xyXG5cdFx0bGV0IG5hbWUgPSAvMjBcXGQrfDE5XFxkKy9naS5leGVjKGZpbGUpO1xyXG5cdFx0aWYoIW5hbWUpIHJldHVybiBmYWxzZTtcclxuXHRcdG5hbWUgPSBmaWxlLnNsaWNlKDAsIG5hbWVbXCJpbmRleFwiXSkucmVwbGFjZSgvXFwuL2csIFwiIFwiKS50cmltKCk7XHJcblx0XHRyZXR1cm4ge25hbWUsIHR5cGU6IFwibW92aWVcIn07XHJcblx0fVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGF0dGVybnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBzXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZmlsZSkge1xyXG5cclxuXHQvL1JlbmFtZSAuc3J0IHdpdGggLnR4dCwgcmVhZCAudHh0IGZpbGUsIG1vZGlmeSBpdCwgZGVsZXRlIC50eHQsIHdyaXRlIC5zcnQgd2l0aCBuZXcgZGF0YVxyXG5cdGxldCBmaWxlVHh0TmFtZSA9IGZpbGUucmVwbGFjZSgvXFwuc3J0L2csIFwiLnR4dFwiKTtcclxuXHRmcy5yZW5hbWVTeW5jKGZpbGUsIGZpbGVUeHROYW1lKTtcclxuXHRsZXQgc3ViRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlVHh0TmFtZSwgXCJ1dGYtOFwiKVxyXG5cdFx0LnJlcGxhY2UoL1xcKFxccypbXildKlxcKS9nLCBcIlwiKVxyXG5cdFx0LnJlcGxhY2UoL1xcW1xccypbXlxcXV0qXFxdL2csIFwiXCIpXHJcblx0XHQucmVwbGFjZSgvW15BLVphLXpcXGRcXHMhPywnJz48LjotXS9naSwgXCJcIik7XHJcblx0ZnMudW5saW5rU3luYyhmaWxlVHh0TmFtZSk7XHJcblx0ZnMud3JpdGVGaWxlU3luYyhmaWxlLCBzdWJEYXRhLCBcInV0Zi04XCIpO1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZml4U3Vicy5qcyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEhlbHBlcikge1xyXG5cclxuXHQvKiBHZXRzIGFsbCB0aGUgZmlsZXMgaW5zaWRlIHRoZSBmb2xkZXIgKi9cclxuXHRmdW5jdGlvbiB0b1RoZURlZXBlc3RGaWxlKHtiYXNlUGF0aCwgZGVlcGVyRGlyLCBhcnJ9KSB7XHJcblx0XHRiYXNlUGF0aCArPSBkZWVwZXJEaXIgKyBcIi9cIjtcclxuXHRcdGRlZXBlckRpciA9IGZzLnJlYWRkaXJTeW5jKGJhc2VQYXRoKTtcclxuXHRcdGFyciA9IEhlbHBlci5kaXNlY3RBcnJheUFuZFB1c2goYmFzZVBhdGgsIGRlZXBlckRpciwgYXJyKTsgLy9Db25jYXQgd2FzIG5vdCB3b3JraW5nIGZvciBzb21lIHJlYXNvbi4gVWdoISFcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBkZWVwZXJEaXIubGVuZ3RoOyBpKz0xKSB7XHJcblx0XHRcdGlmKCFIZWxwZXIuaXNEaXIoYmFzZVBhdGggKyBkZWVwZXJEaXJbaV0pKSBjb250aW51ZTtcclxuXHRcdFx0dG9UaGVEZWVwZXN0RmlsZSh7YmFzZVBhdGgsIFwiZGVlcGVyRGlyXCI6IGRlZXBlckRpcltpXSwgYXJyfSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXJyO1xyXG5cdH1cclxuXHJcblx0Y2xhc3MgUmVhZGVyIHtcclxuXHJcblx0XHQvKkdldCBhbGwgdGhlIGZpbGVzIGluIHRoZSBwcm92aWRlZCBwYXRoICovXHJcblx0XHRyZWFkRmlsZXMoYmFzZVBhdGgpIHtcclxuXHRcdFx0bGV0IGZpbGVzID0gW107XHJcblx0XHRcdGZzLnJlYWRkaXJTeW5jKGJhc2VQYXRoKS5tYXAoZmlsZSA9PiB7XHJcblx0XHRcdFx0ZmlsZXMucHVzaChiYXNlUGF0aCArIGZpbGUpO1xyXG5cdFx0XHRcdGlmKCFIZWxwZXIuaXNEaXIoYmFzZVBhdGggKyBmaWxlKSkgcmV0dXJuO1xyXG5cdFx0XHRcdGZpbGVzID0gWy4uLmZpbGVzLCAuLi50b1RoZURlZXBlc3RGaWxlKHtiYXNlUGF0aCwgZGVlcGVyRGlyOiBmaWxlLCBhcnI6IFtdfSldO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZpbGVzO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBuZXcgUmVhZGVyKCk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dldEZpbGVzLmpzIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Y29uc3QgdGFiID0gXCJcdFwiO1xyXG5cclxuXHRjb25zdCB1c2FnZURhdGEgPSB7XHJcblx0XHRcImhlbHBcIjpcclxuXHRcdFx0XCJcXG5Vc2FnZTogbm9kZSBvcmdhbml6ZSA8cGF0aD4gLS1hcGk9PGFwaWtleXxmYWxzZT4gLS1tb2RlPTxtb2RlPlxcblxcblwiICtcclxuXHRcdFx0YDxwYXRoPiR7dGFifUxvY2F0aW9uIGZvciB3aGVyZSB0byBsb29rIGZvciBmaWxlcyB0byBvcmdhbml6ZVxcblxcbmAgK1xyXG5cdFx0XHRgPGFwaWtleT4ke3RhYn1hcGkga2V5IGZyb20gb21iZGFwaS5jb207IERlZmF1bHRzIHRvIGZhbHNlXFxuXFxuYCArXHJcblx0XHRcdGA8bW9kZT4ke3RhYn1TcGVjaWZ5IG1vZGU6IFwic3ltbGlua1wiLCBcImhhcmRsaW5rXCIsIFwibm9saW5rXCI7IFwiaGFyZGxpbmtcIiBieSBkZWZhdWx0O1xcblxcbmAgK1xyXG5cdFx0XHRgJHt0YWJ9c3ltbGluazogSXQgY3JlYXRlcyBzaG9ydGN1dCBvZiB0aGUgZmlsZXMgd2l0aCBmb3JtYXR0ZWQgbmFtZXMgaW5zdGVhZCBvZiByZW5hbWluZ1xcbmAgK1xyXG5cdFx0XHRgJHt0YWJ9JHt0YWJ9IHRoZSBvcmlnaW5hbCBmaWxlcy5cXG5cXG5gICtcclxuXHRcdFx0YCR7dGFifWhhcmRsaW5rOiBJdCBjcmVhdGVzIG5ldyBmaWxlcyB3aXRoIGZvcm1hdHRlZCBuYW1lcyB3aXRob3V0IHRha2luZyBleHRyYSBzcGFjZS5cXG5gICtcclxuXHRcdFx0YCR7dGFifSR7dGFifSAgSWYgdGhlIG9yaWdpbmFsIGZpbGVzIGFyZSBkZWxldGVkLCBoYXJkIGxpbmtlZCBmaWxlcyB3aWxsIHRha2UgdGhlIHNwYWNlLlxcbmAgK1xyXG5cdFx0XHRgJHt0YWJ9JHt0YWJ9ICBCYXNpY2FsbHkgZHVwbGljYXRlcyBvZiBmaWxlcyB3aXRob3V0IHRha2luZyBleHRyYSBzcGFjZS5cXG5gICtcclxuXHRcdFx0YCR7dGFifSR7dGFifSAgUmVjb21tZW5kZWQgdG8gdXNlIG9uIHRvcnJlbnRzIHRoYXQgYXJlIGJlaW5nIHNlZWRlZC5cXG5cXG5gICtcclxuXHRcdFx0YCR7dGFifW5vbGluazogVGhpcyByZW5hbWVzIHRoZSBmaWxlcyBhbmQgZGVsZXRlcyB0aGUgdW5uZWNlc3NhcnkgZmlsZXMuXFxuYCArXHJcblx0XHRcdGAke3RhYn0ke3RhYn1UaGlzIHdpbGwgc3RvcCBzZWVkaW5nLlxcblxcbmAgK1xyXG5cdFx0XHRgLS1oZWxwJHt0YWJ9c2hvdyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgb3B0aW9uc2BcclxuXHR9O1xyXG5cclxuXHRjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIsIHByb2Nlc3MuYXJndi5sZW5ndGgpO1xyXG5cclxuXHRpZiAoIWFyZ3MubGVuZ3RoIHx8IGFyZ3NbMF0gPT09IFwiLS1oZWxwXCIgfHwgYXJncy5sZW5ndGggPiAzKSB7IGNvbnNvbGUubG9nKHVzYWdlRGF0YS5oZWxwKTsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vUGF0aFxyXG5cdGxldCBwYXRoID0gYXJnc1swXVthcmdzLmxlbmd0aCAtIDFdICE9PSBcIi9cIiA/IGFyZ3NbMF0gKyBcIi9cIiA6IGFyZ3NbMF07XHJcblx0cGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCBcIi9cIik7XHJcblxyXG5cdC8vRGVmYXVsdHNcclxuXHRsZXQgYXBpS2V5ID0gZmFsc2U7XHJcblx0bGV0IG1vZGUgPSBcIi0tbW9kZT1oYXJkbGlua1wiO1xyXG5cclxuXHRhcmdzLmZvckVhY2goYXJnID0+IHsgLy9QYXJzaW5nIHRoZSBtb2RlIGFuZCB0aGUgYXBpIGtleVxyXG5cdFx0aWYgKC9tb2RlLy50ZXN0KGFyZykpIG1vZGUgPSBhcmc7XHJcblx0XHRpZiAoL2FwaS8udGVzdChhcmcpKSBhcmcgPSBhcmcuc2xpY2UoYXJnLmluZGV4T2YoXCI9XCIpLCBhcmcubGVuZ3RoKTtcclxuXHR9KTtcclxuXHJcblx0aWYgKG1vZGUgPT09IFwiLS1tb2RlPWhhcmRsaW5rXCIpIHsgLy9Gb3IgdGhlIGhhcmRsaW5rXHJcblx0XHRyZXR1cm4geyBcIm1vZGVcIjogMCwgcGF0aCwgYXBpS2V5IH07XHJcblx0fSBlbHNlIGlmIChtb2RlID09PSBcIi0tbW9kZT1zeW1saW5rXCIpIHsgLy9Gb3IgdGhlIHN5bWxpbmtcclxuXHRcdHJldHVybiB7IFwibW9kZVwiOiAxLCBwYXRoLCBhcGlLZXkgfTtcclxuXHR9IGVsc2UgeyAvL0ZvciB0aGUgbm9saW5rXHJcblx0XHRyZXR1cm4geyBcIm1vZGVcIjogMiwgcGF0aCwgYXBpS2V5IH07XHJcblx0fVxyXG5cdFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXJzZUFyZ3MuanMiXSwic291cmNlUm9vdCI6IiJ9