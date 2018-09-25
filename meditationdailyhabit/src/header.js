'use strict';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <header className="header">
            <h1 className="header__logo">meditationdailyhabit</h1>
        </header>
    );
  }
}

let domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);