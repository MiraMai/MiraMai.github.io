import React, { Component } from 'react';
import './Navigation.css';


export class Navigation extends Component {
    render() {
        return (
            <navigation className="navigation">
                <ul id="navMenu">



                    <li><a href="home.html">Home</a></li>


                    <li><a href="daily_habit.html">How to make meditation a daily habit</a>
                        <ul>
                            <li><a href="#">Establishing your practice</a></li>
                            <li><a href="#">Meditation and benefits</a></li>
                        </ul>
                    </li>


                    <li><a href="#">Get started</a>
                        <ul>
                            <li><a href="#">Stage 1 - Cultivating Relaxation</a></li>
                            <li><a href="#">Stage 2 - Directing your Attention</a></li>
                        </ul>
                    </li>


                    <li><a href="#">Meditation essentials</a>
                        <ul>
                            <li><a href="#">Meditation Instructions</a>
                                <ul class="third">
                                    <li><a href="#">Basic Meditation Instructions</a></li>
                                    <li><a href="#">How to Sit while Meditating</a></li>
                                    <li><a href="#">How to Start a Meditation Practice</a></li>
                                    <li><a href="7days.html">My 7 Days of Meditation Schedule</a></li>
                                    <li><a href="#">Meditation Object</a></li>
                                    <li><a href="#">Finding your Intention</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Meditation Assistance</a>
                                <ul class="third">
                                    <li><a href="#">How to Stay Motivated Towards Meditation</a></li>
                                    <li><a href="#">How to Deal with Distractions when Meditating - Get Rid of the Negative Feelings</a></li>
                                    <li><a href="#">Meditation and Boredom - How to Deal with it</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li style={{float: 'right'}}><a href="#">About me</a></li>


                    <li style={{float: 'right'}}><a href="#">Blog</a></li>

                
                    <li style={{float: 'right'}}><a href="#">Reviews</a>
                        <ul>
                            <li><a href="#">How to make the Law of Attraction work for you</a></li>
                            <li><a href="#">Take a trip through your mind</a></li>
                            <li><a href="#">Do Meditation and Yoga at home</a></li>
                            <li><a href="#">"Spoonk" Accupressure Mat reviews</a></li>
                            <li><a href="#">Meditation Benches Cushions and Chairs</a></li>
                            <li><a href="#">What is Hypnosis Downloads? - Review</a></li>
                            <li><a href="#">Bohemian Island - Harem Pants from Thailand</a></li>
                        </ul>
                    </li>
                </ul>
        
            </navigation>
        );
    }
}