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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

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
	            frequencyData: null
	        };
	        return _this;
	    }

	    _createClass(WaveForm, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.state.context = new AudioContext();
	            this.state.analyser = this.state.context.createAnalyser();
	            this.state.analyser.fftSize = 32;
	            this.state.frequencyData = new Uint8Array(this.state.analyser.frequencyBinCount);
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
	        }
	    }, {
	        key: "startAnimation",
	        value: function startAnimation() {
	            var _self = this;
	            function keyFrame() {
	                requestAnimationFrame(keyFrame);
	                _self.state.analyser.getByteFrequencyData(_self.state.frequencyData);
	                console.log(_self.state.frequencyData);
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
	                _react2.default.createElement("audio", { id: "audio", controls: true, src: url }),
	                _react2.default.createElement("canvas", { id: "background" })
	            );
	        }
	    }]);

	    return WaveForm;
	})(_react.Component);

	module.exports = WaveForm;

/***/ }
/******/ ]);