'use strict';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <navigation className="navigation">
        <ul>
            <li><a className="active" href="index.html">Home</a></li>
            <li className="navigation__dropdown">
                <a href="daily_habit.html" className="navigation__dropdown-link">How to make meditation a daily habit</a>
                <div className="navigation__dropdown-link-dropdownContent">
                    <a href="#">Establishing your practice</a>
                    <a href="#">Meditation and benefits</a>
                </div>
            </li>
            <li><a href="#">Get started</a></li>
            <li><a href="#">Meditation essentials</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
    </navigation>

        );
    }
}

let domContainer = document.querySelector('#navigation');
ReactDOM.render(<Navigation />, domContainer);