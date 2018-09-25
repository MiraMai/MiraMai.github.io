'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "navigation",
        { className: "navigation" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { className: "active", href: "#home" },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#dailyHabit" },
              "How to make meditation a daily habit"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#getStarted" },
              "Get started"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#meditationEssentials" },
              "Meditation essentials"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#reviews" },
              "Reviews"
            )
          ),
          React.createElement(
            "li",
            { style: { float: 'right' } },
            React.createElement(
              "a",
              { href: "#about" },
              "About"
            )
          ),
          React.createElement(
            "li",
            { style: { float: 'right' } },
            React.createElement(
              "a",
              { href: "#blog" },
              "Blog"
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

var domContainer = document.querySelector('#navigation');
ReactDOM.render(React.createElement(Navigation, null), domContainer);