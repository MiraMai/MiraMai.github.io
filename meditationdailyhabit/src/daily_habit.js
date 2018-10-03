'use strict';

class  Dailyhabit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
            <div className="col-66">

                <div className="row">
                    <div className="col-100">
                        <h2>
                            How to make meditation a daily habit
                        </h2>
                    </div>
                </div>    

                <div className="row">
                    <div className="col-100">
                        <img src="img/daily_habit/girl-sitting-on-veranda.jpg" alt="girl sitting on veranda" />

                        <h3> Why is it so difficult to make meditation a daily habit?</h3>
                        <img src="img/daily_habit/relax.jpg" alt="girl thinking" className="imgRight" />
                
                        <p>Well, I believe it's difficult to put any new habit into our lives and it’s even more difficult when this habit doesn't "fit" with the rhythm of our everyday life.</p>
                        <p>I was always very busy and stressed in my everyday life, that even if there were moments that I didn’t have so much to do, I was still in this mode. I was so used to be doing and thinking something constantly that being in another state didn’t even exist in my mind. That’s why it’s extremely difficult for many people to take a pause in the middle of the day and simply stop thinking.</p>
                        <p>Another reason can be that we find meditation difficult and confusing. And yes, that’s the impression that we get sometimes. This happens because there are so many different techniques and ways to meditate that if you start looking you will just get overwhelmed.
                        <br />Imagine meditation as the destination you want to reach. There are many different roads you can take to arrive to the same destination.
                        </p>
                        <p>The reason I created this website is to put it simple. I will not get into long explanations and analysis about the different kinds of techniques because that’s not my intention. I want to focus on meditation as the <span className="bigger">process that trains the mind</span>.
                        <br />The goal of meditation is the same in all the techniques anyway, and the way to do it can be a combination of many details originating from many different traditions and techniques.
                        <br />My mission with this website is to learn more about meditation and share the things I know based on my experience with you.
                        </p>

                        <h3>Why is it so important to make meditation a daily habit?</h3>
                        <p>By practicing daily, your brain learns how to exist in a different way on a regular basis. It gets used to new patterns of thinking and existing. If you don’t do it every day it’s just not enough to change these patterns.</p>
                        <p>If you, for example, do it twice per week it’s like you are repeating, again and again, the same things without developing; even if you stay longer than you would stay if you did it every day. It's like when you start learning a language for example. If you don't practice and study the language often enough you will end up repeating what you learned in the previous lessons every time you decide to study.</p>
                        <p className="quote">“We are what we repeatedly do. Excellence, then, is not an act, but a habit."
                         <br /> ~~ Aristotle~~
                        </p>

                        <h4>How to think to make it happen!</h4>
                        <img src="img/daily_habit/woman_meditating.jpg" alt="happy woman meditating" />
                        <p>It doesn’t matter if you meditate only for 5 minutes per day as long as you do it <span className="bigger">every day!</span> It is very difficult to stay longer anyways, if you are a novice. Meditation is something that happens slowly and you have to build it every day, gradually so that you will be able to stay longer without forcing and pressuring  too much yourself.</p>
                        <p>You can even start with 3 minutes per day if you feel that 5 are too much. Between 3 to 10 minutes is a good start. Stay how long it feels good to you.</p>
                
                        <h5>The key is to set the bar low</h5>
                        <p>Thinking: <span className="quotes">” I will meditate 20 minutes today”</span> may make you feel pressure that you have to sit on a specific spot for 20 minutes…. &nbsp;&nbsp;&nbsp;  without moving!! 
                        <br /> That last part can be pretty scary for some people, so I think it’s better to say to yourself <span className="quotes"> “ I will just meditate 3 minutes today”.</span>
                        <p> <span className="underline">The result:</span> Instead of feeling bad and thinking:<span className="quotes">” I find it difficult to stay on this spot for the next 20 minutes..”</span>, your feeling switches to <span className="quotes">“ I just have to sit here for 3 minutes”</span>. 
                        <br />The good thing by thinking like this is that most of the time you will sit more than 3 minutes because you will simply feel like it and not because you have to. </p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-33">
                <div className="sidebar">
                    <div className="col-33 smth">smth</div>
                    <div className="col-66">
                        <p className="search_by_category">Search by category</p>
                        <ul className="list_in_sidebar">
                            <li>Anti-stress</li>
                            <li>Chacras</li>
                            <li>Etheric body</li>
                            <li>Guided Meditations</li>
                            <li>Mantras</li>
                            <li>Meditation Tools</li>
                            <li>Personal Development</li>
                            <li>Yoga</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
            
    );
  }
}

let domContainer = document.querySelector('#daily_habit');
ReactDOM.render(<Dailyhabit />, domContainer);