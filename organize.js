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
	var _ref13 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(file, basePath) {
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
		return _ref13.apply(this, arguments);
	};
}();

/* Gets shows data through OmdbAPI with their poster url's */


/* Gets movies Data form api */
var apiMovies = function () {
	var _ref17 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(movies, apikey) {
		var _this3 = this;

		return _regenerator2.default.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						_context6.prev = 0;
						return _context6.abrupt("return", new Promise(function () {
							var _ref18 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve) {
								var apiData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name, _ref20, Title, Year, Poster, Runtime, imdbRating, Response;

								return _regenerator2.default.wrap(function _callee5$(_context5) {
									while (1) {
										switch (_context5.prev = _context5.next) {
											case 0:
												apiData = [];
												_iteratorNormalCompletion = true;
												_didIteratorError = false;
												_iteratorError = undefined;
												_context5.prev = 4;
												_iterator = Object.keys(movies)[Symbol.iterator]();

											case 6:
												if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
													_context5.next = 22;
													break;
												}

												name = _step.value;

												name = name.split(" ").join("%20");
												_context5.next = 11;
												return Helper.getData("/?apikey=" + apikey + "&t=" + name);

											case 11:
												_ref20 = _context5.sent;
												Title = _ref20.Title;
												Year = _ref20.Year;
												Poster = _ref20.Poster;
												Runtime = _ref20.Runtime;
												imdbRating = _ref20.imdbRating;
												Response = _ref20.Response;

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
												resolve(apiData.filter(function (_ref19) {
													var Response = _ref19.Response;
													return Response === "True";
												}));

											case 37:
											case "end":
												return _context5.stop();
										}
									}
								}, _callee5, _this3, [[4, 24, 28, 36], [29,, 31, 35]]);
							}));

							return function (_x7) {
								return _ref18.apply(this, arguments);
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

	return function apiMovies(_x5, _x6) {
		return _ref17.apply(this, arguments);
	};
}();

/* Gets shows data from api */


var apiShows = function () {
	var _ref21 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(shows, apikey) {
		var _this4 = this;

		return _regenerator2.default.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						_context8.prev = 0;
						return _context8.abrupt("return", new Promise(function () {
							var _ref22 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve) {
								var apiData, posters, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, showName, season, baseUrl, _ref25, Poster, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

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
												baseUrl = "/?apikey=" + apikey + "&t=" + showName;
												_context7.next = 13;
												return Helper.getData(baseUrl);

											case 13:
												_ref25 = _context7.sent;
												Poster = _ref25.Poster;

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
												resolve([apiData.filter(function (_ref23) {
													var Response = _ref23.Response;
													return Response === "True";
												}), posters.filter(function (_ref24) {
													var url = _ref24.url,
													    title = _ref24.title;
													return url && title;
												})]);

											case 63:
											case "end":
												return _context7.stop();
										}
									}
								}, _callee7, _this4, [[4, 50, 54, 62], [19, 33, 37, 45], [38,, 40, 44], [55,, 57, 61]]);
							}));

							return function (_x10) {
								return _ref22.apply(this, arguments);
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

	return function apiShows(_x8, _x9) {
		return _ref21.apply(this, arguments);
	};
}();

/* Gets show names with their respective season numbers */


/* Downloads and save posters */
var savePosters = function () {
	var _ref33 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref32) {
		var basePath = _ref32.basePath,
		    posters = _ref32.posters,
		    showName = _ref32.showName;

		var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _ref34, title, url;

		return _regenerator2.default.wrap(function _callee12$(_context14) {
			while (1) {
				switch (_context14.prev = _context14.next) {
					case 0:
						_context14.prev = 0;
						_iteratorNormalCompletion7 = true;
						_didIteratorError7 = false;
						_iteratorError7 = undefined;
						_context14.prev = 4;
						_iterator7 = posters[Symbol.iterator]();

					case 6:
						if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
							_context14.next = 20;
							break;
						}

						_ref34 = _step7.value;
						title = _ref34.title;
						url = _ref34.url;

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
						_iteratorNormalCompletion7 = true;
						_context14.next = 6;
						break;

					case 20:
						_context14.next = 26;
						break;

					case 22:
						_context14.prev = 22;
						_context14.t0 = _context14["catch"](4);
						_didIteratorError7 = true;
						_iteratorError7 = _context14.t0;

					case 26:
						_context14.prev = 26;
						_context14.prev = 27;

						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}

					case 29:
						_context14.prev = 29;

						if (!_didIteratorError7) {
							_context14.next = 32;
							break;
						}

						throw _iteratorError7;

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

	return function savePosters(_x14) {
		return _ref33.apply(this, arguments);
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
					return apiShowsAndMovies(shows, movies, args.apiKey);

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
					return makeShowAndMoviesFolders({ basePath: basePath, shows: shows, posters: posters, movies: movies, moviesData: moviesData });

				case 30:
					console.log("Finding new names for movies and tv shows");
					newNames = findNewNamesForFiles({ shows: shows, showsData: showsData, movies: movies, moviesData: moviesData });

					if (!(args.mode === 0)) {
						_context2.next = 38;
						break;
					}

					console.log("Creating Hardlinks");
					console.log(newNames);
					newNames.map(function (_ref4) {
						var oldFile = _ref4.oldFile,
						    newFile = _ref4.newFile;
						return _fs2.default.link(oldFile, basePath + newFile, function (err) {
							return err ? console.log(err) : "";
						});
					});
					_context2.next = 50;
					break;

				case 38:
					if (!(args.mode === 1)) {
						_context2.next = 43;
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
					_context2.next = 50;
					break;

				case 43:
					if (!(args.mode === 2)) {
						_context2.next = 50;
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
					_context2.next = 48;
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

				case 48:
					//It will deal with all the srt, false positives in movies, and tv shows and other files
					console.log("Deleting uneccesary files");
					removeDirs(dirs);

				case 50:
					console.log("Your organized files are in - " + basePath);
					console.timeEnd("It took");
					_context2.next = 57;
					break;

				case 54:
					_context2.prev = 54;
					_context2.t0 = _context2["catch"](0);
					console.log("Organize " + new Error(_context2.t0));
				case 57:
				case "end":
					return _context2.stop();
			}
		}
	}, _callee2, this, [[0, 54]]);
}))();

function findNewNamesForFiles(_ref8) {
	var shows = _ref8.shows,
	    showsData = _ref8.showsData,
	    movies = _ref8.movies,
	    moviesData = _ref8.moviesData;

	var names = [];
	Object.keys(movies).map(function (name) {
		return names.push(findNewNameForMovie({ name: name, "file": movies[name], moviesData: moviesData }));
	});
	Object.keys(shows).map(function (name) {
		return names = [].concat(_toConsumableArray(names), _toConsumableArray(findNewNameForShow({ name: name, files: shows[name].files, showsData: showsData })));
	});
	return names.filter(function (_ref9) {
		var newFile = _ref9.newFile;
		return newFile;
	}); //No API Match but pattern match
}

function findNewNameForShow(_ref10) {
	var name = _ref10.name,
	    files = _ref10.files,
	    showsData = _ref10.showsData;

	var newFiles = [];
	files.map(function (_ref11) {
		var file = _ref11.file,
		    episodeNum = _ref11.episodeNum,
		    season = _ref11.season;

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

function findNewNameForMovie(_ref12) {
	var file = _ref12.file,
	    name = _ref12.name,
	    moviesData = _ref12.moviesData;

	var newFile = { oldFile: file };
	var ext = Helper.getExt(file);
	if (ext === ".srt") (0, _fixSubs2.default)(file);
	if (!moviesData.length) {
		newFile["newFile"] = "/Movies/" + name + "/" + name + ext;return newFile;
	}
	moviesData.map(function (item) {
		if (name.toLowerCase() !== item.Title.toLowerCase()) return;
		var Title = item.Title,
		    Year = item.Year,
		    Runtime = item.Runtime,
		    Rating = item.Rating;

		newFile["newFile"] = "/Movies/" + Title + " " + Year + " (" + Runtime + ") (" + Rating + ")/" + Title + " " + Year + ext;
	});
	return newFile;
}function apiShowsAndMovies(shows, movies, apikey) {
	var _this2 = this;

	try {
		return new Promise(function () {
			var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve) {
				var _ref15, _ref16, showsData, posters, moviesData;

				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return apiShows(shows, apikey);

							case 2:
								_ref15 = _context4.sent;
								_ref16 = _slicedToArray(_ref15, 2);
								showsData = _ref16[0];
								posters = _ref16[1];
								_context4.next = 8;
								return apiMovies(movies, apikey);

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
				return _ref14.apply(this, arguments);
			};
		}());
	} catch (e) {
		console.log("Execute API " + new Error(e));
	}
}function filterShowsAndMovies(video) {
	var shows = {},
	    movies = {};

	video.map(function (_ref26) {
		var file = _ref26.file,
		    type = _ref26.type,
		    fileStats = _ref26.fileStats,
		    name = _ref26.name;

		if (name) name = name.replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/\/\\/g, "").trim(); //Removes brackets and extra whitespace
		if (type === "movie") {
			if (!name) return;
			name = Helper.capitalize(name);
			return movies[name] ? "" : movies[name] = file;
		}
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
function makeShowAndMoviesFolders(_ref27) {
	var _this5 = this;

	var basePath = _ref27.basePath,
	    shows = _ref27.shows,
	    posters = _ref27.posters,
	    movies = _ref27.movies,
	    moviesData = _ref27.moviesData;

	return new Promise(function () {
		var _ref28 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve) {
			return _regenerator2.default.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_fs2.default.mkdirSync(basePath);
							["Tv Shows", "Movies", "No Match Found"].map(function (str) {
								return _fs2.default.mkdirSync(basePath + "/" + str);
							}); //Initial Folders
							_context9.next = 4;
							return Promise.all([makeShowsFolders({ shows: shows, basePath: basePath, posters: posters }), makeMoviesFolders(movies, basePath, moviesData)]);

						case 4:
							resolve();

						case 5:
						case "end":
							return _context9.stop();
					}
				}
			}, _callee9, _this5);
		}));

		return function (_x11) {
			return _ref28.apply(this, arguments);
		};
	}()).catch(function (e) {
		return console.log("Make Show Folders " + new Error(e));
	});
}
/* Makes folder for the shows with; Season and showName */
function makeShowsFolders(_ref29) {
	var _this6 = this;

	var shows = _ref29.shows,
	    posters = _ref29.posters,
	    basePath = _ref29.basePath;

	return new Promise(function () {
		var _ref30 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee10(resolve) {
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

		return function (_x12) {
			return _ref30.apply(this, arguments);
		};
	}()).catch(function (e) {
		return console.log("makeShowsFolders " + new Error(e));
	});
}

/* Makes folder for the movies with name, year, rating and runtime */
function makeMoviesFolders(movies, basePath, moviesData) {
	var _this7 = this;

	return new Promise(function () {
		var _ref31 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee11(resolve) {
			var _loop2, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, movie, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, name;

			return _regenerator2.default.wrap(function _callee11$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							if (!moviesData.length) {
								_context13.next = 29;
								break;
							}

							_loop2 = /*#__PURE__*/_regenerator2.default.mark(function _loop2(movie) {
								var keys, Title, Rating, Poster, Runtime, Year, folder;
								return _regenerator2.default.wrap(function _loop2$(_context12) {
									while (1) {
										switch (_context12.prev = _context12.next) {
											case 0:
												keys = Object.keys(movie);

												keys.forEach(function (item) {
													return item !== "Poster" ? movie[item] = movie[item].replace(/[\|><\*:\?\"/\/]/g, "") : "";
												});
												Title = movie.Title, Rating = movie.Rating, Poster = movie.Poster, Runtime = movie.Runtime, Year = movie.Year;
												folder = Title + " " + Year + " (" + Runtime + ") (" + Rating + ")";

												_fs2.default.mkdirSync(basePath + "/Movies/" + folder);

												if (!(Poster !== "N/A")) {
													_context12.next = 8;
													break;
												}

												_context12.next = 8;
												return Helper.saveImage(Poster, basePath + "/Movies/" + folder + "/" + Title + ".jpg");

											case 8:
											case "end":
												return _context12.stop();
										}
									}
								}, _loop2, _this7);
							});
							//If api key is provided
							_iteratorNormalCompletion5 = true;
							_didIteratorError5 = false;
							_iteratorError5 = undefined;
							_context13.prev = 5;
							_iterator5 = moviesData[Symbol.iterator]();

						case 7:
							if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
								_context13.next = 13;
								break;
							}

							movie = _step5.value;
							return _context13.delegateYield(_loop2(movie), "t0", 10);

						case 10:
							_iteratorNormalCompletion5 = true;
							_context13.next = 7;
							break;

						case 13:
							_context13.next = 19;
							break;

						case 15:
							_context13.prev = 15;
							_context13.t1 = _context13["catch"](5);
							_didIteratorError5 = true;
							_iteratorError5 = _context13.t1;

						case 19:
							_context13.prev = 19;
							_context13.prev = 20;

							if (!_iteratorNormalCompletion5 && _iterator5.return) {
								_iterator5.return();
							}

						case 22:
							_context13.prev = 22;

							if (!_didIteratorError5) {
								_context13.next = 25;
								break;
							}

							throw _iteratorError5;

						case 25:
							return _context13.finish(22);

						case 26:
							return _context13.finish(19);

						case 27:
							_context13.next = 48;
							break;

						case 29:
							_iteratorNormalCompletion6 = true;
							_didIteratorError6 = false;
							_iteratorError6 = undefined;
							_context13.prev = 32;

							for (_iterator6 = Object.keys(movies)[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
								name = _step6.value;

								_fs2.default.mkdirSync(basePath + "/Movies/" + name);
							}
							_context13.next = 40;
							break;

						case 36:
							_context13.prev = 36;
							_context13.t2 = _context13["catch"](32);
							_didIteratorError6 = true;
							_iteratorError6 = _context13.t2;

						case 40:
							_context13.prev = 40;
							_context13.prev = 41;

							if (!_iteratorNormalCompletion6 && _iterator6.return) {
								_iterator6.return();
							}

						case 43:
							_context13.prev = 43;

							if (!_didIteratorError6) {
								_context13.next = 46;
								break;
							}

							throw _iteratorError6;

						case 46:
							return _context13.finish(43);

						case 47:
							return _context13.finish(40);

						case 48:
							resolve();

						case 49:
						case "end":
							return _context13.stop();
					}
				}
			}, _callee11, _this7, [[5, 15, 19, 27], [20,, 22, 26], [32, 36, 40, 48], [41,, 43, 47]]);
		}));

		return function (_x13) {
			return _ref31.apply(this, arguments);
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
						if (/api/.test(arg)) apiKey = arg.slice(arg.indexOf("=") + 1, arg.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWQ5OWVmZmQxY2YyY2MwNDJiNzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uL3NyYy9maXhTdWJzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VBcmdzLmpzIl0sIm5hbWVzIjpbImZpbGUiLCJiYXNlUGF0aCIsImZpbGVOYW1lIiwic2xpY2UiLCJsYXN0SW5kZXhPZiIsImxlbmd0aCIsImV4dCIsIkhlbHBlciIsImdldEV4dCIsInRlc3QiLCJ1bmxpbmtTeW5jIiwiUHJvbWlzZSIsInJlbmFtZSIsInJlc29sdmUiLCJ3aGF0VG9Eb1dpdGhGaWxlIiwibW92aWVzIiwiYXBpa2V5IiwiYXBpRGF0YSIsIk9iamVjdCIsImtleXMiLCJuYW1lIiwic3BsaXQiLCJqb2luIiwiZ2V0RGF0YSIsIlRpdGxlIiwiWWVhciIsIlBvc3RlciIsIlJ1bnRpbWUiLCJpbWRiUmF0aW5nIiwiUmVzcG9uc2UiLCJwdXNoIiwiUmF0aW5nIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYXBpTW92aWVzIiwic2hvd3MiLCJwb3N0ZXJzIiwic2hvd05hbWUiLCJzZWFzb24iLCJyZXBsYWNlIiwiYmFzZVVybCIsInRpdGxlIiwidXJsIiwiaXRlbSIsImFwaVNob3dzIiwidG9Mb3dlckNhc2UiLCJzYXZlSW1hZ2UiLCJzYXZlUG9zdGVycyIsIkdldEZpbGVzIiwiYXJncyIsInBhdGgiLCJ0aW1lIiwiZmlsZXMiLCJyZWFkRmlsZXMiLCJmaWx0ZXJGaWxlcyIsImRpcnMiLCJ2aWRlbyIsIm90aGVyIiwiZmlsdGVyU2hvd3NBbmRNb3ZpZXMiLCJzaG93c0RhdGEiLCJtb3ZpZXNEYXRhIiwiYXBpS2V5IiwiYXBpU2hvd3NBbmRNb3ZpZXMiLCJyZXBsYWNlTmFtZVdpdGhBcGlOYW1lIiwiZ2VuZXJhdGVSYW5kb21Gb2xkZXJOYW1lIiwibWFrZVNob3dBbmRNb3ZpZXNGb2xkZXJzIiwibmV3TmFtZXMiLCJmaW5kTmV3TmFtZXNGb3JGaWxlcyIsIm1vZGUiLCJtYXAiLCJvbGRGaWxlIiwibmV3RmlsZSIsImxpbmsiLCJlcnIiLCJzeW1saW5rIiwiYWxsIiwicmVtb3ZlRGlycyIsInRpbWVFbmQiLCJuYW1lcyIsImZpbmROZXdOYW1lRm9yTW92aWUiLCJmaW5kTmV3TmFtZUZvclNob3ciLCJuZXdGaWxlcyIsImVwaXNvZGVOdW0iLCJnZXRFcGlzb2RlVGl0bGUiLCJiYXNlTmFtZSIsImUiLCJ0eXBlIiwiZmlsZVN0YXRzIiwidHJpbSIsImNhcGl0YWxpemUiLCJzYW1lU2hvdyIsImhhc093blByb3BlcnR5IiwibmV3U2Vhc29uIiwicm1kaXJTeW5jIiwibWtkaXJTeW5jIiwic3RyIiwibWFrZVNob3dzRm9sZGVycyIsIm1ha2VNb3ZpZXNGb2xkZXJzIiwiY2F0Y2giLCJtb3ZpZSIsImZvckVhY2giLCJmb2xkZXIiLCJpc0RpciIsImlzTWF0Y2giLCJlcGlzb2RlUGF0dCIsImdldEZpbGVTdGF0cyIsInNvcnQiLCJhIiwiYiIsImNvbXBhcmVOYW1lV2l0aEFwaSIsIm5ld05hbWUiLCJuYW1lU3BsaXQiLCJtYXRjaGVzIiwiUmVnRXhwIiwic3RhdFN5bmMiLCJpc0RpcmVjdG9yeSIsImRlZXBlckRpciIsImFyciIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsImkiLCJvYmpGdW5jIiwicmVzcG9uc2UiLCJwcm9wIiwiaW5kZXhPZiIsImNyZWF0ZVdyaXRlU3RyZWFtIiwiZ2V0IiwicGlwZSIsInJlcVBhdGgiLCJvcHRpb25zIiwiaG9zdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXF1ZXN0Iiwib24iLCJvdXRwdXQiLCJyZXMiLCJzZXRFbmNvZGluZyIsImNodW5rIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJlbmQiLCJzaG93c0FuZE1vdmllcyIsIm5ld1Nob3dzIiwiaXNOYW1lIiwic2hvdyIsIlNlYXNvbiIsIkVwaXNvZGVzIiwiRXBpc29kZSIsImluZGV4IiwiZXhlYyIsInBhdHQiLCJtYXRjaCIsInBhcnNlSW50IiwibGV0dGVycyIsInJhbmRvbVN0cmluZyIsInJhbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNlYXNvblBhdHQiLCJlcGlzb2RlIiwic2Vhc29uWEVwaU5hbWVQYXR0IiwiaWZNb3ZpZSIsImZpbGVUeHROYW1lIiwicmVuYW1lU3luYyIsInN1YkRhdGEiLCJyZWFkRmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwidG9UaGVEZWVwZXN0RmlsZSIsInJlYWRkaXJTeW5jIiwiZGlzZWN0QXJyYXlBbmRQdXNoIiwiUmVhZGVyIiwidGFiIiwidXNhZ2VEYXRhIiwicHJvY2VzcyIsImFyZ3YiLCJoZWxwIiwiYXJnIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FB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VyxjQUFuQixFQXZDTTs7QUFBQTtBQUFBLFdBd0NITyxTQUFTLGdCQXhDTjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQ0F5Q04sRUFBRSxRQUFRLENBQVYsRUFBYWxCLFVBQWIsRUFBbUJXLGNBQW5CLEVBekNNOztBQUFBO0FBQUEsc0NBMkNOLEVBQUUsUUFBUSxDQUFWLEVBQWFYLFVBQWIsRUFBbUJXLGNBQW5CLEVBM0NNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoib3JnYW5pemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZDk5ZWZmZDFjZjJjYzA0MmI3MiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbi8vQ3VzdG9tIEZ1bmN0aW9uc1xyXG5pbXBvcnQgSGVscGVyRnVuY3MgZnJvbSBcIi4vaGVscGVyXCI7XHJcbmltcG9ydCBmaXhTdWJzIGZyb20gXCIuL2ZpeFN1YnNcIjtcclxuaW1wb3J0IEdldEZpbGVzRnVuY3MgZnJvbSBcIi4vZ2V0RmlsZXNcIjtcclxuaW1wb3J0IHBhcnNlQXJncyBmcm9tIFwiLi9wYXJzZUFyZ3NcIjtcclxuXHJcbmNvbnN0IEhlbHBlciA9IEhlbHBlckZ1bmNzKCk7XHJcbmNvbnN0IEdldEZpbGVzID0gR2V0RmlsZXNGdW5jcyhIZWxwZXIpO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgYXJncyA9IGF3YWl0IHBhcnNlQXJncygpO1xyXG5cdFx0aWYgKCFhcmdzKSByZXR1cm47XHJcblx0XHRsZXQgYmFzZVBhdGggPSBhcmdzLnBhdGg7XHJcblx0XHRjb25zb2xlLnRpbWUoXCJJdCB0b29rXCIpO1xyXG5cdFx0Y29uc29sZS5sb2coYE9yZ2FuaXppbmcgJHtiYXNlUGF0aH1gKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiUmVhZGluZyBGaWxlcy4uLlwiKTtcclxuXHRcdGxldCBmaWxlcyA9IEdldEZpbGVzLnJlYWRGaWxlcyhiYXNlUGF0aCk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbHRlcmluZyBGaWxlcyBpbnRvIHZpZGVvLCBkaXJlY3RvcmllcyBhbmQgb3RoZXIgZmlsZXNcIik7XHJcblx0XHRsZXQge2RpcnMsIHZpZGVvLCBvdGhlcn0gPSBmaWx0ZXJGaWxlcyhmaWxlcyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIkZpbHRlcmluZyBtb3ZpZXMgYW5kIHR2IHNob3dzIGZpbGVzXCIpO1xyXG5cdFx0bGV0IFtzaG93cywgbW92aWVzXSA9IGZpbHRlclNob3dzQW5kTW92aWVzKHZpZGVvKTtcclxuXHRcdGxldCBbc2hvd3NEYXRhLCBwb3N0ZXJzLCBtb3ZpZXNEYXRhXSA9IFt7fSwge30sIHt9XTtcclxuXHRcdGlmIChhcmdzLmFwaUtleSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkdldHRpbmcgc2hvd3MgYW5kIG1vdmllcyBkYXRhIGZyb20gT21kYkFQSS5jb21cIik7XHJcblx0XHRcdFtzaG93c0RhdGEsIHBvc3RlcnMsIG1vdmllc0RhdGFdID0gYXdhaXQgYXBpU2hvd3NBbmRNb3ZpZXMoc2hvd3MsIG1vdmllcywgYXJncy5hcGlLZXkpO1xyXG5cdFx0XHRzaG93cyA9IEhlbHBlci5yZXBsYWNlTmFtZVdpdGhBcGlOYW1lKHtcInNob3dzQW5kTW92aWVzXCI6IFtzaG93cywgbW92aWVzXSwgc2hvd3NEYXRhfSk7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhcIk1ha2luZyBuZXcgZm9sZGVycyBmb3IgbW92aWVzIGFuZCB0diBzaG93c1wiKTtcclxuXHRcdGJhc2VQYXRoICs9IEhlbHBlci5nZW5lcmF0ZVJhbmRvbUZvbGRlck5hbWUoKTtcclxuXHRcdGF3YWl0IG1ha2VTaG93QW5kTW92aWVzRm9sZGVycyh7YmFzZVBhdGgsIHNob3dzLCBwb3N0ZXJzLCBtb3ZpZXMsIG1vdmllc0RhdGF9KTtcclxuXHRcdGNvbnNvbGUubG9nKFwiRmluZGluZyBuZXcgbmFtZXMgZm9yIG1vdmllcyBhbmQgdHYgc2hvd3NcIik7XHJcblx0XHRsZXQgbmV3TmFtZXMgPSBmaW5kTmV3TmFtZXNGb3JGaWxlcyh7c2hvd3MsIHNob3dzRGF0YSwgbW92aWVzLCBtb3ZpZXNEYXRhfSk7XHJcblx0XHRpZihhcmdzLm1vZGUgPT09IDApIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJDcmVhdGluZyBIYXJkbGlua3NcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKG5ld05hbWVzKTtcclxuXHRcdFx0bmV3TmFtZXMubWFwKCh7b2xkRmlsZSwgbmV3RmlsZX0pID0+IGZzLmxpbmsob2xkRmlsZSwgYmFzZVBhdGggKyBuZXdGaWxlLCBlcnIgPT4gZXJyID8gY29uc29sZS5sb2coZXJyKTogXCJcIikpO1xyXG5cdFx0fSBlbHNlIGlmKGFyZ3MubW9kZSA9PT0gMSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkNyZWF0aW5nIFN5bWxpbmtzXCIpO1xyXG5cdFx0XHRuZXdOYW1lcy5tYXAoKHtvbGRGaWxlLCBuZXdGaWxlfSkgPT4gZnMuc3ltbGluayhvbGRGaWxlLCBiYXNlUGF0aCArIG5ld0ZpbGUsIGVyciA9PiBlcnIgPyBjb25zb2xlLmxvZyhlcnIpOiBcIlwiKSk7XHJcblx0XHR9IGVsc2UgaWYoYXJncy5tb2RlID09PSAyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVuYW1pbmcgRmlsZXNcIik7XHJcblx0XHRcdG5ld05hbWVzLm1hcCgoe29sZEZpbGUsIG5ld0ZpbGV9KSA9PiBmcy5yZW5hbWUob2xkRmlsZSwgYmFzZVBhdGggKyBuZXdGaWxlLCBlcnIgPT4gZXJyID8gY29uc29sZS5sb2coZXJyKTogXCJcIikpO1xyXG5cdFx0XHRhd2FpdCBQcm9taXNlLmFsbChvdGhlci5tYXAoYXN5bmMgZmlsZSA9PiBhd2FpdCB3aGF0VG9Eb1dpdGhGaWxlKGZpbGUsIGJhc2VQYXRoKSkpOyAvL0l0IHdpbGwgZGVhbCB3aXRoIGFsbCB0aGUgc3J0LCBmYWxzZSBwb3NpdGl2ZXMgaW4gbW92aWVzLCBhbmQgdHYgc2hvd3MgYW5kIG90aGVyIGZpbGVzXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRGVsZXRpbmcgdW5lY2Nlc2FyeSBmaWxlc1wiKTtcclxuXHRcdFx0cmVtb3ZlRGlycyhkaXJzKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiWW91ciBvcmdhbml6ZWQgZmlsZXMgYXJlIGluIC0gXCIgKyBiYXNlUGF0aCk7XHJcblx0XHRjb25zb2xlLnRpbWVFbmQoXCJJdCB0b29rXCIpO1xyXG5cdH0gY2F0Y2goZSkgeyBjb25zb2xlLmxvZyhcIk9yZ2FuaXplIFwiICsgbmV3IEVycm9yKGUpKTsgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gZmluZE5ld05hbWVzRm9yRmlsZXMoe3Nob3dzLCBzaG93c0RhdGEsIG1vdmllcywgbW92aWVzRGF0YX0pIHtcclxuXHRsZXQgbmFtZXMgPSBbXTtcclxuXHRPYmplY3Qua2V5cyhtb3ZpZXMpLm1hcChuYW1lID0+IG5hbWVzLnB1c2goZmluZE5ld05hbWVGb3JNb3ZpZSh7bmFtZSwgXCJmaWxlXCI6IG1vdmllc1tuYW1lXSwgbW92aWVzRGF0YX0pKSk7XHJcblx0T2JqZWN0LmtleXMoc2hvd3MpLm1hcChuYW1lID0+IG5hbWVzID0gWy4uLm5hbWVzLCAuLi5maW5kTmV3TmFtZUZvclNob3coe25hbWUsIGZpbGVzOiBzaG93c1tuYW1lXS5maWxlcywgc2hvd3NEYXRhfSldKTtcclxuXHRyZXR1cm4gbmFtZXMuZmlsdGVyKCh7bmV3RmlsZX0pID0+IG5ld0ZpbGUpOyAvL05vIEFQSSBNYXRjaCBidXQgcGF0dGVybiBtYXRjaFxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kTmV3TmFtZUZvclNob3coe25hbWUsIGZpbGVzLCBzaG93c0RhdGF9KSB7XHJcblx0bGV0IG5ld0ZpbGVzID0gW107XHJcblx0ZmlsZXMubWFwKCh7ZmlsZSwgZXBpc29kZU51bSwgc2Vhc29ufSkgPT4ge1xyXG5cdFx0bGV0IG5ld0ZpbGUgPSB7b2xkRmlsZTogZmlsZX07XHJcblx0XHRsZXQgZXh0ID0gSGVscGVyLmdldEV4dChmaWxlKTtcclxuXHRcdGlmKGV4dCA9PT0gXCIuc3J0XCIpIGZpeFN1YnMoZmlsZSk7XHJcblx0XHRsZXQgdGl0bGUgPSBIZWxwZXIuZ2V0RXBpc29kZVRpdGxlKHtuYW1lLCBlcGlzb2RlTnVtLCBzZWFzb24sIHNob3dzRGF0YX0pO1xyXG5cdFx0ZXBpc29kZU51bSA9IGVwaXNvZGVOdW0gPCAxMCA/IFwiMFwiICsgZXBpc29kZU51bSA6IGVwaXNvZGVOdW07XHJcblx0XHRsZXQgYmFzZU5hbWUgPSBgL1R2IFNob3dzLyR7bmFtZX0vU2Vhc29uICR7c2Vhc29ufS8ke25hbWV9IFMke3NlYXNvbiA8IDEwID8gXCIwXCIgKyBzZWFzb24gOiBzZWFzb259RSR7ZXBpc29kZU51bX1gO1xyXG5cdFx0dGl0bGUgPyBuZXdGaWxlW1wibmV3RmlsZVwiXSA9IGAke2Jhc2VOYW1lfSAtICR7dGl0bGV9JHtleHR9YCA6XHJcblx0XHRcdG5ld0ZpbGVbXCJuZXdGaWxlXCJdID0gYmFzZU5hbWUgKyBleHQ7XHJcblx0XHRuZXdGaWxlcy5wdXNoKG5ld0ZpbGUpO1xyXG5cdH0pO1xyXG5cdHJldHVybiBuZXdGaWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZE5ld05hbWVGb3JNb3ZpZSh7ZmlsZSwgbmFtZSwgbW92aWVzRGF0YX0pIHtcclxuXHRsZXQgbmV3RmlsZSA9IHtvbGRGaWxlOiBmaWxlfTtcclxuXHRsZXQgZXh0ID0gSGVscGVyLmdldEV4dChmaWxlKTtcclxuXHRpZihleHQgPT09IFwiLnNydFwiKSBmaXhTdWJzKGZpbGUpO1xyXG5cdGlmKCFtb3ZpZXNEYXRhLmxlbmd0aCkgeyBuZXdGaWxlW1wibmV3RmlsZVwiXSA9IGAvTW92aWVzLyR7bmFtZX0vJHtuYW1lfSR7ZXh0fWA7IHJldHVybiBuZXdGaWxlOyB9XHJcblx0bW92aWVzRGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRpZihuYW1lLnRvTG93ZXJDYXNlKCkgIT09IGl0ZW0uVGl0bGUudG9Mb3dlckNhc2UoKSkgcmV0dXJuO1xyXG5cdFx0bGV0IHtUaXRsZSwgWWVhciwgUnVudGltZSwgUmF0aW5nfSA9IGl0ZW07XHJcblx0XHRuZXdGaWxlW1wibmV3RmlsZVwiXSA9IGAvTW92aWVzLyR7VGl0bGV9ICR7WWVhcn0gKCR7UnVudGltZX0pICgke1JhdGluZ30pLyR7VGl0bGV9ICR7WWVhcn0ke2V4dH1gO1xyXG5cdH0pO1xyXG5cdHJldHVybiBuZXdGaWxlO1xyXG59XHJcblxyXG4vKiBNb3ZlcyBmYWxzZSBwb3NpdGl2ZXMgb2Ygc2hvd3MgYW5kIG1vdmllcyBhbmQgZGVsZXRlcyB1bmVjY2VzYXJ5IGZpbGVzICovXHJcbmFzeW5jIGZ1bmN0aW9uIHdoYXRUb0RvV2l0aEZpbGUoZmlsZSwgYmFzZVBhdGgpIHtcclxuXHRsZXQgZmlsZU5hbWUgPSBmaWxlLnNsaWNlKGZpbGUubGFzdEluZGV4T2YoXCIvXCIpICsgMSwgZmlsZS5sZW5ndGgpO1xyXG5cdGxldCBleHQgPSBIZWxwZXIuZ2V0RXh0KGZpbGUpO1xyXG5cdGlmKCEvXFwubWt2fFxcLm1wNHxcXC5zcnR8XFwuYXZpL2cudGVzdChleHQpKSB7IGZzLnVubGlua1N5bmMoZmlsZSk7IHJldHVybjsgfVxyXG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGZzLnJlbmFtZShmaWxlLCBgJHtiYXNlUGF0aH0vTm8gTWF0Y2ggRm91bmQvJHtmaWxlTmFtZX1gLCAoKSA9PiByZXNvbHZlKCkpKTtcclxufVxyXG5cclxuXHJcbi8qIEdldHMgc2hvd3MgZGF0YSB0aHJvdWdoIE9tZGJBUEkgd2l0aCB0aGVpciBwb3N0ZXIgdXJsJ3MgKi9cclxuZnVuY3Rpb24gYXBpU2hvd3NBbmRNb3ZpZXMoc2hvd3MsIG1vdmllcywgYXBpa2V5KSB7XHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdFx0bGV0IFtzaG93c0RhdGEsIHBvc3RlcnNdID0gYXdhaXQgYXBpU2hvd3Moc2hvd3MsIGFwaWtleSk7XHJcblx0XHRcdGxldCBtb3ZpZXNEYXRhID0gYXdhaXQgYXBpTW92aWVzKG1vdmllcywgYXBpa2V5KTtcclxuXHRcdFx0cmVzb2x2ZShbc2hvd3NEYXRhLCBwb3N0ZXJzLCBtb3ZpZXNEYXRhXSk7XHJcblx0XHR9KTtcclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJFeGVjdXRlIEFQSSBcIiArIG5ldyBFcnJvcihlKSk7IH1cclxufVxyXG5cclxuLyogR2V0cyBtb3ZpZXMgRGF0YSBmb3JtIGFwaSAqL1xyXG5hc3luYyBmdW5jdGlvbiBhcGlNb3ZpZXMobW92aWVzLCBhcGlrZXkpIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG5cdFx0XHRsZXQgYXBpRGF0YSA9IFtdO1xyXG5cdFx0XHRmb3IobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMobW92aWVzKSkge1xyXG5cdFx0XHRcdG5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiJTIwXCIpO1xyXG5cdFx0XHRcdGxldCB7VGl0bGUsIFllYXIsIFBvc3RlciwgUnVudGltZSwgaW1kYlJhdGluZywgUmVzcG9uc2V9ID0gYXdhaXQgSGVscGVyLmdldERhdGEoYC8/YXBpa2V5PSR7YXBpa2V5fSZ0PSR7bmFtZX1gKTtcclxuXHRcdFx0XHRhcGlEYXRhLnB1c2goe1RpdGxlLCBZZWFyLCBQb3N0ZXIsIFJ1bnRpbWUsIFJhdGluZzogaW1kYlJhdGluZywgUmVzcG9uc2V9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXNvbHZlKGFwaURhdGEuZmlsdGVyKCh7UmVzcG9uc2V9KSA9PiBSZXNwb25zZSA9PT0gXCJUcnVlXCIpKTtcclxuXHRcdH0pO1xyXG5cdH0gY2F0Y2goZSkgeyBjb25zb2xlLmxvZyhcImFwaU1vdmllcyBcIik7IGNvbnNvbGUubG9nKG5ldyBFcnJvcihlKSk7IH1cclxuXHJcbn1cclxuXHJcbi8qIEdldHMgc2hvd3MgZGF0YSBmcm9tIGFwaSAqL1xyXG5hc3luYyBmdW5jdGlvbiBhcGlTaG93cyhzaG93cywgYXBpa2V5KSB7XHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdFx0bGV0IFthcGlEYXRhLCBwb3N0ZXJzXSA9IFtbXSwgW11dO1xyXG5cdFx0XHRmb3IobGV0IHNob3dOYW1lIG9mIE9iamVjdC5rZXlzKHNob3dzKSkge1xyXG5cdFx0XHRcdGxldCB7c2Vhc29ufSA9IHNob3dzW3Nob3dOYW1lXTtcclxuXHRcdFx0XHRzaG93TmFtZSA9IHNob3dOYW1lLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgXCJcIikuc3BsaXQoXCIgXCIpLmpvaW4oXCIlMjBcIik7IC8vRm9yIGFwaVxyXG5cdFx0XHRcdGxldCBiYXNlVXJsID0gYC8/YXBpa2V5PSR7YXBpa2V5fSZ0PSR7c2hvd05hbWV9YDtcclxuXHRcdFx0XHRsZXQge1Bvc3Rlcn0gPSBhd2FpdCBIZWxwZXIuZ2V0RGF0YShiYXNlVXJsKTtcclxuXHRcdFx0XHRwb3N0ZXJzLnB1c2goe3RpdGxlOiBzaG93TmFtZSwgdXJsOiBQb3N0ZXJ9KTtcclxuXHRcdFx0XHRmb3IobGV0IGl0ZW0gb2Ygc2Vhc29uKSB7IGFwaURhdGEucHVzaChhd2FpdCBIZWxwZXIuZ2V0RGF0YShgJHtiYXNlVXJsfSZTZWFzb249JHtpdGVtfWApKTsgfVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlc29sdmUoW2FwaURhdGEuZmlsdGVyKCh7UmVzcG9uc2V9KSA9PiBSZXNwb25zZSA9PT0gXCJUcnVlXCIpLCBwb3N0ZXJzLmZpbHRlcigoe3VybCwgdGl0bGV9KSA9PiB1cmwgJiYgdGl0bGUpXSk7XHJcblx0XHR9KTtcclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJhcGlNb3ZpZXMgXCIpOyBjb25zb2xlLmxvZyhuZXcgRXJyb3IoZSkpOyB9XHJcbn1cclxuXHJcbi8qIEdldHMgc2hvdyBuYW1lcyB3aXRoIHRoZWlyIHJlc3BlY3RpdmUgc2Vhc29uIG51bWJlcnMgKi9cclxuZnVuY3Rpb24gZmlsdGVyU2hvd3NBbmRNb3ZpZXModmlkZW8pIHtcclxuXHRsZXQgW3Nob3dzLCBtb3ZpZXNdID0gW3t9LCB7fV07XHJcblx0dmlkZW8ubWFwKCh7ZmlsZSwgdHlwZSwgZmlsZVN0YXRzLCBuYW1lfSkgPT4ge1xyXG5cdFx0aWYobmFtZSkgbmFtZSA9IG5hbWUucmVwbGFjZSgvXFwoXFxzKlteKV0qXFwpL2csIFwiXCIpLnJlcGxhY2UoL1xcW1xccypbXlxcXV0qXFxdL2csIFwiXCIpLnJlcGxhY2UoL1xcL1xcXFwvZywgXCJcIikudHJpbSgpOyAvL1JlbW92ZXMgYnJhY2tldHMgYW5kIGV4dHJhIHdoaXRlc3BhY2VcclxuXHRcdGlmKHR5cGUgPT09IFwibW92aWVcIikge1xyXG5cdFx0XHRpZighbmFtZSkgcmV0dXJuO1xyXG5cdFx0XHRuYW1lID0gSGVscGVyLmNhcGl0YWxpemUobmFtZSk7XHJcblx0XHRcdHJldHVybiBtb3ZpZXNbbmFtZV0gPyBcIlwiIDogbW92aWVzW25hbWVdID0gZmlsZTsgXHJcblx0XHR9XHJcblx0XHR7XHJcblx0XHRcdGxldCB7bmFtZSwgc2Vhc29uLCBlcGlzb2RlTnVtfSA9IGZpbGVTdGF0cztcclxuXHRcdFx0aWYoIW5hbWUpIHJldHVybjtcclxuXHRcdFx0bmFtZSA9IEhlbHBlci5jYXBpdGFsaXplKG5hbWUpO1xyXG5cdFx0XHRsZXQgc2FtZVNob3cgPSBIZWxwZXIuc2FtZVNob3coc2hvd3MsIG5hbWUsIHNlYXNvbik7XHJcblx0XHRcdGlmKCFzYW1lU2hvdykgeyBzaG93c1tuYW1lXSA9IHtzZWFzb246IFtzZWFzb25dLCBsZW5ndGg6IDEsIGZpbGVzOiBbe2ZpbGUsIGVwaXNvZGVOdW0sIHNlYXNvbn1dfTsgcmV0dXJuOyB9IC8vTmV3IHNob3cgZGV0ZWN0ZWRcclxuXHRcdFx0aWYoc2hvd3Nbc2FtZVNob3cubmFtZV0gJiYgc2hvd3Nbc2FtZVNob3cubmFtZV0uaGFzT3duUHJvcGVydHkoXCJmaWxlc1wiKSkgc2hvd3Nbc2FtZVNob3cubmFtZV0uZmlsZXMucHVzaCh7ZmlsZSwgZXBpc29kZU51bSwgc2Vhc29ufSk7XHJcblx0XHRcdGlmKCFzYW1lU2hvdy5uZXdTZWFzb24pIHJldHVybjsgLy9TYW1lIHNob3cgZGV0ZWN0ZWRcclxuXHRcdFx0c2hvd3Nbc2FtZVNob3cubmFtZV0uc2Vhc29uLnB1c2goc2Vhc29uKTsgLy9TYW1lIHNob3cgYnV0IGRpZmZlcmVudCBzZWFzb25cclxuXHRcdFx0c2hvd3Nbc2FtZVNob3cubmFtZV0ubGVuZ3RoICs9IDE7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0cmV0dXJuIFtzaG93cywgbW92aWVzXTtcclxufVxyXG5cclxuLyogUmVtb3ZlcyBlbXB0eSBkaXJzIGFmdGVyIHRoZSByZW5hbWUgb2YgdGhlIGZpbGVzICovXHJcbmZ1bmN0aW9uIHJlbW92ZURpcnMoZmlsZXMpIHtcclxuXHR0cnkge1xyXG5cdFx0ZmlsZXMubWFwKGZpbGUgPT4gZnMucm1kaXJTeW5jKGZpbGUpKTtcclxuXHR9IGNhdGNoKGUpIHsgY29uc29sZS5sb2coXCJSZW1vdmUgRGlycyBFcnJvcjogXCIgKyBuZXcgRXJyb3IoZSkpOyB9XHJcbn1cclxuXHJcbi8qIE1ha2VzIGZvbGRlciBmb3Igc2hvd3MgYW5kIG1vdmllcyAqL1xyXG5mdW5jdGlvbiBtYWtlU2hvd0FuZE1vdmllc0ZvbGRlcnMoe2Jhc2VQYXRoLCBzaG93cywgcG9zdGVycywgbW92aWVzLCBtb3ZpZXNEYXRhfSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdGZzLm1rZGlyU3luYyhiYXNlUGF0aCk7XHJcblx0XHRbXCJUdiBTaG93c1wiLCBcIk1vdmllc1wiLCBcIk5vIE1hdGNoIEZvdW5kXCJdLm1hcChzdHIgPT4gZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS8ke3N0cn1gKSk7IC8vSW5pdGlhbCBGb2xkZXJzXHJcblx0XHRhd2FpdCBQcm9taXNlLmFsbChbbWFrZVNob3dzRm9sZGVycyh7c2hvd3MsIGJhc2VQYXRoLCBwb3N0ZXJzfSksIG1ha2VNb3ZpZXNGb2xkZXJzKG1vdmllcywgYmFzZVBhdGgsIG1vdmllc0RhdGEpXSk7XHJcblx0XHRyZXNvbHZlKCk7XHJcblx0fSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcIk1ha2UgU2hvdyBGb2xkZXJzIFwiICsgbmV3IEVycm9yKGUpKSk7XHJcblxyXG59XHJcbi8qIE1ha2VzIGZvbGRlciBmb3IgdGhlIHNob3dzIHdpdGg7IFNlYXNvbiBhbmQgc2hvd05hbWUgKi9cclxuZnVuY3Rpb24gbWFrZVNob3dzRm9sZGVycyh7c2hvd3MsIHBvc3RlcnMsIGJhc2VQYXRofSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdGZvcihsZXQgc2hvd05hbWUgb2YgT2JqZWN0LmtleXMoc2hvd3MpKSB7XHJcblx0XHRcdGxldCB7c2Vhc29ufSA9IHNob3dzW3Nob3dOYW1lXTtcclxuXHRcdFx0ZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS9UdiBTaG93cy8ke3Nob3dOYW1lfWApO1xyXG5cdFx0XHRpZiAocG9zdGVycy5sZW5ndGgpIGF3YWl0IHNhdmVQb3N0ZXJzKHtiYXNlUGF0aCwgc2hvd05hbWUsIHBvc3RlcnN9KTsgLy9BUEkga2V5IGlzIHByb3ZpZGVkXHJcblx0XHRcdHNlYXNvbi5tYXAoc2Vhc29uID0+IGZzLm1rZGlyU3luYyhgJHtiYXNlUGF0aH0vVHYgU2hvd3MvJHtzaG93TmFtZX0vU2Vhc29uICR7c2Vhc29ufWApKTtcclxuXHRcdH1cclxuXHRcdHJlc29sdmUoKTtcclxuXHR9KS5jYXRjaChlID0+IGNvbnNvbGUubG9nKFwibWFrZVNob3dzRm9sZGVycyBcIiArIG5ldyBFcnJvcihlKSkpO1xyXG59XHJcblxyXG4vKiBNYWtlcyBmb2xkZXIgZm9yIHRoZSBtb3ZpZXMgd2l0aCBuYW1lLCB5ZWFyLCByYXRpbmcgYW5kIHJ1bnRpbWUgKi9cclxuZnVuY3Rpb24gbWFrZU1vdmllc0ZvbGRlcnMobW92aWVzLCBiYXNlUGF0aCwgbW92aWVzRGF0YSkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuXHRcdGlmKG1vdmllc0RhdGEubGVuZ3RoKSB7IC8vSWYgYXBpIGtleSBpcyBwcm92aWRlZFxyXG5cdFx0XHRmb3IobGV0IG1vdmllIG9mIG1vdmllc0RhdGEpIHtcclxuXHRcdFx0XHRsZXQga2V5cyA9IE9iamVjdC5rZXlzKG1vdmllKTtcclxuXHRcdFx0XHRrZXlzLmZvckVhY2goaXRlbSA9PiBpdGVtICE9PSBcIlBvc3RlclwiID8gbW92aWVbaXRlbV0gPSBtb3ZpZVtpdGVtXS5yZXBsYWNlKC9bXFx8PjxcXCo6XFw/XFxcIi9cXC9dL2csIFwiXCIpIDogXCJcIik7XHJcblx0XHRcdFx0bGV0IHtUaXRsZSwgUmF0aW5nLCBQb3N0ZXIsIFJ1bnRpbWUsIFllYXJ9ID0gbW92aWU7XHJcblx0XHRcdFx0bGV0IGZvbGRlciA9IGAke1RpdGxlfSAke1llYXJ9ICgke1J1bnRpbWV9KSAoJHtSYXRpbmd9KWA7XHJcblx0XHRcdFx0ZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS9Nb3ZpZXMvJHtmb2xkZXJ9YCk7XHJcblx0XHRcdFx0aWYoUG9zdGVyICE9PSBcIk4vQVwiKSBhd2FpdCBIZWxwZXIuc2F2ZUltYWdlKFBvc3RlciwgYCR7YmFzZVBhdGh9L01vdmllcy8ke2ZvbGRlcn0vJHtUaXRsZX0uanBnYCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvcihsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyhtb3ZpZXMpKSB7XHJcblx0XHRcdFx0ZnMubWtkaXJTeW5jKGAke2Jhc2VQYXRofS9Nb3ZpZXMvJHtuYW1lfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXNvbHZlKCk7XHJcblx0fSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcIm1ha2VNb3ZpZXNGb2xkZXJzIFwiICsgbmV3IEVycm9yKGUpKSk7XHJcbn1cclxuXHJcbi8qIERvd25sb2FkcyBhbmQgc2F2ZSBwb3N0ZXJzICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVQb3N0ZXJzKHtiYXNlUGF0aCwgcG9zdGVycywgc2hvd05hbWV9KSB7XHJcblx0dHJ5IHtcclxuXHRcdGZvcihsZXQge3RpdGxlLCB1cmx9IG9mIHBvc3RlcnMpIHtcclxuXHRcdFx0dGl0bGUgPSB0aXRsZS5yZXBsYWNlKC8lMjAvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0dGl0bGUgPT09IHNob3dOYW1lLnJlcGxhY2UoL1xccy9naSwgXCJcIikudG9Mb3dlckNhc2UoKSA/XHJcblx0XHRcdFx0YXdhaXQgSGVscGVyLnNhdmVJbWFnZSh1cmwsIGAke2Jhc2VQYXRofS9UdiBTaG93cy8ke3Nob3dOYW1lfS8ke3Nob3dOYW1lfS5qcGdgKSA6IFwiXCI7XHJcblx0XHR9XHJcblx0fSBjYXRjaChlKSB7IGNvbnNvbGUubG9nKFwic2F2ZVBvc3RlcnMgXCIgKyBuZXcgRXJyb3IoZSkpOyB9XHJcbn1cclxuXHJcbi8qXHJcblx0RmlsdGVycyBmaWxlcyBpbnRvIHZpZGVvIGZpbGVzLCBkaXJlY3RvcmllcyBhbmQgb3RoZXIgZmlsZXMuIFNvcnRzIHRoZSBkaXJlY3RvcmllcyBmcm9tIGRlZXBlc3QgdG8gb3V0bW9zdC5cclxuKi9cclxuZnVuY3Rpb24gZmlsdGVyRmlsZXMoZmlsZXMpIHtcclxuXHRsZXQgW2RpcnMsIHZpZGVvLCBvdGhlcl0gPSBbW10sW10sW11dO1xyXG5cdGZpbGVzLm1hcChmaWxlID0+IHtcclxuXHRcdGlmKEhlbHBlci5pc0RpcihmaWxlKSkgeyBkaXJzLnB1c2goZmlsZSk7IHJldHVybjsgfVxyXG5cdFx0bGV0IHtlcGlzb2RlUGF0dCA9IG51bGwsIHR5cGUsIG5hbWUgPSBudWxsfSA9IEhlbHBlci5pc01hdGNoKGZpbGUpO1xyXG5cdFx0aWYoL1NhbXBsZS9naS50ZXN0KGZpbGUpKSB7IG90aGVyLnB1c2goZmlsZSk7IHJldHVybjsgfVxyXG5cdFx0bGV0IGZpbGVTdGF0cyA9IHR5cGUgPT09IFwidHZcIiA/IEhlbHBlci5nZXRGaWxlU3RhdHMoe2ZpbGUsIGVwaXNvZGVQYXR0fSkgOiBudWxsO1xyXG5cdFx0aWYodHlwZSAmJiAvXFwubWt2fFxcLm1wNHxcXC5zcnR8XFwuYXZpL2dpLnRlc3QoZmlsZSkpIHZpZGVvLnB1c2goe2ZpbGUsIHR5cGUsIGZpbGVTdGF0cywgbmFtZX0pO1xyXG5cdFx0b3RoZXIucHVzaChmaWxlKTtcclxuXHR9KTtcclxuXHRyZXR1cm4ge2RpcnM6IGRpcnMuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCksIHZpZGVvLCBvdGhlcn07IC8vU29ydGluZyBkaXJzLCBzbyB0aGF0IGl0IGRlbGV0ZXMgZnJvbSBpbnNpZGUgb3V0XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0dHMgZnJvbSBcIi4vcGF0dGVybnNcIjtcclxuaW1wb3J0IGh0dHBzIGZyb20gXCJodHRwc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvKiBNYXRjaGVzIHRoZSBmb3VuZCB0aXRsZSB3aXRoIHRoZSBhcGkgdGl0bGUgd29yZCBieSB3b3JkIC0+IG1yIHJvYm90IC0+IG1yLCBjaGVjayB3aXRoIGFwaSB0aXRsZSAtPiByb2JvdCwgY2hlY2sgd2l0aCBhcGkgdGl0bGUgKi9cclxuXHRmdW5jdGlvbiBjb21wYXJlTmFtZVdpdGhBcGkobmFtZSwgc2hvd3NEYXRhKSB7XHJcblx0XHRsZXQgbmV3TmFtZTtcclxuXHRcdHNob3dzRGF0YS5mb3JFYWNoKCh7VGl0bGV9KSA9PiB7XHJcblx0XHRcdGxldCBuYW1lU3BsaXQgPSBuYW1lLnNwbGl0KFwiIFwiKTtcclxuXHRcdFx0bGV0IG1hdGNoZXMgPSAwO1xyXG5cdFx0XHRuYW1lU3BsaXQuZm9yRWFjaChpdGVtID0+IG5ldyBSZWdFeHAoaXRlbSwgXCJnaVwiKS50ZXN0KFRpdGxlKSA/IG1hdGNoZXMgKz0gMSA6IFwiXCIpO1xyXG5cdFx0XHRpZihtYXRjaGVzICE9PSBuYW1lU3BsaXQubGVuZ3RoKSByZXR1cm47XHJcblx0XHRcdG5ld05hbWUgPSBUaXRsZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld05hbWU7XHJcblx0fVxyXG5cclxuXHRjbGFzcyBIZWxwZXIge1xyXG5cclxuXHRcdGlzRGlyKGZpbGUpIHsgcmV0dXJuIGZzLnN0YXRTeW5jKGZpbGUpLmlzRGlyZWN0b3J5KCkgPyB0cnVlIDogZmFsc2U7IH1cclxuXHJcblx0XHRkaXNlY3RBcnJheUFuZFB1c2gocGF0aCwgZGVlcGVyRGlyLCBhcnIpICB7XHJcblx0XHRcdGRlZXBlckRpci5tYXAoaXRlbSA9PiBhcnIucHVzaChwYXRoICsgaXRlbSkpO1xyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhcGl0YWxpemUobmFtZSkge1xyXG5cdFx0XHRyZXR1cm4gbmFtZS5zcGxpdChcIiBcIilcclxuXHRcdFx0XHQubWFwKHdvcmQgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxLCB3b3JkLmxlbmd0aCkpXHJcblx0XHRcdFx0LmpvaW4oJyAnKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBmaWxlID0+IGdldCBTZWFzb24gYW5kIGVwaXNvZGUgcGF0dGVybiBhbmQgaWYgbW92aWVzLCBnZXQgaXQncyBuYW1lICovXHJcblx0XHRpc01hdGNoKGZpbGVzKSB7XHJcblx0XHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMocGF0dHMpO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrPTEpIHtcclxuXHRcdFx0XHRsZXQgb2JqRnVuYyA9IHBhdHRzW2tleXNbaV1dKGZpbGVzKTtcclxuXHRcdFx0XHRpZighb2JqRnVuYykgY29udGludWU7XHJcblx0XHRcdFx0cmV0dXJuIG9iakZ1bmM7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtyZXNwb25zZTogZmFsc2V9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldEV4dChmaWxlKSB7IHJldHVybiBmaWxlLnNsaWNlKGZpbGUubGVuZ3RoIC0gNCwgZmlsZS5sZW5ndGgpOyB9XHJcblxyXG5cdFx0LypcclxuXHRcdFx0SGVscHMgZ2V0U2hvd3MgdG8gZmlndXJlIG91dCBpZiB0aGlzIHNob3cgaXMgYWxyZWFkeSBmb3VuZCBidXQgdGhpcyBmaWxlIGlzIG9mIGRpZmZlcmVudCBzZWFzb24uXHJcblx0XHRcdHtuYW1lOiBwcm9wc30gaXMgcmV0dXJuZWQgYmVjYXVzZSB0aGUgc2FtZSBzaG93IGNhbiBoYXZlIGZpbGVzIHdpdGggZGlmZmVyZW50IG5hbWVzIE1yIHJvYm90IGFuZCBtciByb2JvdFxyXG5cdFx0Ki9cclxuXHRcdHNhbWVTaG93KHNob3dzLCB0aXRsZSwgc2Vhc29uKSB7XHJcblx0XHRcdGZvcihsZXQgcHJvcCBpbiBzaG93cykge1xyXG5cdFx0XHRcdGlmKCFuZXcgUmVnRXhwKHRpdGxlICsgXCIkXCIsIFwiaVwiKS50ZXN0KHByb3ApKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZihzaG93c1twcm9wXS5zZWFzb24uaW5kZXhPZihzZWFzb24pID09PSAtMSkgcmV0dXJuIHtuZXdTZWFzb246IHRydWUsIG5hbWU6IHByb3B9O1xyXG5cdFx0XHRcdHJldHVybiB7bmV3U2Vhc29uOiBudWxsLCBuYW1lOiBwcm9wfTsgLy9JZiBub3Qgc2FtZSBzZWFzb24gYnV0IHNhbWUgc2hvd3NcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogU2F2ZXMgcG9zdGVyICovXHJcblx0XHRzYXZlSW1hZ2UodXJsLCBuYW1lKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0XHRsZXQgZmlsZSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKG5hbWUpO1xyXG5cdFx0XHRcdGh0dHBzLmdldCh1cmwsIHJlc3BvbnNlID0+IHsgcmVzcG9uc2UucGlwZShmaWxlKTsgcmVzb2x2ZSgpOyB9KTtcclxuXHRcdFx0fSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogR2V0cyBzaG93cyBhbmQgcG9zdGVycyBmcm9tIG9tZGJhcGkgKi9cclxuXHRcdGdldERhdGEocmVxUGF0aCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHRob3N0OiBcInd3dy5vbWRiYXBpLmNvbVwiLFxyXG5cdFx0XHRcdFx0cGF0aDogcmVxUGF0aCxcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGh0dHBzLnJlcXVlc3Qob3B0aW9ucykub24oXCJyZXNwb25zZVwiLCByZXMgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IG91dHB1dCA9IFwiXCI7XHJcblx0XHRcdFx0XHRyZXMuc2V0RW5jb2RpbmcoXCJ1dGY4XCIpO1xyXG5cdFx0XHRcdFx0cmVzLm9uKFwiZGF0YVwiLCBjaHVuayA9PiBvdXRwdXQgKz0gY2h1bmspO1xyXG5cdFx0XHRcdFx0cmVzLm9uKFwiZW5kXCIsICgpID0+IHJlc29sdmUoSlNPTi5wYXJzZShvdXRwdXQpKSApO1xyXG5cdFx0XHRcdFx0cmVzLm9uKFwiZXJyb3JcIiwgZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuXHRcdFx0XHR9KS5lbmQoKTtcclxuXHRcdFx0fSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhcImdldERhdGEgXCIgKyBuZXcgRXJyb3IoZSkpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL1JlcGxhY2VzIHNob3cgYW5kIG1vdmllIG5hbWVzIGZvdW5kIGZyb20gZmlsZXMgdG8gdGhlIG5hbWVzIHRoYXQgd2VyZSBmb3VuZCBmcm9tIGFwaS4gVGhpcyBzb2x2ZXMgdGhlIGJhZCBuYW1lcyB0aGF0IHdlcmUgZm91bmQgZnJvbSB0aGUgZmlsZXNcclxuXHRcdHJlcGxhY2VOYW1lV2l0aEFwaU5hbWUoe3Nob3dzQW5kTW92aWVzOiBbc2hvd3NdLCBzaG93c0RhdGF9KSB7XHJcblx0XHRcdGxldCBuZXdTaG93cyA9IHt9O1xyXG5cdFx0XHRPYmplY3Qua2V5cyhzaG93cykuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0XHRsZXQgaXNOYW1lID0gY29tcGFyZU5hbWVXaXRoQXBpKG5hbWUsIHNob3dzRGF0YSk7XHJcblx0XHRcdFx0aXNOYW1lID8gbmV3U2hvd3NbaXNOYW1lXSA9IHNob3dzW25hbWVdIDogbmV3U2hvd3NbbmFtZV0gPSBzaG93c1tuYW1lXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBuZXdTaG93cztcclxuXHRcdH1cclxuXHJcblx0XHRnZXRFcGlzb2RlVGl0bGUoe25hbWUsIGVwaXNvZGVOdW0sIHNlYXNvbiwgc2hvd3NEYXRhfSkge1xyXG5cdFx0XHRsZXQgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRpZiAoIXNob3dzRGF0YS5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cdFx0XHRzaG93c0RhdGEuZm9yRWFjaChzaG93ID0+IHtcclxuXHRcdFx0XHRpZihuYW1lICE9PSBzaG93LlRpdGxlIHx8IHNob3cuU2Vhc29uICE9PSBzZWFzb24pIHJldHVybjtcclxuXHRcdFx0XHRzaG93LkVwaXNvZGVzLmZvckVhY2goKHtFcGlzb2RlLCBUaXRsZX0pID0+IGVwaXNvZGVOdW0gPT09IEVwaXNvZGUgPyB0aXRsZSA9IFRpdGxlIDogXCJcIik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gdGl0bGUgPyB0aXRsZS5yZXBsYWNlKC9bXlxcd1xccy1cXC4kXS9naSwgXCJcIikgOiBudWxsOyAvL1JlcGFsYWNlIGlzIGZvciB3ZWlyZCB0aXRsZXMgbGlrZSAtIEhvcnNlYmFjayBSaWRpbmdcXE1hbiBab25lXHJcblx0XHR9XHJcblxyXG5cdFx0LyogT3V0cHV0cyBzZWFzb24sIFNob3cgbmFtZSBhbmQgZXBpc29kZSBudW1iZXIqL1xyXG5cdFx0Z2V0RmlsZVN0YXRzKHtmaWxlLCBlcGlzb2RlUGF0dH0pIHtcclxuXHRcdFx0ZmlsZSA9IGZpbGUuc2xpY2UoZmlsZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxLCBmaWxlLmxlbmd0aCkucmVwbGFjZSgvWy5dL2csIFwiIFwiKTsgLy8gXCJwYXRoL05ldyBHaXJsIEhEVFYuTE9MIFMwMkUwMS5tcDRcIiAtPiBcIi9OZXcgR2lybCBIRFRWIExPTCBTMDJFMDEgbXA0XCJcclxuXHRcdFx0bGV0IGluZGV4ID0gL2UvZ2kuZXhlYyhlcGlzb2RlUGF0dCkgPyB7cGF0dDogL2UvZ2kuZXhlYyhlcGlzb2RlUGF0dClbXCJpbmRleFwiXSwgbWF0Y2g6IFwiZVwifSA6IHtwYXR0OiAveC9naS5leGVjKGVwaXNvZGVQYXR0KVtcImluZGV4XCJdICwgbWF0Y2g6IFwieFwifTtcclxuXHRcdFx0bGV0IHNlYXNvbiA9IGluZGV4Lm1hdGNoID09PSBcImVcIiA/IGVwaXNvZGVQYXR0LnNsaWNlKDEsIGluZGV4LnBhdHQpIDogZXBpc29kZVBhdHQuc2xpY2UoMCwgaW5kZXgucGF0dCk7XHJcblx0XHRcdGxldCBuYW1lID0gZmlsZS5zbGljZSgwLCBmaWxlLmluZGV4T2YoZXBpc29kZVBhdHQpIC0gMSlcclxuXHRcdFx0XHQucmVwbGFjZSgvXFwoXFxzKlteKV0qXFwpL2csIFwiXCIpXHJcblx0XHRcdFx0LnJlcGxhY2UoL1xcW1xccypbXlxcXV0qXFxdL2csIFwiXCIpXHJcblx0XHRcdFx0LnJlcGxhY2UoL1xcL1xcXFwvZywgXCJcIilcclxuXHRcdFx0XHQucmVwbGFjZSgvW15cXHdcXHNcXC4kXS9naSwgXCJcIikudHJpbSgpO1xyXG5cdFx0XHRsZXQgZXBpc29kZU51bSA9IGVwaXNvZGVQYXR0LnNsaWNlKGluZGV4LnBhdHQgKyAxLCBlcGlzb2RlUGF0dC5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4ge3NlYXNvbjogcGFyc2VJbnQoc2Vhc29uKSwgbmFtZSwgZXBpc29kZU51bTogcGFyc2VJbnQoZXBpc29kZU51bSl9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEdlbmVyYXRlZCByYW5kb20gZm9sZGVyIG5hbWUgdG8gb3JnYW5pemUgdGhlIHNob3dzICovXHJcblx0XHRnZW5lcmF0ZVJhbmRvbUZvbGRlck5hbWUoKSB7XHJcblx0XHRcdGxldCBsZXR0ZXJzID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuXHRcdFx0bGV0IHJhbmRvbVN0cmluZyA9IFtdO1xyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSs9MSkge1xyXG5cdFx0XHRcdGxldCByYW4gPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV07XHJcblx0XHRcdFx0aWYoTWF0aC5yYW5kb20oKSA8IDAuNjk5KSByYW4gPSByYW4udG9Mb3dlckNhc2UoKTsgLy9TbyB0aGF0IGl0IGdpdmVzIGVxdWFsIGNoYW5nZSB0byBVcHBlciBjYXNlIGFuZCBsb3dlciBjYXNlIGFscGhhYmV0cyBtYXliZSAoSSdsbCBjaGVjayBpdCBsYXRlcilcclxuXHRcdFx0XHRyYW5kb21TdHJpbmcucHVzaChyYW4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByYW5kb21TdHJpbmcuam9pbihcIlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgSGVscGVyKCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0c2Vhc29uUGF0dChmaWxlKSB7IC8vRm9yIGluc3RhbmNlIC0+IFMwMkUwNVxyXG5cdFx0ZmlsZSA9IGZpbGUuc2xpY2UoZmlsZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxLCBmaWxlLmxlbmd0aCkucmVwbGFjZSgvWy5dL2csIFwiIFwiKTtcclxuXHRcdGxldCBlcGlzb2RlID0gL1NcXGQrRVxcZCsvZ2kuZXhlYyhmaWxlKTtcclxuXHRcdGlmKCFlcGlzb2RlKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4ge2VwaXNvZGVQYXR0OiBlcGlzb2RlWzBdLCB0eXBlOiBcInR2XCJ9O1xyXG5cdH0sXHJcblx0c2Vhc29uWEVwaU5hbWVQYXR0KGZpbGUpIHsgLy8gRm9yIGluc3RhbmNlIC0+IDF4MDJcclxuXHRcdGZpbGUgPSBmaWxlLnNsaWNlKGZpbGUubGFzdEluZGV4T2YoXCIvXCIpICsgMSwgZmlsZS5sZW5ndGgpLnJlcGxhY2UoL1suXS9nLCBcIiBcIik7XHJcblx0XHRsZXQgZXBpc29kZSA9IC9cXGQreFxcZFxcZC9naS5leGVjKGZpbGUpO1xyXG5cdFx0aWYoIWVwaXNvZGUpIHJldHVybiBmYWxzZTtcclxuXHRcdGVwaXNvZGUgPSBlcGlzb2RlWzBdO1xyXG5cdFx0cmV0dXJuIHtlcGlzb2RlUGF0dDogZXBpc29kZSwgdHlwZTogXCJ0dlwifTtcclxuXHR9LFxyXG5cdGlmTW92aWUoZmlsZSkge1xyXG5cdFx0ZmlsZSA9IGZpbGUuc2xpY2UoZmlsZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxLCBmaWxlLmxlbmd0aCkucmVwbGFjZSgvWy5dL2csIFwiIFwiKTtcclxuXHRcdGxldCBuYW1lID0gLzIwXFxkK3wxOVxcZCsvZ2kuZXhlYyhmaWxlKTtcclxuXHRcdGlmKCFuYW1lKSByZXR1cm4gZmFsc2U7XHJcblx0XHRuYW1lID0gZmlsZS5zbGljZSgwLCBuYW1lW1wiaW5kZXhcIl0pLnJlcGxhY2UoL1xcLi9nLCBcIiBcIikudHJpbSgpO1xyXG5cdFx0cmV0dXJuIHtuYW1lLCB0eXBlOiBcIm1vdmllXCJ9O1xyXG5cdH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdHRlcm5zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwc1wiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZpbGUpIHtcclxuXHJcblx0Ly9SZW5hbWUgLnNydCB3aXRoIC50eHQsIHJlYWQgLnR4dCBmaWxlLCBtb2RpZnkgaXQsIGRlbGV0ZSAudHh0LCB3cml0ZSAuc3J0IHdpdGggbmV3IGRhdGFcclxuXHRsZXQgZmlsZVR4dE5hbWUgPSBmaWxlLnJlcGxhY2UoL1xcLnNydC9nLCBcIi50eHRcIik7XHJcblx0ZnMucmVuYW1lU3luYyhmaWxlLCBmaWxlVHh0TmFtZSk7XHJcblx0bGV0IHN1YkRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVR4dE5hbWUsIFwidXRmLThcIilcclxuXHRcdC5yZXBsYWNlKC9cXChcXHMqW14pXSpcXCkvZywgXCJcIilcclxuXHRcdC5yZXBsYWNlKC9cXFtcXHMqW15cXF1dKlxcXS9nLCBcIlwiKVxyXG5cdFx0LnJlcGxhY2UoL1teQS1aYS16XFxkXFxzIT8sJyc+PC46LV0vZ2ksIFwiXCIpO1xyXG5cdGZzLnVubGlua1N5bmMoZmlsZVR4dE5hbWUpO1xyXG5cdGZzLndyaXRlRmlsZVN5bmMoZmlsZSwgc3ViRGF0YSwgXCJ1dGYtOFwiKTtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpeFN1YnMuanMiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChIZWxwZXIpIHtcclxuXHJcblx0LyogR2V0cyBhbGwgdGhlIGZpbGVzIGluc2lkZSB0aGUgZm9sZGVyICovXHJcblx0ZnVuY3Rpb24gdG9UaGVEZWVwZXN0RmlsZSh7YmFzZVBhdGgsIGRlZXBlckRpciwgYXJyfSkge1xyXG5cdFx0YmFzZVBhdGggKz0gZGVlcGVyRGlyICsgXCIvXCI7XHJcblx0XHRkZWVwZXJEaXIgPSBmcy5yZWFkZGlyU3luYyhiYXNlUGF0aCk7XHJcblx0XHRhcnIgPSBIZWxwZXIuZGlzZWN0QXJyYXlBbmRQdXNoKGJhc2VQYXRoLCBkZWVwZXJEaXIsIGFycik7IC8vQ29uY2F0IHdhcyBub3Qgd29ya2luZyBmb3Igc29tZSByZWFzb24uIFVnaCEhXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgZGVlcGVyRGlyLmxlbmd0aDsgaSs9MSkge1xyXG5cdFx0XHRpZighSGVscGVyLmlzRGlyKGJhc2VQYXRoICsgZGVlcGVyRGlyW2ldKSkgY29udGludWU7XHJcblx0XHRcdHRvVGhlRGVlcGVzdEZpbGUoe2Jhc2VQYXRoLCBcImRlZXBlckRpclwiOiBkZWVwZXJEaXJbaV0sIGFycn0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9XHJcblxyXG5cdGNsYXNzIFJlYWRlciB7XHJcblxyXG5cdFx0LypHZXQgYWxsIHRoZSBmaWxlcyBpbiB0aGUgcHJvdmlkZWQgcGF0aCAqL1xyXG5cdFx0cmVhZEZpbGVzKGJhc2VQYXRoKSB7XHJcblx0XHRcdGxldCBmaWxlcyA9IFtdO1xyXG5cdFx0XHRmcy5yZWFkZGlyU3luYyhiYXNlUGF0aCkubWFwKGZpbGUgPT4ge1xyXG5cdFx0XHRcdGZpbGVzLnB1c2goYmFzZVBhdGggKyBmaWxlKTtcclxuXHRcdFx0XHRpZighSGVscGVyLmlzRGlyKGJhc2VQYXRoICsgZmlsZSkpIHJldHVybjtcclxuXHRcdFx0XHRmaWxlcyA9IFsuLi5maWxlcywgLi4udG9UaGVEZWVwZXN0RmlsZSh7YmFzZVBhdGgsIGRlZXBlckRpcjogZmlsZSwgYXJyOiBbXX0pXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmaWxlcztcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gbmV3IFJlYWRlcigpO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZXRGaWxlcy5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbnN0IHRhYiA9IFwiXHRcIjtcclxuXHJcblx0Y29uc3QgdXNhZ2VEYXRhID0ge1xyXG5cdFx0XCJoZWxwXCI6XHJcblx0XHRcdFwiXFxuVXNhZ2U6IG5vZGUgb3JnYW5pemUgPHBhdGg+IC0tYXBpPTxhcGlrZXl8ZmFsc2U+IC0tbW9kZT08bW9kZT5cXG5cXG5cIiArXHJcblx0XHRcdGA8cGF0aD4ke3RhYn1Mb2NhdGlvbiBmb3Igd2hlcmUgdG8gbG9vayBmb3IgZmlsZXMgdG8gb3JnYW5pemVcXG5cXG5gICtcclxuXHRcdFx0YDxhcGlrZXk+JHt0YWJ9YXBpIGtleSBmcm9tIG9tYmRhcGkuY29tOyBEZWZhdWx0cyB0byBmYWxzZVxcblxcbmAgK1xyXG5cdFx0XHRgPG1vZGU+JHt0YWJ9U3BlY2lmeSBtb2RlOiBcInN5bWxpbmtcIiwgXCJoYXJkbGlua1wiLCBcIm5vbGlua1wiOyBcImhhcmRsaW5rXCIgYnkgZGVmYXVsdDtcXG5cXG5gICtcclxuXHRcdFx0YCR7dGFifXN5bWxpbms6IEl0IGNyZWF0ZXMgc2hvcnRjdXQgb2YgdGhlIGZpbGVzIHdpdGggZm9ybWF0dGVkIG5hbWVzIGluc3RlYWQgb2YgcmVuYW1pbmdcXG5gICtcclxuXHRcdFx0YCR7dGFifSR7dGFifSB0aGUgb3JpZ2luYWwgZmlsZXMuXFxuXFxuYCArXHJcblx0XHRcdGAke3RhYn1oYXJkbGluazogSXQgY3JlYXRlcyBuZXcgZmlsZXMgd2l0aCBmb3JtYXR0ZWQgbmFtZXMgd2l0aG91dCB0YWtpbmcgZXh0cmEgc3BhY2UuXFxuYCArXHJcblx0XHRcdGAke3RhYn0ke3RhYn0gIElmIHRoZSBvcmlnaW5hbCBmaWxlcyBhcmUgZGVsZXRlZCwgaGFyZCBsaW5rZWQgZmlsZXMgd2lsbCB0YWtlIHRoZSBzcGFjZS5cXG5gICtcclxuXHRcdFx0YCR7dGFifSR7dGFifSAgQmFzaWNhbGx5IGR1cGxpY2F0ZXMgb2YgZmlsZXMgd2l0aG91dCB0YWtpbmcgZXh0cmEgc3BhY2UuXFxuYCArXHJcblx0XHRcdGAke3RhYn0ke3RhYn0gIFJlY29tbWVuZGVkIHRvIHVzZSBvbiB0b3JyZW50cyB0aGF0IGFyZSBiZWluZyBzZWVkZWQuXFxuXFxuYCArXHJcblx0XHRcdGAke3RhYn1ub2xpbms6IFRoaXMgcmVuYW1lcyB0aGUgZmlsZXMgYW5kIGRlbGV0ZXMgdGhlIHVubmVjZXNzYXJ5IGZpbGVzLlxcbmAgK1xyXG5cdFx0XHRgJHt0YWJ9JHt0YWJ9VGhpcyB3aWxsIHN0b3Agc2VlZGluZy5cXG5cXG5gICtcclxuXHRcdFx0YC0taGVscCR7dGFifXNob3cgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG9wdGlvbnNgXHJcblx0fTtcclxuXHJcblx0Y29uc3QgYXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyLCBwcm9jZXNzLmFyZ3YubGVuZ3RoKTtcclxuXHJcblx0aWYgKCFhcmdzLmxlbmd0aCB8fCBhcmdzWzBdID09PSBcIi0taGVscFwiIHx8IGFyZ3MubGVuZ3RoID4gMykgeyBjb25zb2xlLmxvZyh1c2FnZURhdGEuaGVscCk7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHQvL1BhdGhcclxuXHRsZXQgcGF0aCA9IGFyZ3NbMF1bYXJncy5sZW5ndGggLSAxXSAhPT0gXCIvXCIgPyBhcmdzWzBdICsgXCIvXCIgOiBhcmdzWzBdO1xyXG5cdHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpO1xyXG5cclxuXHQvL0RlZmF1bHRzXHJcblx0bGV0IGFwaUtleSA9IGZhbHNlO1xyXG5cdGxldCBtb2RlID0gXCItLW1vZGU9aGFyZGxpbmtcIjtcclxuXHJcblx0YXJncy5mb3JFYWNoKGFyZyA9PiB7IC8vUGFyc2luZyB0aGUgbW9kZSBhbmQgdGhlIGFwaSBrZXlcclxuXHRcdGlmICgvbW9kZS8udGVzdChhcmcpKSBtb2RlID0gYXJnO1xyXG5cdFx0aWYgKC9hcGkvLnRlc3QoYXJnKSkgYXBpS2V5ID0gYXJnLnNsaWNlKGFyZy5pbmRleE9mKFwiPVwiKSArIDEsIGFyZy5sZW5ndGgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGlmIChtb2RlID09PSBcIi0tbW9kZT1oYXJkbGlua1wiKSB7IC8vRm9yIHRoZSBoYXJkbGlua1xyXG5cdFx0cmV0dXJuIHsgXCJtb2RlXCI6IDAsIHBhdGgsIGFwaUtleSB9O1xyXG5cdH0gZWxzZSBpZiAobW9kZSA9PT0gXCItLW1vZGU9c3ltbGlua1wiKSB7IC8vRm9yIHRoZSBzeW1saW5rXHJcblx0XHRyZXR1cm4geyBcIm1vZGVcIjogMSwgcGF0aCwgYXBpS2V5IH07XHJcblx0fSBlbHNlIHsgLy9Gb3IgdGhlIG5vbGlua1xyXG5cdFx0cmV0dXJuIHsgXCJtb2RlXCI6IDIsIHBhdGgsIGFwaUtleSB9O1xyXG5cdH1cclxuXHRcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFyc2VBcmdzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==