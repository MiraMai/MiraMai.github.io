'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigationmobile = function (_React$Component) {
    _inherits(Navigationmobile, _React$Component);

    function Navigationmobile() {
        _classCallCheck(this, Navigationmobile);

        return _possibleConstructorReturn(this, (Navigationmobile.__proto__ || Object.getPrototypeOf(Navigationmobile)).apply(this, arguments));
    }

    _createClass(Navigationmobile, [{
        key: "subMenu1",
        value: function subMenu1() {
            if (document.getElementById("sub1").style.display === "none") {
                document.getElementById("sub1").style.display = "inline";
            } else if (document.getElementById("sub1").style.display === "inline") {
                document.getElementById("sub1").style.display = "none";
            }
        }
    }, {
        key: "subMenu2",
        value: function subMenu2() {
            if (document.getElementById("sub2").style.display === "none") {
                document.getElementById("sub2").style.display = "inline";
            } else if (document.getElementById("sub2").style.display === "inline") {
                document.getElementById("sub2").style.display = "none";
            }
        }
    }, {
        key: "subMenu3",
        value: function subMenu3() {
            if (document.getElementById("sub3").style.display === "none") {
                document.getElementById("sub3").style.display = "inline";
            } else if (document.getElementById("sub3").style.display === "inline") {
                document.getElementById("sub3").style.display = "none";
            }
        }
    }, {
        key: "subMenu4",
        value: function subMenu4() {
            if (document.getElementById("sub4").style.display === "none") {
                document.getElementById("sub4").style.display = "inline";
            } else if (document.getElementById("sub4").style.display === "inline") {
                document.getElementById("sub4").style.display = "none";
            }
        }
    }, {
        key: "openNav",
        value: function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }
    }, {
        key: "closeNav",
        value: function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "mySidenav", className: "sidenav" },
                    React.createElement(
                        "a",
                        { href: "javascript:void(0)", className: "closebtn", onClick: this.closeNav },
                        "\xD7"
                    ),
                    React.createElement(
                        "a",
                        { className: "active", href: "index.html" },
                        "Home"
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "daily_habit.html" },
                            "How to make meditation a daily habit "
                        ),
                        React.createElement("i", { onClick: this.subMenu1, className: "fas fa-angle-down", style: { fontSize: '28px', display: 'inline' } })
                    ),
                    React.createElement(
                        "div",
                        { style: { display: 'none' }, id: "sub1", className: "subCategory1" },
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Establishing your practice"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Meditation and benefits"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Get started "
                        ),
                        React.createElement("i", { onClick: this.subMenu2, className: "fas fa-angle-down", style: { fontSize: '28px', display: 'inline' } })
                    ),
                    React.createElement(
                        "div",
                        { style: { display: 'none' }, id: "sub2", className: "subCategory1" },
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Stage 1 - Cultivating Relaxation"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Stage 2 - Directing your Attention"
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Meditation essentials "
                        ),
                        React.createElement("i", { onClick: this.subMenu3, className: "fas fa-angle-down", style: { fontSize: '28px', display: 'inline' } })
                    ),
                    React.createElement(
                        "div",
                        { style: { display: 'none' }, id: "sub3", className: "subCategory1" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Meditation Instructions"
                            ),
                            React.createElement(
                                "div",
                                { style: { marginLeft: '5em' } },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Basic Meditation Instructions"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "How to Sit while Meditating"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "How to Start a Meditation Practice"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "My 7 Days of Meditation Schedule"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Meditation Object"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Finding your Intention"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Meditation Assistance"
                            ),
                            React.createElement(
                                "div",
                                { style: { marginLeft: '5em' } },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "How to Stay Motivated Towards Meditation"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "How to Deal with Distractions when Meditating - Get Rid of the Negative Feelings"
                                ),
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Meditation and Boredom - How to Deal with it"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Reviews "
                        ),
                        React.createElement("i", { onClick: this.subMenu4, className: "fas fa-angle-down", style: { fontSize: '28px', display: 'inline' } })
                    ),
                    React.createElement(
                        "div",
                        { style: { display: 'none' }, id: "sub4", className: "subCategory1" },
                        React.createElement(
                            "a",
                            { href: "#" },
                            "How to make the Law of Attraction work for you"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Take a trip through your mind"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Do Meditation and Yoga at home"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "\"Spoonk\" Accupressure Mat reviews"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Meditation Benches Cushions and Chair,s"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "What is Hypnosis Downloads? - Review"
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Bohemian Island - Harem Pants from Thailand"
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "#" },
                        "Blog"
                    ),
                    React.createElement(
                        "a",
                        { href: "#" },
                        "About me"
                    )
                ),
                React.createElement(
                    "span",
                    { onClick: this.openNav, className: "menu" },
                    React.createElement("i", { className: "fas fa-bars", style: { fontSize: '30px' } })
                )
            );
        }
    }]);

    return Navigationmobile;
}(React.Component);

var domContainer = document.querySelector('#navigationmobile');
ReactDOM.render(React.createElement(Navigationmobile, null), domContainer);