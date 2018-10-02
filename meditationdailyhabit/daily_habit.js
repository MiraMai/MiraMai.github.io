'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dailyhabit = function (_React$Component) {
    _inherits(Dailyhabit, _React$Component);

    function Dailyhabit(props) {
        _classCallCheck(this, Dailyhabit);

        return _possibleConstructorReturn(this, (Dailyhabit.__proto__ || Object.getPrototypeOf(Dailyhabit)).call(this, props));
    }

    _createClass(Dailyhabit, [{
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
                            "How to make meditation a daily habit"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-100" },
                        React.createElement("img", { src: "img/daily_habit/girl-sitting-on-veranda.jpg", alt: "girl sitting on veranda", className: "imgcenter" }),
                        React.createElement(
                            "h3",
                            null,
                            " Why is it so difficult to make meditation a daily habit?"
                        ),
                        React.createElement("img", { src: "img/daily_habit/relax.jpg", alt: "girl thinking", className: "imgRight" }),
                        React.createElement(
                            "p",
                            null,
                            "Well, I believe it's difficult to put any new habit into our lives and it\u2019s even more difficult when this habit doesn't\xA0\"fit\" with the rhythm of our everyday life."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "I was always very busy and stressed in my everyday life, that even if there were moments that I didn\u2019t have so much to do, I was still in this mode. I was so used to be doing and thinking something constantly that being in another state didn\u2019t even exist in my mind. That\u2019s why it\u2019s extremely difficult for many people to take a pause in the middle of the day and simply stop thinking."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Another reason can be that we find meditation difficult and confusing. And yes, that\u2019s the impression that we get sometimes. This happens because there are so many different techniques and ways to meditate that if you start looking you will just get overwhelmed.",
                            React.createElement("br", null),
                            "Imagine meditation as the destination you want to reach. There are many different roads you can take to arrive to the same destination."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "The reason I created this website is to put it simple. I will not get into long explanations and analysis about the different kinds of techniques because that\u2019s not my intention. I want to focus on meditation as the ",
                            React.createElement(
                                "span",
                                { className: "bigger" },
                                "process that trains the mind"
                            ),
                            ".",
                            React.createElement("br", null),
                            "The goal of meditation is the same in all the techniques anyway, and the way to do it can be a combination of many details originating from many different traditions and techniques.",
                            React.createElement("br", null),
                            "My mission with this website is to learn more about meditation and share the things I know based on my experience with you."
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "Why is it so important to make meditation a daily habit?"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "By practicing daily, your brain learns how to exist in a different way on a regular basis. It gets used to new patterns of thinking and existing. If you don\u2019t do it every day it\u2019s just not enough to change these patterns."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "If you, for example, do it twice per week it\u2019s like you are repeating, again and again, the same things without developing; even if you stay longer than you would stay if you did it every day. It's like when you start learning a language for example. If you don't practice and study the language often enough you will end up repeating what you learned in the previous lessons every time you decide to study."
                        ),
                        React.createElement(
                            "p",
                            { className: "quote" },
                            "\u201CWe are what we repeatedly\xA0do. Excellence, then, is not an act, but a habit.\"",
                            React.createElement("br", null),
                            " ~~ Aristotle~~"
                        ),
                        React.createElement(
                            "h4",
                            null,
                            "How to think to make it happen!"
                        ),
                        React.createElement("img", { src: "img/daily_habit/woman_meditating.jpg", alt: "happy woman meditating" }),
                        React.createElement(
                            "p",
                            null,
                            "It doesn\u2019t matter if you meditate only for 5 minutes per\xA0day as long as you do it\xA0",
                            React.createElement(
                                "span",
                                { className: "bigger" },
                                "every day!"
                            ),
                            " It is very difficult to stay longer anyways, if you are a novice. Meditation is something that happens slowly and you have to build it every day,\xA0gradually so that you will be able to stay longer without forcing and pressuring\xA0 too much yourself."
                        ),
                        React.createElement(
                            "p",
                            null,
                            "You can even start with 3 minutes per day if you feel that 5 are too much. Between 3 to 10 minutes is a good start. Stay how long it feels good to you."
                        ),
                        React.createElement(
                            "h5",
                            null,
                            "The key is to set the bar low"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Thinking: ",
                            React.createElement(
                                "span",
                                { className: "quotes" },
                                "\u201D\xA0I will meditate 20 minutes today\u201D"
                            ),
                            "\xA0may make you feel pressure that you have to sit on a specific spot for 20 minutes\u2026. \xA0\xA0\xA0  without moving!!",
                            React.createElement("br", null),
                            " That last part can be pretty scary for some people, so I think it\u2019s better to say to yourself ",
                            React.createElement(
                                "span",
                                { className: "quotes" },
                                "\xA0\u201C I will just meditate 3 minutes today\u201D."
                            ),
                            React.createElement(
                                "p",
                                null,
                                " ",
                                React.createElement(
                                    "span",
                                    { className: "underline" },
                                    "The result:"
                                ),
                                " Instead of feeling bad and thinking:",
                                React.createElement(
                                    "span",
                                    { className: "quotes" },
                                    "\u201D I find it difficult to stay on this spot for the next 20 minutes..\u201D"
                                ),
                                ",\xA0your feeling switches to\xA0",
                                React.createElement(
                                    "span",
                                    { className: "quotes" },
                                    "\u201C I just have to sit here for 3 minutes\u201D"
                                ),
                                ".",
                                React.createElement("br", null),
                                "The good thing by thinking like this is that most of the time you will sit more than 3 minutes because you will simply feel like it and not because you have to. "
                            ),
                            "\xA0"
                        )
                    )
                )
            );
        }
    }]);

    return Dailyhabit;
}(React.Component);

var domContainer = document.querySelector('#daily_habit');
ReactDOM.render(React.createElement(Dailyhabit, null), domContainer);