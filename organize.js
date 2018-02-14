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


var apiShowsAndMovies = function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(shows, movies, apikey) {
        var _ref16, _ref17, showsData, posters, moviesData;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return apiShows(shows, apikey);

                    case 3:
                        _ref16 = _context4.sent;
                        _ref17 = _slicedToArray(_ref16, 2);
                        showsData = _ref17[0];
                        posters = _ref17[1];
                        _context4.next = 9;
                        return apiMovies(movies, apikey);

                    case 9:
                        moviesData = _context4.sent;
                        return _context4.abrupt("return", [showsData, posters, moviesData]);

                    case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4["catch"](0);
                        console.log("Execute API " + new Error(_context4.t0));
                    case 16:
                    case "end":
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[0, 13]]);
    }));

    return function apiShowsAndMovies(_x4, _x5, _x6) {
        return _ref15.apply(this, arguments);
    };
}();

/* Gets movies Data form api */


var apiMovies = function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(movies, apikey) {
        var apiData, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, name, _ref20, Title, Year, Poster, Runtime, imdbRating, Response;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        _context5.prev = 0;
                        apiData = [];
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context5.prev = 5;
                        _iterator = Object.keys(movies)[Symbol.iterator]();

                    case 7:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context5.next = 23;
                            break;
                        }

                        name = _step.value;

                        name = name.split(" ").join("%20");
                        _context5.next = 12;
                        return Helper.getData("/?apikey=" + apikey + "&t=" + name);

                    case 12:
                        _ref20 = _context5.sent;
                        Title = _ref20.Title;
                        Year = _ref20.Year;
                        Poster = _ref20.Poster;
                        Runtime = _ref20.Runtime;
                        imdbRating = _ref20.imdbRating;
                        Response = _ref20.Response;

                        apiData.push({ Title: Title, Year: Year, Poster: Poster, Runtime: Runtime, Rating: imdbRating, Response: Response });

                    case 20:
                        _iteratorNormalCompletion = true;
                        _context5.next = 7;
                        break;

                    case 23:
                        _context5.next = 29;
                        break;

                    case 25:
                        _context5.prev = 25;
                        _context5.t0 = _context5["catch"](5);
                        _didIteratorError = true;
                        _iteratorError = _context5.t0;

                    case 29:
                        _context5.prev = 29;
                        _context5.prev = 30;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 32:
                        _context5.prev = 32;

                        if (!_didIteratorError) {
                            _context5.next = 35;
                            break;
                        }

                        throw _iteratorError;

                    case 35:
                        return _context5.finish(32);

                    case 36:
                        return _context5.finish(29);

                    case 37:
                        return _context5.abrupt("return", apiData.filter(function (_ref19) {
                            var Response = _ref19.Response;
                            return Response === "True";
                        }));

                    case 40:
                        _context5.prev = 40;
                        _context5.t1 = _context5["catch"](0);
                        console.log("apiMovies ");console.log(new Error(_context5.t1));
                    case 44:
                    case "end":
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[0, 40], [5, 25, 29, 37], [30,, 32, 36]]);
    }));

    return function apiMovies(_x7, _x8) {
        return _ref18.apply(this, arguments);
    };
}();

/* Gets shows data from api */


var apiShows = function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(shows, apikey) {
        var apiData, posters, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, showName, season, baseUrl, _ref24, Poster, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        _context6.prev = 0;
                        apiData = [], posters = [];
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context6.prev = 5;
                        _iterator2 = Object.keys(shows)[Symbol.iterator]();

                    case 7:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context6.next = 49;
                            break;
                        }

                        showName = _step2.value;
                        season = shows[showName].season;

                        showName = showName.replace(/[^\w\s]/gi, "").split(" ").join("%20"); //For api
                        baseUrl = "/?apikey=" + apikey + "&t=" + showName;
                        _context6.next = 14;
                        return Helper.getData(baseUrl);

                    case 14:
                        _ref24 = _context6.sent;
                        Poster = _ref24.Poster;

                        posters.push({ title: showName, url: Poster });
                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context6.prev = 20;
                        _iterator3 = season[Symbol.iterator]();

                    case 22:
                        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context6.next = 32;
                            break;
                        }

                        item = _step3.value;
                        _context6.t0 = apiData;
                        _context6.next = 27;
                        return Helper.getData(baseUrl + "&Season=" + item);

                    case 27:
                        _context6.t1 = _context6.sent;

                        _context6.t0.push.call(_context6.t0, _context6.t1);

                    case 29:
                        _iteratorNormalCompletion3 = true;
                        _context6.next = 22;
                        break;

                    case 32:
                        _context6.next = 38;
                        break;

                    case 34:
                        _context6.prev = 34;
                        _context6.t2 = _context6["catch"](20);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context6.t2;

                    case 38:
                        _context6.prev = 38;
                        _context6.prev = 39;

                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }

                    case 41:
                        _context6.prev = 41;

                        if (!_didIteratorError3) {
                            _context6.next = 44;
                            break;
                        }

                        throw _iteratorError3;

                    case 44:
                        return _context6.finish(41);

                    case 45:
                        return _context6.finish(38);

                    case 46:
                        _iteratorNormalCompletion2 = true;
                        _context6.next = 7;
                        break;

                    case 49:
                        _context6.next = 55;
                        break;

                    case 51:
                        _context6.prev = 51;
                        _context6.t3 = _context6["catch"](5);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context6.t3;

                    case 55:
                        _context6.prev = 55;
                        _context6.prev = 56;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 58:
                        _context6.prev = 58;

                        if (!_didIteratorError2) {
                            _context6.next = 61;
                            break;
                        }

                        throw _iteratorError2;

                    case 61:
                        return _context6.finish(58);

                    case 62:
                        return _context6.finish(55);

                    case 63:
                        return _context6.abrupt("return", [apiData.filter(function (_ref22) {
                            var Response = _ref22.Response;
                            return Response === "True";
                        }), posters.filter(function (_ref23) {
                            var url = _ref23.url,
                                title = _ref23.title;
                            return url && title;
                        })]);

                    case 66:
                        _context6.prev = 66;
                        _context6.t4 = _context6["catch"](0);
                        console.log("apiMovies ");console.log(new Error(_context6.t4));
                    case 70:
                    case "end":
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[0, 66], [5, 51, 55, 63], [20, 34, 38, 46], [39,, 41, 45], [56,, 58, 62]]);
    }));

    return function apiShows(_x9, _x10) {
        return _ref21.apply(this, arguments);
    };
}();

/* Gets show names with their respective season numbers */


/* Makes folder for shows and movies */
var makeShowAndMoviesFolders = function () {
    var _ref27 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref26) {
        var basePath = _ref26.basePath,
            shows = _ref26.shows,
            posters = _ref26.posters,
            movies = _ref26.movies,
            moviesData = _ref26.moviesData;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        _context7.prev = 0;

                        _fs2.default.mkdirSync(basePath);
                        ["Tv Shows", "Movies", "No Match Found"].map(function (str) {
                            return _fs2.default.mkdirSync(basePath + "/" + str);
                        }); //Initial Folders
                        _context7.next = 5;
                        return Promise.all([makeShowsFolders({ shows: shows, basePath: basePath, posters: posters }), makeMoviesFolders(movies, basePath, moviesData)]);

                    case 5:
                        _context7.next = 10;
                        break;

                    case 7:
                        _context7.prev = 7;
                        _context7.t0 = _context7["catch"](0);
                        console.log("Make Show Folders " + new Error(_context7.t0));
                    case 10:
                    case "end":
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[0, 7]]);
    }));

    return function makeShowAndMoviesFolders(_x11) {
        return _ref27.apply(this, arguments);
    };
}();
/* Makes folder for the shows with; Season and showName */


var makeShowsFolders = function () {
    var _ref29 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(_ref28) {
        var _this2 = this;

        var shows = _ref28.shows,
            posters = _ref28.posters,
            basePath = _ref28.basePath;

        var _loop, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, showName;

        return _regenerator2.default.wrap(function _callee8$(_context9) {
            while (1) {
                switch (_context9.prev = _context9.next) {
                    case 0:
                        _context9.prev = 0;
                        _loop = /*#__PURE__*/_regenerator2.default.mark(function _loop(showName) {
                            var season;
                            return _regenerator2.default.wrap(function _loop$(_context8) {
                                while (1) {
                                    switch (_context8.prev = _context8.next) {
                                        case 0:
                                            season = shows[showName].season;

                                            _fs2.default.mkdirSync(basePath + "/Tv Shows/" + showName);

                                            if (!posters.length) {
                                                _context8.next = 5;
                                                break;
                                            }

                                            _context8.next = 5;
                                            return savePosters({ basePath: basePath, showName: showName, posters: posters });

                                        case 5:
                                            //API key is provided
                                            season.map(function (season) {
                                                return _fs2.default.mkdirSync(basePath + "/Tv Shows/" + showName + "/Season " + season);
                                            });

                                        case 6:
                                        case "end":
                                            return _context8.stop();
                                    }
                                }
                            }, _loop, _this2);
                        });
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context9.prev = 5;
                        _iterator4 = Object.keys(shows)[Symbol.iterator]();

                    case 7:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                            _context9.next = 13;
                            break;
                        }

                        showName = _step4.value;
                        return _context9.delegateYield(_loop(showName), "t0", 10);

                    case 10:
                        _iteratorNormalCompletion4 = true;
                        _context9.next = 7;
                        break;

                    case 13:
                        _context9.next = 19;
                        break;

                    case 15:
                        _context9.prev = 15;
                        _context9.t1 = _context9["catch"](5);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context9.t1;

                    case 19:
                        _context9.prev = 19;
                        _context9.prev = 20;

                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }

                    case 22:
                        _context9.prev = 22;

                        if (!_didIteratorError4) {
                            _context9.next = 25;
                            break;
                        }

                        throw _iteratorError4;

                    case 25:
                        return _context9.finish(22);

                    case 26:
                        return _context9.finish(19);

                    case 27:
                        _context9.next = 32;
                        break;

                    case 29:
                        _context9.prev = 29;
                        _context9.t2 = _context9["catch"](0);
                        console.log("makeShowsFolders " + new Error(_context9.t2));
                    case 32:
                    case "end":
                        return _context9.stop();
                }
            }
        }, _callee8, this, [[0, 29], [5, 15, 19, 27], [20,, 22, 26]]);
    }));

    return function makeShowsFolders(_x12) {
        return _ref29.apply(this, arguments);
    };
}();

/* Makes folder for the movies with name, year, rating and runtime */


var makeMoviesFolders = function () {
    var _ref30 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee9(movies, basePath, moviesData) {
        var _this3 = this;

        var _loop2, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, movie, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, name;

        return _regenerator2.default.wrap(function _callee9$(_context11) {
            while (1) {
                switch (_context11.prev = _context11.next) {
                    case 0:
                        _context11.prev = 0;

                        if (!moviesData.length) {
                            _context11.next = 30;
                            break;
                        }

                        _loop2 = /*#__PURE__*/_regenerator2.default.mark(function _loop2(movie) {
                            var keys, Title, Rating, Poster, Runtime, Year, folder;
                            return _regenerator2.default.wrap(function _loop2$(_context10) {
                                while (1) {
                                    switch (_context10.prev = _context10.next) {
                                        case 0:
                                            keys = Object.keys(movie);

                                            keys.forEach(function (item) {
                                                return item !== "Poster" ? movie[item] = movie[item].replace(/[|><*:?"//]/g, "") : "";
                                            });
                                            Title = movie.Title, Rating = movie.Rating, Poster = movie.Poster, Runtime = movie.Runtime, Year = movie.Year;
                                            folder = Title + " " + Year + " (" + Runtime + ") (" + Rating + ")";

                                            _fs2.default.mkdirSync(basePath + "/Movies/" + folder);

                                            if (!(Poster !== "N/A")) {
                                                _context10.next = 8;
                                                break;
                                            }

                                            _context10.next = 8;
                                            return Helper.saveImage(Poster, basePath + "/Movies/" + folder + "/" + Title + ".jpg");

                                        case 8:
                                        case "end":
                                            return _context10.stop();
                                    }
                                }
                            }, _loop2, _this3);
                        });
                        //If api key is provided
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context11.prev = 6;
                        _iterator5 = moviesData[Symbol.iterator]();

                    case 8:
                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                            _context11.next = 14;
                            break;
                        }

                        movie = _step5.value;
                        return _context11.delegateYield(_loop2(movie), "t0", 11);

                    case 11:
                        _iteratorNormalCompletion5 = true;
                        _context11.next = 8;
                        break;

                    case 14:
                        _context11.next = 20;
                        break;

                    case 16:
                        _context11.prev = 16;
                        _context11.t1 = _context11["catch"](6);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context11.t1;

                    case 20:
                        _context11.prev = 20;
                        _context11.prev = 21;

                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }

                    case 23:
                        _context11.prev = 23;

                        if (!_didIteratorError5) {
                            _context11.next = 26;
                            break;
                        }

                        throw _iteratorError5;

                    case 26:
                        return _context11.finish(23);

                    case 27:
                        return _context11.finish(20);

                    case 28:
                        _context11.next = 49;
                        break;

                    case 30:
                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context11.prev = 33;

                        for (_iterator6 = Object.keys(movies)[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            name = _step6.value;

                            _fs2.default.mkdirSync(basePath + "/Movies/" + name);
                        }
                        _context11.next = 41;
                        break;

                    case 37:
                        _context11.prev = 37;
                        _context11.t2 = _context11["catch"](33);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context11.t2;

                    case 41:
                        _context11.prev = 41;
                        _context11.prev = 42;

                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }

                    case 44:
                        _context11.prev = 44;

                        if (!_didIteratorError6) {
                            _context11.next = 47;
                            break;
                        }

                        throw _iteratorError6;

                    case 47:
                        return _context11.finish(44);

                    case 48:
                        return _context11.finish(41);

                    case 49:
                        _context11.next = 54;
                        break;

                    case 51:
                        _context11.prev = 51;
                        _context11.t3 = _context11["catch"](0);
                        console.log("makeMoviesFolders " + new Error(_context11.t3));
                    case 54:
                    case "end":
                        return _context11.stop();
                }
            }
        }, _callee9, this, [[0, 51], [6, 16, 20, 28], [21,, 23, 27], [33, 37, 41, 49], [42,, 44, 48]]);
    }));

    return function makeMoviesFolders(_x13, _x14, _x15) {
        return _ref30.apply(this, arguments);
    };
}();

/* Downloads and save posters */


var savePosters = function () {
    var _ref32 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee10(_ref31) {
        var basePath = _ref31.basePath,
            posters = _ref31.posters,
            showName = _ref31.showName;

        var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _ref33, title, url;

        return _regenerator2.default.wrap(function _callee10$(_context12) {
            while (1) {
                switch (_context12.prev = _context12.next) {
                    case 0:
                        _context12.prev = 0;
                        _iteratorNormalCompletion7 = true;
                        _didIteratorError7 = false;
                        _iteratorError7 = undefined;
                        _context12.prev = 4;
                        _iterator7 = posters[Symbol.iterator]();

                    case 6:
                        if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                            _context12.next = 20;
                            break;
                        }

                        _ref33 = _step7.value;
                        title = _ref33.title;
                        url = _ref33.url;

                        title = title.replace(/%20/g, "").toLowerCase();

                        if (!(title === showName.replace(/\s/gi, "").toLowerCase())) {
                            _context12.next = 16;
                            break;
                        }

                        _context12.next = 14;
                        return Helper.saveImage(url, basePath + "/Tv Shows/" + showName + "/" + showName + ".jpg");

                    case 14:
                        _context12.next = 17;
                        break;

                    case 16:
                        "";

                    case 17:
                        _iteratorNormalCompletion7 = true;
                        _context12.next = 6;
                        break;

                    case 20:
                        _context12.next = 26;
                        break;

                    case 22:
                        _context12.prev = 22;
                        _context12.t0 = _context12["catch"](4);
                        _didIteratorError7 = true;
                        _iteratorError7 = _context12.t0;

                    case 26:
                        _context12.prev = 26;
                        _context12.prev = 27;

                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }

                    case 29:
                        _context12.prev = 29;

                        if (!_didIteratorError7) {
                            _context12.next = 32;
                            break;
                        }

                        throw _iteratorError7;

                    case 32:
                        return _context12.finish(29);

                    case 33:
                        return _context12.finish(26);

                    case 34:
                        _context12.next = 39;
                        break;

                    case 36:
                        _context12.prev = 36;
                        _context12.t1 = _context12["catch"](0);
                        console.log("savePosters " + new Error(_context12.t1));
                    case 39:
                    case "end":
                        return _context12.stop();
                }
            }
        }, _callee10, this, [[0, 36], [4, 22, 26, 34], [27,, 29, 33]]);
    }));

    return function savePosters(_x16) {
        return _ref32.apply(this, arguments);
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
                    //It will deal with all the srt, false positives in movies, and tv shows and other files
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
    moviesData.map(function (_ref13) {
        var Title = _ref13.Title,
            Year = _ref13.Year,
            Runtime = _ref13.Runtime,
            Rating = _ref13.Rating;

        var isNameAMatch = new RegExp(name, "i");
        if (!isNameAMatch.test(Title)) return;
        newFile["newFile"] = "/Movies/" + Title + " " + Year + " (" + Runtime + ") (" + Rating + ")/" + Title + " " + Year + ext;
    });
    return newFile;
}function filterShowsAndMovies(video) {
    var shows = {},
        movies = {};

    video.map(function (_ref25) {
        var file = _ref25.file,
            type = _ref25.type,
            fileStats = _ref25.fileStats,
            name = _ref25.name;

        //Removes brackets and extra whitespace
        if (name) name = name.replace(/\(\s*[^)]*\)/g, "").replace(/\[\s*[^\]]*\]/g, "").replace(/\/\\/g, "").trim();
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
            //New show detected
            if (!sameShow) {
                shows[_name] = { season: [season], length: 1, files: [{ file: file, episodeNum: episodeNum, season: season }] };return;
            }
            if (shows[sameShow.name] && shows[sameShow.name].hasOwnProperty("files")) {
                shows[sameShow.name].files.push({ file: file, episodeNum: episodeNum, season: season });
            }
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
    //Sorting dirs, so that it deletes from inside out
    return { dirs: dirs.sort(function (a, b) {
            return b.length - a.length;
        }), video: video, other: other };
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

    /* Matches the found title with the api title word by word -> mr robot -> mr, 
       check with api title -> robot, check with api title 
    */
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
                    setTimeout(function () {
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
                    }, 100);
                }).catch(function (e) {
                    return console.log("getData " + new Error(e));
                });
            }

            /* Replaces show and movie names found from files to the names that were found from api. 
               This solves the bad names that were found from the files
            */

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
                    var titlePatt = new RegExp(name, "i");
                    if (!titlePatt.test(show.Title) || parseInt(show.Season, 10) !== parseInt(season, 10)) return;
                    show.Episodes.forEach(function (_ref4) {
                        var Episode = _ref4.Episode,
                            Title = _ref4.Title;
                        return parseInt(episodeNum, 10) === parseInt(Episode, 10) ? title = Title : "";
                    });
                });
                //Replace is for weird titles like - Horseback Riding\Man Zone
                return title ? title.replace(/[^\w\s-\.$]/gi, "") : null;
            }

            /* Outputs season, Show name and episode number*/

        }, {
            key: "getFileStats",
            value: function getFileStats(_ref5) {
                var file = _ref5.file,
                    episodePatt = _ref5.episodePatt;

                // "path/New Girl HDTV.LOL S02E01.mp4" -> "/New Girl HDTV LOL S02E01 mp4"
                file = file.slice(file.lastIndexOf("/") + 1, file.length).replace(/[.]/g, " ");
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
                    //So that it gives equal change to Upper case and lower case alphabets maybe (I'll check it later)
                    if (Math.random() < 0.699) ran = ran.toLowerCase();
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
                    tab = "   ";
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
                        _context.next = 17;
                        break;
                    }

                    return _context.abrupt("return", { "mode": 1, path: path, apiKey: apiKey });

                case 17:
                    return _context.abrupt("return", { "mode": 2, path: path, apiKey: apiKey });

                case 18:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/***/ })
/******/ ]);