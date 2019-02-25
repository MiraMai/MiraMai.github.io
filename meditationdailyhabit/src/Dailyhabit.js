import React, { Component } from 'react';
import './Style.css';
import girl_sitting_on_veranda from './girl_sitting_on_veranda.jpg';
import relax from './relax.jpg';
import woman_meditating from './woman_meditating.jpg';
import {Sidebar} from './sidebar';


export class Dailyhabit extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="w-100"></div>
              
                        <div className="col-12">
                            <h2>
                                    How to make meditation a daily habit
                            </h2>
                        </div>

                        <div className="w-100"></div>

                        <div className="col-12">
                            <img src= {girl_sitting_on_veranda}
                            sizes="(max-width: 109em) 53vw, (max-width: 75em) 65vw, (max-width: 31em) 100vw, 900px"
                            alt="girl sitting on veranda"
                            className="imgcenter" />
                        </div> 

                        <div className= "col-12">
                            <h3> Why is it so difficult to make meditation a daily habit?</h3>
                            <img src= {relax}
                            sizes="(max-width: 109em) 22vw, (max-width: 75em) 26vw, (max-width: 31em) 25vw, 426px"
                            alt="girl thinking"
                            className="imgRight" />
                            <p>Well, I believe it's difficult to put any new habit into our lives and it’s even more difficult when this habit doesn't "fit" with the rhythm of our everyday life.</p>
                            <p>I was always very busy and stressed in my everyday life, that even if there were moments that I didn’t have so much to do, I was still in this mode. I was so used to be doing and thinking something constantly that being in another state didn’t even exist in my mind. That’s why it’s extremely difficult for many people to take a pause in the middle of the day and simply stop thinking.</p>
                            <p>Another reason can be that we find meditation difficult and confusing. And yes, that’s the impression that we get sometimes. This happens because there are so many different techniques and ways to meditate that if you start looking you will just get overwhelmed.
                            <br />Imagine meditation as the destination you want to reach. There are many different roads you can take to arrive to the same destination.
                            </p>
                            <p>The reason I created this website is to put it simple. I will not get into long explanations and analysis about the different kinds of techniques because that’s not my intention. I want to focus on meditation as the <span className="bigger">process that trains the mind</span>.
                            <br />The goal of meditation is the same in all the techniques anyway, and the way to do it can be a combination of many details originating from many different traditions and techniques.
                            <br />My mission with this website is to learn more about meditation and share the things I know based on my experience with you.
                            </p>

                        </div>   

                        <div className= "col-12">
                            <h3> Why is it so important to make meditation a daily habit? </h3>
                            <p>By practicing daily, your brain learns how to exist in a different way on a regular basis. It gets used to new patterns of thinking and existing. If you don’t do it every day it’s just not enough to change your way of thinking.
                            <br />
                               If you, for example, do it twice per week it’s like you are repeating, again and again, the same things without developing; even if you stay longer than you would stay if you did it every day. It's like when you start learning a language for example. If you don't practice and study the language often enough you will end up repeating what you learned in the previous lessons every time you decide to study.
                            <br />   
                               At this point, I want to mention what the great philosopher Aristotle said: 
                            </p>
                            <p className="quote">“We are what we repeatedly do. Excellence, then, is not an act, but a habit."</p>
                        </div>

                        <div className= "col-12">
                            <h4> How to think to make it happen! </h4>
                            <img src= {woman_meditating}
                            sizes="(max-width: 109em) 53vw, (max-width: 75em) 65vw, (max-width: 31em) 100vw, 900px"
                            alt="girl sitting on veranda"
                            className="imgcenter" />
                            <p>It doesn’t matter if you meditate only for 5 minutes per day as long as you do it <span className="bigger">every day!</span></p>
                            <p>Besides, a beginner cannot stay more than a few minutes. Meditation is something that happens slowly and you have to build it every day, gradually so that you will be able to stay longer without forcing and pressuring  too much yourself. You can even start with 3 minutes per day if you feel that 5 are too much.</p>
                        </div>  

                        <div className= "col-12">
                            <h5> The key is to set the bar low </h5>
                            <p>When you say to yourself: <span className="quotes">” I will meditate for 20 minutes today”,</span>  may make you feel pressure that you have to sit on a specific spot for 20 minutes….<span className="bigger">without moving!!</span></p>
                            <p>So I think it’s better to say:  <span className="quotes">“ I will just meditate for 3 minutes today”</span>.</p>
                            <p>The result → Instead of feeling bad and thinking: <span className="quotes">” I find it difficult to stay on this spot for the next 20 minutes..”</span>, your feeling switches to: <span className="quotes">“I just have to sit here for 3 minutes”</span>.</p>
                            <p>The good thing by thinking like this is that most of the time you will sit more than 3 minutes because you simply feel like it and not because you have to.</p>
                        </div>      

                    </div>  

                    <Sidebar />  
                </div>    
            </div>    



                       

        );
    }
}