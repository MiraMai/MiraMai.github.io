'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-100" },
                        React.createElement(
                            "h2",
                            null,
                            "Home"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-100" },
                        React.createElement("img", { src: "img/home.jpg", alt: "amorgos_beach", className: "imgLeft" }),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "span",
                                { className: "logoColor" },
                                "Meditationdailyhabit"
                            ),
                            " \xA0is a result of my passion about meditation and my will to help other people establish a practice in their daily life. The information and instructions in this website originate\xA0from my own experience in meditation."
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "span",
                                { className: "logoColor" },
                                "Meditationdailyhabit"
                            ),
                            " is not supporting any specific meditation technique but most likely a gathering of details from many traditions and techniques. I believe that following a technique is essential for one's development but I also believe that it's not necessary to follow strictly one specific technique. All of us are unique, therefore what works for each of us best, is different."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Therefore, having a basic guideline about what to do exactly in your practice is very important; but the details included in the guideline is your decision. The guideline that I support is directing your attention to one object while keeping your awareness. That means practicing concentration meditation and mindfulness at the same time. The content in this website is based on this guideline."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This might sound complicated for a beginner, and that\u2019s why there are necessary steps that needs be followed before you will be able to achieve and understand the state of mind that I just described."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "You don\u2019t need to get your mind overwhelmed with information before you start. Just go to ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Get started"
                            ),
                            " and follow the instructions."
                        ),
                        React.createElement(
                            "p",
                            { className: "note" },
                            React.createElement(
                                "span",
                                { className: "Note" },
                                "Note:"
                            ),
                            " If you are looking for a specific meditation technique this website may not be for you. On the other hand, it can help you explore yourself and overcome obstacles that will occur while establishing your practice."
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "How to use this website"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Under the\xA0",
                            React.createElement(
                                "span",
                                { className: "bold" },
                                "\"Get started\""
                            ),
                            " section you have all the steps you need to follow in order to start and establish your meditation practice."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "You will find two categories under ",
                            React.createElement(
                                "span",
                                { className: "bold" },
                                "\"Meditation essentials\""
                            ),
                            ":"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "span",
                                    { className: "bold" },
                                    "\"Meditation Assistance\""
                                ),
                                ", where you will find solutions to problems and obstacles that may occur while you\u2019re meditating. Like boredom, how to deal with the distractions in an effective way etc.\xA0So, every time you feel that you have come across a rock and you cannot overcome it, go to the assistance section. If you cannot find what you\u2019re looking for, you can just leave a comment on the relevant page, and I will try to help or redirect you if needed."
                            ),
                            React.createElement(
                                "li",
                                null,
                                "And\xA0",
                                React.createElement(
                                    "span",
                                    { className: "bold" },
                                    "\"Meditation Instructions\""
                                ),
                                ", where you will be directed when I\u2019m going through the steps. It\u2019s about how to sit, how to start your session etc."
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "\"Personal development\""
                            ),
                            " category, is on the right sidebar. Visit this category every time you feel like giving up or need some motivation. You can read about the importance of motivation in many of my articles."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Under the section ",
                            React.createElement(
                                "a",
                                { href: "#" },
                                "\"Reviews\""
                            ),
                            " you will find programs and products that can assist you with your practice and that I have reviewed myself."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "By clicking on some images or links on my articles, you will be redirected to another website where you can purchase any of the products/programs that I recommend. I have an affiliate relationship with many of these websites and that means that I may receive an affiliate commission. All the websites that I recommend are legit and high quality."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Thank you for visiting my website :) I wish you all the best and keep in mind that I'm here for any concerns or questions. To get in contact with me you can just send me an e-mail."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Athanasia,",
                            React.createElement("br", null),
                            "meditationdailyhabit@gmail.com"
                        )
                    )
                )
            );
        }
    }]);

    return Home;
}(React.Component);

var domContainer = document.querySelector('#home');
ReactDOM.render(React.createElement(Home, null), domContainer);