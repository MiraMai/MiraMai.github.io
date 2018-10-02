'use strict';

class  Dailyhabit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="dailyhabit">
            <h1>dailyhabit</h1>
        </div>
    );
  }
}

let domContainer = document.querySelector('#daily_habit');
ReactDOM.render(<Dailyhabit />, domContainer);