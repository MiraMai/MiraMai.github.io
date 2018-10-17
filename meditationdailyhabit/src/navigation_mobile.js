'use strict';

class Navigationmobile extends React.Component {
    
    

    openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    } 

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    
    render() {
        return (
            <div>

                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>


                    <a className="active" href="index.html">Home</a>


                    <a href="daily_habit.html">How to make meditation a daily habit</a>
                    <div style={{marginLeft: '2.5em'}}>
                        <a href="#">Establishing your practice</a>
                        <a href="#">Meditation and benefits</a>
                    </div>


                    <a href="#">Get started</a> 
                    <div style={{marginLeft: '2.5em'}}>
                        <a href="#">Stage 1 - Cultivating Relaxation</a>
                        <a href="#">Stage 2 - Directing your Attention</a>
                    </div>


                    <a href="#">Meditation essentials</a> 
                    <div style={{marginLeft: '2.5em'}}>
                        <a href="#">Meditation Instructions</a>
                        <div style={{marginLeft: '5em'}}>
                            <a href="#">Basic Meditation Instructions</a>
                            <a href="#">How to Sit while Meditating</a>
                            <a href="#">How to Start a Meditation Practice</a>
                            <a href="#">My 7 Days of Meditation Schedule</a>
                            <a href="#">Meditation Object</a>
                            <a href="#">Finding your Intention</a>
                        </div>
                    </div>  

                    <div style={{marginLeft: '2.5em'}}>
                        <a href="#">Meditation Assistance</a>
                        <div style={{marginLeft: '5em'}}>
                            <a href="#">How to Stay Motivated Towards Meditation</a>
                            <a href="#">How to Deal with Distractions when Meditating - Get Rid of the Negative Feelings</a>
                            <a href="#">Meditation and Boredom - How to Deal with it</a>
                        </div>
                    </div>

                    <a href="#">Reviews</a>  
                    <div style={{marginLeft: '2.5em'}}>
                        <a href="#">How to make the Law of Attraction work for you</a>
                        <a href="#">Take a trip through your mind</a>
                        <a href="#">Do Meditation and Yoga at home</a>
                        <a href="#">"Spoonk" Accupressure Mat reviews</a>
                        <a href="#">Meditation Benches Cushions and Chair,s</a>
                        <a href="#">What is Hypnosis Downloads? - Review</a>
                        <a href="#">Bohemian Island - Harem Pants from Thailand</a>
                    </div>  


                    <a href="#">Blog</a>


                    <a href="#">About me</a>    
            </div>
            <span onClick={this.openNav} className="menu"><i className="fas fa-bars"></i></span>


        </div>
        );
    }
}

let domContainer = document.querySelector('#navigationmobile');
ReactDOM.render(<Navigationmobile />, domContainer);