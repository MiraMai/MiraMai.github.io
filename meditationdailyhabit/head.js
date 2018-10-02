'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = function (_React$Component) {
    _inherits(Head, _React$Component);

    function Head(props) {
        _classCallCheck(this, Head);

        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, props));
    }

    _createClass(Head, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("meta", { charset: "UTF-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                React.createElement("meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900", rel: "stylesheet" }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Butterfly+Kids|Caveat|Miss+Fajardose|Quicksand|Sacramento|Sunshiney|Ubuntu", rel: "stylesheet" }),
                React.createElement("link", { href: "https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro|Spirax|Mallanna|Mandali|Philosopher|Raleway|PT+Sans+Caption", rel: "stylesheet" }),
                React.createElement("link", { rel: "stylesheet", href: "css/style.css" }),
                React.createElement(
                    "title",
                    null,
                    "Meditationdailyhabit"
                )
            );
        }
    }]);

    return Head;
}(React.Component);

var domContainer = document.querySelector('#head');
ReactDOM.render(React.createElement(Head, null), domContainer);