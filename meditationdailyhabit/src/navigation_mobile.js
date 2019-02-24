import React from 'react'
import './Style.css';
import './Navigation.css';

export class Navigationmobile extends React.Component {
    
    subMenu1() {
        if(document.getElementById("sub1").style.display === "none") {
            document.getElementById("sub1").style.display = "inline";
        } else if(document.getElementById("sub1").style.display === "inline"){
            document.getElementById("sub1").style.display = "none";
        }
    }

    subMenu2() {
        if(document.getElementById("sub2").style.display === "none") {
            document.getElementById("sub2").style.display = "inline";
        } else if(document.getElementById("sub2").style.display === "inline"){
            document.getElementById("sub2").style.display = "none";
        }
    }

    subMenu3() {
        if(document.getElementById("sub3").style.display === "none") {
            document.getElementById("sub3").style.display = "inline";
        } else if(document.getElementById("sub3").style.display === "inline"){
            document.getElementById("sub3").style.display = "none";
        }
    }

    subMenu4() {
        if(document.getElementById("sub4").style.display === "none") {
            document.getElementById("sub4").style.display = "inline";
        } else if(document.getElementById("sub4").style.display === "inline"){
            document.getElementById("sub4").style.display = "none";
        }
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    } 

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    
    render() {
        return (
            <div id="navigationmobile">

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn xBtn" onClick={this.closeNav}>&times;</a>


                    <a className="active mobileMenuText" href="index.html">Home</a>


                    <div><a href="daily_habit.html" className="mobileMenuText">Μake meditation a daily habit </a><i onClick ={this.subMenu1} className="fas fa-angle-down" style={{fontSize: '25px', display: 'inline'}}></i></div>
                    <div style={{display: 'none'}} id="sub1" className="subCategory1">
                        <a href="/">Establishing your practice</a>
                        <a href="/">Meditation and benefits</a>
                    </div> 


                    <div><a href="/" className="mobileMenuText">Get started </a><i onClick ={this.subMenu2} className="fas fa-angle-down"style={{fontSize: '25px', display: 'inline'}}></i></div>
                    <div style={{display: 'none'}} id="sub2" className="subCategory1">
                        <a href="/">Stage 1 - Cultivating Relaxation</a>
                        <a href="/">Stage 2 - Directing your Attention</a>
                    </div>


                    <div><a href="/" className="mobileMenuText">Meditation essentials </a><i onClick ={this.subMenu3} className="fas fa-angle-down"style={{fontSize: '25px', display: 'inline'}}></i></div>
                        <div style={{display: 'none'}} id="sub3" className="subCategory1">
                            <div>
                                <a href="/">Meditation Instructions</a>
                                <div style={{marginLeft: '5em'}} className="subCategory2">
                                    <a href="/">Basic Meditation Instructions</a>
                                    <a href="/">How to Sit while Meditating</a>
                                    <a href="/">How to Start a Meditation Practice</a>
                                    <a href="7days.html">My 7 Days of Meditation Schedule</a>
                                    <a href="/">Meditation Object</a>
                                    <a href="/">Finding your Intention</a>
                                </div>
                            </div>  

                            <div>
                                <a href="/">Meditation Assistance</a>
                                <div style={{marginLeft: '5em'}} className="subCategory2">
                                    <a href="/">How to Stay Motivated Towards Meditation</a>
                                    <a href="/">How to Deal with Distractions when Meditating - Get Rid of the Negative Feelings</a>
                                    <a href="/">Meditation and Boredom - How to Deal with it</a>
                                </div>
                            </div>
                        </div>    

                    <div><a href="/" className="mobileMenuText">Reviews </a><i onClick ={this.subMenu4} className="fas fa-angle-down"style={{fontSize: '25px', display: 'inline'}}></i></div>
                    <div style={{display: 'none'}} id="sub4" className="subCategory1">
                        <a href="/">How to make the Law of Attraction work for you</a>
                        <a href="/">Take a trip through your mind</a>
                        <a href="/">Do Meditation and Yoga at home</a>
                        <a href="/">"Spoonk" Accupressure Mat reviews</a>
                        <a href="/">Meditation Benches Cushions and Chair,s</a>
                        <a href="/">What is Hypnosis Downloads? - Review</a>
                        <a href="/">Bohemian Island - Harem Pants from Thailand</a>
                    </div>  


                    <a href="/" className="mobileMenuText">Blog</a>


                    <a href="/" className="mobileMenuText">About me</a>    
            </div>
            <span onClick={this.openNav} className="menu"><i className="fas fa-bars"style={{fontSize: '30px'}}></i></span>


        </div>
        );
    }
}
