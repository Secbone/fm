/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _waveform = __webpack_require__(2);

	var _waveform2 = _interopRequireDefault(_waveform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = (function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            /*$.ajax({
	                type: "GET",
	                url: "http://on1x.cn/songtaste/list",
	                dataType: "json",
	                success: (data) => {
	                    console.log(data)
	                }
	            })*/
	            var data = "102065236|寂寞咖啡 |38061|唐古 |952594|寂寞咖啡 |2083772|241|4|1|0|9674662|3870080|320000|0|31691168|31988045|5728388|5994760|0|001SmOaV3Taefh|004JBnrz31Dj1E|003pchjc29aoe5|31|0";
	            console.log(this.formatMusic(data));
	        }
	    }, {
	        key: "formatMusic",
	        value: function formatMusic(songdata) {
	            songdata = unescape(unescape(songdata)).replace(/\+/ig, " ");
	            var _arrSongAttr = ["mid", "msong", "msingerid", "msinger", "malbumid", "malbum", "msize", "minterval", "mstream", "mdownload", "msingertype", "size320", "size128", "mrate", "gososo", "sizeape", "sizeflac", "sizeogg"];

	            var length = _arrSongAttr.length;
	            var arrMusic = songdata.split("|");
	            var _obj = {};
	            var i = 0;
	            var _length = Math.min(length, arrMusic.length);

	            for (i = 0; i < _length; i++) {
	                _obj[_arrSongAttr[i]] = arrMusic[i];
	            }for (i = _length; i < length; i++) {
	                _obj[_arrSongAttr[i]] = "";
	            }var _data = _obj;
	            _data.mruleid = 1E8;
	            if (typeof _data.rule_id != "undefined") _data.mruleid = data.rule_id;
	            _data.desc = "";

	            var stream = parseInt(_data.mstream, 10) + 10;
	            var sid = parseInt(_data.mid, 10) + 3E7;
	            _data.songurl = "http://stream" + stream + ".qqmusic.qq.com/" + sid + ".mp3";

	            return _data;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_waveform2.default, null)
	            );
	        }
	    }]);

	    return App;
	})(_react.Component);

	ReactDOM.render(_react2.default.createElement(App, null), document.getElementById("main"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _cabjs = __webpack_require__(3);

	var _cabjs2 = _interopRequireDefault(_cabjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaveForm = (function (_Component) {
	    _inherits(WaveForm, _Component);

	    function WaveForm() {
	        _classCallCheck(this, WaveForm);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaveForm).call(this));

	        _this.state = {
	            context: null,
	            analyser: null,
	            frequencyData: null,
	            rect_list: []
	        };
	        return _this;
	    }

	    _createClass(WaveForm, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.state.context = new AudioContext();
	            this.state.analyser = this.state.context.createAnalyser();
	            this.state.analyser.fftSize = 64;
	            this.state.frequencyData = new Uint8Array(this.state.analyser.frequencyBinCount);
	            for (var i = 0; i < 32; i++) {
	                this.state.rect_list.push(_cabjs2.default.RectClass.extend({
	                    x: 40 * i,
	                    y: 0,
	                    width: 38,
	                    height: 100,
	                    color: "black",
	                    keyframe: function keyframe() {
	                        this.y = _cabjs2.default._context.height - this.height;
	                    }
	                }));
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            var el = document.getElementById("audio");
	            el.crossOrigin = "y.qq.com";
	            $("#audio").on("canplay", function () {
	                var source = _this2.state.context.createMediaElementSource(el);
	                source.connect(_this2.state.analyser);
	                _this2.state.analyser.connect(_this2.state.context.destination);
	            });
	            $("#background").attr("width", $(window).width() + "px");
	            $("#background").attr("height", $(window).height() + "px");
	            _cabjs2.default.start("background");
	        }
	    }, {
	        key: "startAnimation",
	        value: function startAnimation() {
	            var _self = this;
	            function keyFrame() {
	                requestAnimationFrame(keyFrame);
	                _self.state.analyser.getByteFrequencyData(_self.state.frequencyData);
	                for (var i = 0; i < _self.state.rect_list.length; i++) {
	                    _self.state.rect_list[i].height = _self.state.frequencyData[i] * 1.5 + 20;
	                }
	            }
	            keyFrame();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            this.startAnimation();
	            var url = "song/encounter.mp3";
	            //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("audio", { id: "audio", autoPlay: true, controls: true, src: url }),
	                _react2.default.createElement("canvas", { id: "background" })
	            );
	        }
	    }]);

	    return WaveForm;
	})(_react.Component);

	exports.default = WaveForm;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CabContext = __webpack_require__(4);

	var _CabContext2 = _interopRequireDefault(_CabContext);

	var _CabClassQueue = __webpack_require__(5);

	var _CabClassQueue2 = _interopRequireDefault(_CabClassQueue);

	var _CabClass = __webpack_require__(6);

	var _CabClass2 = _interopRequireDefault(_CabClass);

	var _CabRectClass = __webpack_require__(8);

	var _CabRectClass2 = _interopRequireDefault(_CabRectClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CabJS = {
	    _components: _CabClassQueue2.default,
	    setOptions: function setOptions(options) {
	        this._context = _CabContext2.default.init(options);
	        this.ctx = this._context.ctx;
	    },
	    start: function start(id) {
	        this.setOptions(id);
	        this.runKeyframes();
	    },
	    clear: function clear() {
	        this.ctx.fillStyle = "#fff";
	        this.ctx.fillRect(0, 0, this._context.width, this._context.height);
	    },
	    runKeyframes: function runKeyframes() {
	        this.clear();
	        this._components.forEach(function (item) {
	            item.render();
	        });
	        requestAnimationFrame(this.runKeyframes.bind(this));
	    }
	};

	CabJS = Object.assign({
	    Class: _CabClass2.default,
	    RectClass: _CabRectClass2.default
	}, CabJS);

	exports.default = CabJS;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CabContext = {
	    init: function init(id) {
	        this.el = document.getElementById(id);
	        this.ctx = this.el.getContext("2d");
	        this.width = this.el.width;
	        this.height = this.el.height;
	        return this;
	    }
	};

	exports.default = CabContext;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CabClassQueue = new Array();

	exports.default = CabClassQueue;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CabContext = __webpack_require__(4);

	var _CabContext2 = _interopRequireDefault(_CabContext);

	var _CabClassQueue = __webpack_require__(5);

	var _CabClassQueue2 = _interopRequireDefault(_CabClassQueue);

	var _CabClassExtend = __webpack_require__(7);

	var _CabClassExtend2 = _interopRequireDefault(_CabClassExtend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CabClass = (function () {
	    function CabClass() {
	        _classCallCheck(this, CabClass);

	        _CabClassQueue2.default.push(this);
	    }

	    _createClass(CabClass, [{
	        key: "render",
	        value: function render() {
	            this.keyframe();
	        }
	    }, {
	        key: "keyframe",
	        value: function keyframe() {}
	    }, {
	        key: "ctx",
	        get: function get() {
	            return _CabContext2.default.ctx;
	        }
	    }]);

	    return CabClass;
	})();

	CabClass.extend = _CabClassExtend2.default;

	exports.default = CabClass;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CabClassExtent = function CabClassExtent(options) {
	    var obj = new this();
	    return Object.assign(obj, options);
	};

	exports.default = CabClassExtent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CabClass2 = __webpack_require__(6);

	var _CabClass3 = _interopRequireDefault(_CabClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CabRectClass = (function (_CabClass) {
	    _inherits(CabRectClass, _CabClass);

	    function CabRectClass() {
	        _classCallCheck(this, CabRectClass);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CabRectClass).call(this));
	    }

	    _createClass(CabRectClass, [{
	        key: "render",
	        value: function render() {
	            this.keyframe();
	            this.ctx.fillStyle = this.color;
	            this.ctx.fillRect(this.x, this.y, this.width, this.height);
	        }
	    }, {
	        key: "keyframe",
	        value: function keyframe() {}
	    }]);

	    return CabRectClass;
	})(_CabClass3.default);

	exports.default = CabRectClass;

/***/ }
/******/ ]);