"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement("div", {
        className: "jsx-3189317261"
    }, _react2.default.createElement("div", {
        className: "jsx-3189317261" + " " + "navbar"
    }, _react2.default.createElement("span", {
        className: "jsx-3189317261" + " " + "logo"
    }, _react2.default.createElement("a", { href: "/", className: "jsx-3189317261"
    }, " ", _react2.default.createElement("img", { src: "static/logo.png", height: "140px", className: "jsx-3189317261"
    }), " ")), _react2.default.createElement("ul", {
        className: "jsx-3189317261" + " " + "nav"
    }, _react2.default.createElement("li", {
        className: "jsx-3189317261" + " " + "nav_item"
    }, _react2.default.createElement("a", { href: "/", className: "jsx-3189317261"
    }, " Home ")), _react2.default.createElement("li", {
        className: "jsx-3189317261" + " " + "nav_item"
    }, _react2.default.createElement("a", { href: "/about", className: "jsx-3189317261"
    }, " About ")), _react2.default.createElement("li", {
        className: "jsx-3189317261" + " " + "nav_item"
    }, _react2.default.createElement("a", { href: "/about", className: "jsx-3189317261"
    }, " Why Vuvu ")), _react2.default.createElement("li", {
        className: "jsx-3189317261" + " " + "nav_item"
    }, _react2.default.createElement("a", { href: "/about", className: "jsx-3189317261"
    }, " Activities ")), _react2.default.createElement("li", {
        className: "jsx-3189317261" + " " + "nav_item"
    }, _react2.default.createElement("a", { href: "/contact", className: "jsx-3189317261"
    }, " Join ")))), _react2.default.createElement(_style2.default, {
        styleId: "3189317261",
        css: [".navbar{background:transparent;z-index:9999;position:absolute;width:100%;height:60px;}", "ul{margin:0;}", ".logo{float:left;margin:12px 70px;color:#fff;}", ".logo a{color:#fff;text-decoration:none;font-size:20px;}", "ul.nav{color:#fff;float:right;margin:12px 70px;}", ".nav_item{padding:6px 10px;list-style-type:none;display:inline-block;box-sizing:border-box;}", ".nav_item:hover{border:1px solid #fff;box-shadow:0px 19px 38px rgba(0,0,0,0.25);-webkit-transition:all .35s;transition:all .35s;}", ".nav_item a{text-decoration:none;color:#fff;font-size:1.24rem;}"]
    }));
};

exports.default = Header;