'use strict';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <navigation className="navigation">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#dailyHabit">How to make meditation a daily habit</a></li>
                <li><a href="#getStarted">Get started</a></li>
                <li><a href="#meditationEssentials">Meditation essentials</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li style={{float:'right'}}><a href="#about">About</a></li>
                <li style={{float:'right'}}><a href="#blog">Blog</a></li>
              </ul>
        </navigation>
    );
  }
}

let domContainer = document.querySelector('#navigation');
ReactDOM.render(<Navigation />, domContainer);