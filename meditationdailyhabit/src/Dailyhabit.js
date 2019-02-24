import React, { Component } from 'react';
import './Style.css';
import h2_icon from './h2_icon.png';
import girl_sitting_on_veranda from './girl_sitting_on_veranda.jpg';
import relax from './relax.jpg';


export class Dailyhabit extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="w-100"></div>
              
                        <div className="col-12">
                            <h2>
                                <img src={h2_icon} alt="lotus icon" />
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




                    </div>    
                </div>    
            </div>    



                       

        );
    }
}