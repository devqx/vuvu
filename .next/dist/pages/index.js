'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _reactLoadScript = require('react-load-script');

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

var _Welcome = require('../components/Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Summary = require('../components/Summary');

var _Summary2 = _interopRequireDefault(_Summary);

var _Events = require('../components/Events');

var _Events2 = _interopRequireDefault(_Events);

var _Bg = require('../components/Bg');

var _Bg2 = _interopRequireDefault(_Bg);

var _Vuvunum = require('../components/Vuvunum');

var _Vuvunum2 = _interopRequireDefault(_Vuvunum);

var _Blog = require('../components/Blog');

var _Blog2 = _interopRequireDefault(_Blog);

var _VuvuFooter = require('../components/VuvuFooter');

var _VuvuFooter2 = _interopRequireDefault(_VuvuFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slides = function (_React$Component) {
    (0, _inherits3.default)(Slides, _React$Component);

    function Slides(props) {
        (0, _classCallCheck3.default)(this, Slides);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Slides.__proto__ || (0, _getPrototypeOf2.default)(Slides)).call(this, props));

        _this.loadSequenceJs = _this.loadSequenceJs.bind(_this);
        _this.addJsScripts = _this.addJsScripts.bind(_this);

        return _this;
    }

    (0, _createClass3.default)(Slides, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                className: 'jsx-2410911949'
            }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
                className: 'jsx-2410911949'
            }, 'Homepage | Welcome to VuvuTag '), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:400,500', rel: 'stylesheet', className: 'jsx-2410911949'
            })), _react2.default.createElement(_Header2.default, null), _react2.default.createElement('div', { id: 'sequence', className: 'jsx-2410911949'
            }, _react2.default.createElement('ul', {
                className: 'jsx-2410911949' + ' ' + 'seq-canvas'
            }, _react2.default.createElement('li', {
                className: 'jsx-2410911949' + ' ' + 'step1'
            }, _react2.default.createElement('div', {
                className: 'jsx-2410911949' + ' ' + 'content'
            }, _react2.default.createElement('h2', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'Powered by VuvuTag'), _react2.default.createElement('h3', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'The social Network of your choice.'))), _react2.default.createElement('li', {
                className: 'jsx-2410911949' + ' ' + 'step2'
            }, _react2.default.createElement('div', {
                className: 'jsx-2410911949' + ' ' + 'content'
            }, _react2.default.createElement('h2', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'Create Events and Tag Friends'), _react2.default.createElement('h3', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'Meet, connect , Gist, Chat without restriction', _react2.default.createElement('br', {
                className: 'jsx-2410911949'
            }), 'Welcome to the social of network.'))), _react2.default.createElement('li', {
                className: 'jsx-2410911949' + ' ' + 'step3'
            }, _react2.default.createElement('div', {
                className: 'jsx-2410911949' + ' ' + 'content'
            }, _react2.default.createElement('h2', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'No Restrictions, Endless Possibilities'), _react2.default.createElement('h3', { 'data-seq': true, className: 'jsx-2410911949'
            }, 'Use the HTML and CSS syntax you\'re used to. ', _react2.default.createElement('br', {
                className: 'jsx-2410911949'
            }), 'No JavaScript knowledge required.'))))), _react2.default.createElement(_Welcome2.default, null), _react2.default.createElement(_Summary2.default, null), _react2.default.createElement('p', {
                className: 'jsx-2410911949'
            }), _react2.default.createElement(_Bg2.default, null), _react2.default.createElement(_Vuvunum2.default, null), _react2.default.createElement(_Events2.default, { title: 'Browse Events' }), _react2.default.createElement(_Blog2.default, { title: 'From The Blog' }), _react2.default.createElement(_VuvuFooter2.default, null), _react2.default.createElement(_style2.default, {
                styleId: '3260313125',
                css: ['#sequence.jsx-2410911949{position:relative;width:100%;height:585px;max-width:100%;overflow:hidden;margin:0 auto;padding:0;font-family:sans-serif;}', '#sequence.jsx-2410911949 .seq-canvas.jsx-2410911949,#sequence.jsx-2410911949 .seq-canvas.jsx-2410911949>*.jsx-2410911949{margin:0;padding:0;list-style:none;}', '#sequence.jsx-2410911949 .seq-canvas.jsx-2410911949{position:absolute;height:100%;width:100%;white-space:nowrap;font-size:0;}', '#sequence.jsx-2410911949 .seq-canvas.jsx-2410911949>*.jsx-2410911949{display:inline-block;vertical-align:top;width:100%;height:100%;white-space:normal;text-align:center;color:white;}', '#sequence.jsx-2410911949 .seq-canvas.jsx-2410911949>li.jsx-2410911949:before{content:"";display:inline-block;vertical-align:middle;height:100%;}', '#sequence.jsx-2410911949 .content.jsx-2410911949{display:inline-block;vertical-align:middle;margin:0 4%;font-size:16px;}', '#sequence.jsx-2410911949 .step1.jsx-2410911949,.step2.jsx-2410911949,.step3.jsx-2410911949{background-image:url(\'https://badoocdn.com/aco/team.badoo.com/v2/-/-/i/team-site/promo/jobs/sz___size__/jobs.c1eb430f6119fc1355f6.jpg\');width:100vw;background-position:center top;background-repeat:no-repeat;height:600px;}', '#sequence.jsx-2410911949 h2.jsx-2410911949,#sequence.jsx-2410911949 h3.jsx-2410911949{margin:0;display:block;line-height:120%;opacity:0;-webkit-transition-duration:0.4s;-webkit-transition-duration:0.4s;transition-duration:0.4s;}', '#sequence.jsx-2410911949 h2.jsx-2410911949{margin-bottom:.5em;font-family:\'Roboto\',sans-serif;font-size:2.6em;-webkit-transform:translate(0,-20px);-webkit-transform:(0,-20px);-ms-transform:(0,-20px);transform:(0,-20px);}', '#sequence.jsx-2410911949 h3.jsx-2410911949{font-size:1.4em;-webkit-transform:translate(0,20px);-webkit-transform:translate(0,20px);-ms-transform:translate(0,20px);transform:translate(0,20px);}', '#sequence.jsx-2410911949 .seq-in.jsx-2410911949 h2.jsx-2410911949,.seq-in.jsx-2410911949 h3.jsx-2410911949{opacity:1;-webkit-transform:translate();-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}', '#sequence.jsx-2410911949 .seq-out.jsx-2410911949 h2.jsx-2410911949,.seq-out.jsx-2410911949 h3.jsx-2410911949{opacity:1;-webkit-transform:translate();-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-transition-duration:.4s;-webkit-transition-duration:.4s;transition-duration:.4s;}']
            }), _react2.default.createElement(_style2.default, {
                styleId: '2831691617',
                css: ['body,html{margin:0;padding:0;}']
            }));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            //this.addJsScripts() ); 


        }
    }, {
        key: 'loadSequenceJs',
        value: function loadSequenceJs() {

            // Get the Sequence element
            var sequenceElement = document.getElementById("sequence");

            var options = {
                keyNavigation: true,
                fadeStepWhenSkipped: false,
                autoPlay: true,
                autoPlayInterval: 3000

                // Launch Sequence on the element, and with the options we specified above
            };var sequence = sequence(sequenceElement, options);

            //return sequence;
        }
    }, {
        key: 'addJsScripts',
        value: function addJsScripts() {

            var scripts = ['https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/imagesloaded.pkgd.min.js', 'https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/hammer.min.js', 'https://cdn.jsdelivr.net/npm/sequencejs@2.0.0/scripts/sequence.min.js'];

            scripts.map(function (script) {
                var scriptEl = document.createElement('script');
                scriptEl.src = script;
                document.body.appendChild(scriptEl);
            });

            return this.loadSequenceJs();
        }
    }]);

    return Slides;
}(_react2.default.Component);

exports.default = Slides;